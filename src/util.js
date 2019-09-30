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


export default {
    catClassName,
    buildGenericThemableComponent
}