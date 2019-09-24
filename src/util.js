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
    // TODO: add prop munger for ease of use
}) => {
    return (globalTheme = {}) => {

        const {
            defaultStyle = {},
            defaultClassName = '',
            excludeComponentDefaultClassName = false,
        } = themeSelector(globalTheme);

        return ({
            style = {},

            className: propClassName,
            childClassName: propChildClassName,

            children,

            ...props
        }) => {
            return (
                <Tag
                    className={catClassName(
                        (excludeComponentDefaultClassName ? '' : `y ${componentClassName}`),
                        defaultClassName,
                        propClassName
                    )}
                    style={Object.assign({}, defaultStyle, style)}
                    {...props}
                >
                    {children}
                </Tag>
            );
        }

    }
}


export default {
    catClassName,
    buildGenericThemableComponent
}