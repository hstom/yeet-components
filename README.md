# yeet-components
some basic styled components WIP

run `npm start` to get a dev server with the widgets
run `./start.sh` if your dang path is messed up and docz isn't in scope

github pages: https://hstom.github.io/yeet-components/

github source: https://github.com/hstom/yeet-components

95% of the entire thing is just this
```
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
```
