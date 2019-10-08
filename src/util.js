import React, {useEffect, useRef} from 'react';
export const catClassName = (...classNames) => {
    return [].concat.apply([],
        classNames.map((className = '') => Array.from(new Set(className.split(' ').filter(z => !!z))))
    ).join(' ');
};

export const mergeRefs = (...refs) => (elem) => {
    refs.forEach(ref => {
        if(typeof ref === 'function') {
            ref(elem);
        } else {
            ref.current = elem;
        }
    });
}

export const useClickOutsideHandler = (nodeRef, onOutsideClick) => {
    const handleClick = e => {
        if(nodeRef.current && !nodeRef.current.contains(e.target)) {
            onOutsideClick(e);
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick, false);
        return () => {
            document.removeEventListener('mousedown', handleClick, false);
        }
    })
}

/**
 * Requires target to bind a wrapperRef;
 * requires target to have a onOutsideClick method
 */
export const outsideClick = (WrappedComponent) => ({disableOutsideClick, ...props}) => {
    const clickTarget = useRef();

    if(!disableOutsideClick) {
        useEffect(() => {
            const checkOutsideClick = e => {
                if(clickTarget.current && clickTarget.current.wrapperRef.current && !clickTarget.current.wrapperRef.current.contains(e.target)) {
                    e.preventDefault();
                    if(clickTarget.current.props.onOutsideClick) {
                        clickTarget.current.props.onOutsideClick(e);
                    } else if (clickTarget.current.onOutsideClick) {
                        clickTarget.current.onOutsideClick(e);
                    }
                };
            }

            document.addEventListener('mousedown', checkOutsideClick, false);

            return () => {
                document.removeEventListener('mousedown', checkOutsideClick, false);
            }
        }, [clickTarget]);
    }

    return  (<WrappedComponent ref={clickTarget} {...props} />);
}

export const buildGenericThemableComponent = ({
    Tag = 'div',
    componentClassName = '',
    themeSelector = () => { },
    displayName='YComponent',
    propMutator = props => props,
    forwardRef = false
}) => {
    return (globalTheme = {}) => {
        const {
            defaultStyle = {},
            defaultClassName = '',
            excludeComponentDefaultClassName = false,
        } = themeSelector(globalTheme);


        if(forwardRef) { // TODO inline
            const Component = (preProps) => {
                const {
                    style = {},
                    className,
        
                    children,
                    forwardedRef,
                    ...props
                } = propMutator(preProps);
                return (
                    <Tag
                        className={catClassName(
                            (excludeComponentDefaultClassName ? '' : `y ${componentClassName}`),
                            defaultClassName,
                            className
                        )}
                        style={Object.assign({}, defaultStyle, style)}
                        {...props}
                        ref={forwardedRef}
                    >
                        {children}
                    </Tag>
                );
            }
            Component.displayName = displayName;
            return React.forwardRef((props, ref) => {
                return <Component {...props} forwardedRef={ref} />;
            });
        }

        const Component = (preProps) => {
            const {
                style = {},
                className,
    
                children,
                ...props
            } = propMutator(preProps);
            
            return (
                <Tag
                    className={catClassName(
                        (excludeComponentDefaultClassName ? '' : `y ${componentClassName}`),
                        defaultClassName,
                        className
                    )}
                    style={Object.assign({}, defaultStyle, style)}
                    {...props}
                >
                    {children}
                </Tag>
            );
        }
        Component.displayName = displayName;
        return Component;

    }
}


//const camelCase = spacedString => spacedString.split(' ').map((word, i) => (i === 0 ? word[0].toLowerCase() : word[0].toUpperCase()) + word.slice(1).toLowerCase()).join('');
const pascalCase = spacedString => spacedString.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
const kebabCase = spacedString => {
    
    const result = spacedString.split(' ').map((word, i) => (i === 0 ? '' : '-') + word.toLowerCase()).join('');
    if(result.includes('undefined')) {
        debugger;
    }
    return result;
}

export const buildSimpleGenericThemableComponent = (
    suffix,
    {
        Tag = 'div',
        themeSelector = () => {},
        propMutator = props => props,
        forwardRef = false
    } = {}
    ) => buildGenericThemableComponent({
        Tag,
        componentClassName: kebabCase(suffix),
        themeSelector,
        displayName: pascalCase(suffix),
        propMutator,
        forwardRef
});

export const getGenericThemableSubcomponentBuilder = (prefix, baseThemeSelector) => (
    suffix = '', // TODO take vararg of suffixes
    {
        Tag = 'div',
        themeSelector: subThemeSelector = () => {}, // TODO DEFAULT
        propMutator = props => props,
        forwardRef = false,
        noPrefix = false
    } = {}
    ) => buildSimpleGenericThemableComponent(
        `${noPrefix ? '' : prefix}${(suffix !== '' && !noPrefix) ? ' ' : ''}${suffix}`,
        {
            Tag,
            themeSelector: suffix === ''
                ? (globalTheme => baseThemeSelector(globalTheme) || {})
                : (globalTheme => subThemeSelector(baseThemeSelector(globalTheme || {}) || {}) || {}),
            propMutator,
            forwardRef
        }
);

export default {
    catClassName,
    buildGenericThemableComponent
}