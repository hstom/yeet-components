import React, {useEffect, useContext} from 'react';
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

export const YThemeContext = React.createContext();

export const buildGenericThemableComponent = ({
    Tag = 'div',
    componentClassName = '',
    themeSelector = () => { },
    displayName='YComponent',
    propMutator = props => props,
    forwardRef = false
}) => {
    if(forwardRef) { // will hang if inlined... why?
        const Component = (preProps) => {
            const {
                style = {},
                className,
    
                children,
                forwardedRef,
                ...props
            } = propMutator(preProps);

            const {
                defaultStyle = {},
                defaultClassName = '',
                excludeComponentDefaultClassName = false,
            } = themeSelector(useContext(YThemeContext) || {}); // TODO memo

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

        const {
            defaultStyle = {},
            defaultClassName = '',
            excludeComponentDefaultClassName = false,
        } = themeSelector(useContext(YThemeContext) || {}); // TODO memo
        
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

//const camelCase = spacedString => spacedString.split(' ').map((word, i) => (i === 0 ? word[0].toLowerCase() : word[0].toUpperCase()) + word.slice(1).toLowerCase()).join('');
const pascalCase = spacedString => spacedString.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
const kebabCase = spacedString => {
    
    const result = spacedString.split(' ').map((word, i) => (i === 0 ? '' : '-') + word.toLowerCase()).join('');
    if(result.includes('undefined')) {
        debugger;
    }
    return result;
}

/**
 * Build a themable component with default class names and display names
 */
export const buildSimpleGenericThemableComponent = (
    suffix,
    {
        Tag = 'div',
        themeSelector = theme => theme,
        propMutator = props => props,
        forwardRef = false,
        displayName = pascalCase(suffix),
        extraClassNames = []
    } = {}
    ) => buildGenericThemableComponent({
        Tag,
        componentClassName: `${kebabCase(suffix)}${extraClassNames.length > 0 ? ' ' : ''}${extraClassNames.join(' ')}`,
        themeSelector,
        displayName,
        propMutator,
        forwardRef
});

/**
 * Build a themable subcomponent builder:
 *   bake in a prefix and then you can just add a suffix for easy themable subcomponents
 */
export const getGenericThemableSubcomponentBuilder = (prefix, baseThemeSelector) => (
    suffix = '',
    {
        Tag = 'div',
        themeSelector: subThemeSelector = (theme) => theme,
        propMutator = props => props,
        forwardRef = false,
        noPrefix = false,
        extraClassNames = [],
        displayName
    } = {}
    ) => buildSimpleGenericThemableComponent(
        `${noPrefix ? '' : prefix}${(suffix !== '' && !noPrefix) ? ' ' : ''}${suffix}`,
        {
            Tag,
            themeSelector: suffix === ''
                ? (globalTheme => baseThemeSelector(globalTheme) || {})
                : (globalTheme => subThemeSelector(baseThemeSelector(globalTheme || {}) || {}) || {}),
            propMutator,
            forwardRef,
            displayName,
            extraClassNames
        }
);

export default {
    catClassName,
    buildGenericThemableComponent
}