import React, {useEffect, useContext, useMemo} from 'react';

export const YThemeContext = React.createContext();

/**
 * Build a fully themable and overridable generic component for library export use.
 */
export const buildGenericThemableComponent = ({
    // "Compile time config"
    Tag: componentTag = 'div',
    //style: componentStyle, // USE A CLASS NAMED CSS INSTEAD PLEASE
    className: componentClassName = '',

    themeSelector: componentThemeSelector = () => { },
    displayName: componentDisplayName ='YComponent',
    propMutator: componentPropMutator = props => props,
    forwardRef = false
}) => {
    const Component = (preProps) => {
        const componentTheme = useContext(YThemeContext);
        const {
            // "Theme" level config
            Tag: themeTag,
            style: themeStyle = {},
            className: themeClassName,

            excludeComponentClassName = false,
        } = useMemo(() => componentThemeSelector(componentTheme|| {}), [componentTheme]);

        const {
            // "Runtime" prop level config
            Tag: propTag,
            style: propStyle = {},
            className: propClassName,

            children,
            YC_forwardedRef,
            ...props
        } = componentPropMutator(preProps);

        const CTag = propTag ? propTag : themeTag ? themeTag : componentTag;
        const className = catClassName(
            (excludeComponentClassName ? '' : `y ${componentClassName}`),
            themeClassName,
            propClassName
        );
        const style = Object.assign({}, themeStyle, propStyle);

        return (
            <CTag
                className={className}
                style={style}
                {...props}
                {...(forwardRef ? {ref: YC_forwardedRef} : {})}
            >
                {children}
            </CTag>
        );
    }
    Component.displayName = componentDisplayName;

    return !forwardRef
        ? Component
        : React.forwardRef((props, ref) => {return <Component {...props} YC_forwardedRef={ref} />;});
}

/**
 * Build a themable component with default class names and display names.
 * Basically buildGenericThemableComponent but for simple one liners.
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
        className: `${kebabCase(suffix)}${extraClassNames.length > 0 ? ' ' : ''}${extraClassNames.join(' ')}`,
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

/**
 * No dependency utilities.
 */
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

//const camelCase = spacedString => spacedString.split(' ').map((word, i) => (i === 0 ? word[0].toLowerCase() : word[0].toUpperCase()) + word.slice(1).toLowerCase()).join('');
const pascalCase = spacedString => spacedString.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
const kebabCase = spacedString => spacedString.split(' ').map((word, i) => (i === 0 ? '' : '-') + word.toLowerCase()).join('');