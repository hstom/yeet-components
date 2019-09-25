import React from 'react';
export const catClassName = (...classNames) => {
    return [].concat.apply([],
        classNames.map((className = '') => Array.from(new Set(className.split(' ').filter(z => !!z))))
    ).join(' ');
};

export const buildGenericThemableComponent = ({
    Tag = 'div',
    componentClassName = '',
    themeSelector = () => { },
    displayName='YComponent'
    // TODO: add prop munger for ease of use
}) => {
    return (globalTheme = {}) => {
        const {
            defaultStyle = {},
            defaultClassName = '',
            excludeComponentDefaultClassName = false,
        } = themeSelector(globalTheme);

        const Component = ({
            style = {},
            className,

            children,
            ...props
        }) => {
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


export default {
    catClassName,
    buildGenericThemableComponent
}