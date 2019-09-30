(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{990:function(e,n,t){"use strict";t.r(n);t(12),t(6),t(7),t(4),t(8),t(5),t(9),t(1);var a=t(82),r=t(973),o=(t(33),t(974)),s="import React from 'react';\nexport const catClassName = (...classNames) => {\n    return [].concat.apply([],\n        classNames.map((className = '') => Array.from(new Set(className.split(' ').filter(z => !!z))))\n    ).join(' ');\n};\n\nexport const buildGenericThemableComponent = ({\n    Tag = 'div',\n    componentClassName = '',\n    themeSelector = () => { },\n    displayName='YComponent',\n    propMutator = props => props,\n    forwardRef = false\n}) => {\n    return (globalTheme = {}) => {\n        const {\n            defaultStyle = {},\n            defaultClassName = '',\n            excludeComponentDefaultClassName = false,\n        } = themeSelector(globalTheme);\n\n        if(forwardRef) { // TODO inline\n            const Component = (preProps) => {\n                const {\n                    style = {},\n                    className,\n        \n                    children,\n                    forwardedRef,\n                    ...props\n                } = propMutator(preProps);\n                return (\n                    <Tag\n                        className={catClassName(\n                            (excludeComponentDefaultClassName ? '' : `y ${componentClassName}`),\n                            defaultClassName,\n                            className\n                        )}\n                        style={Object.assign({}, defaultStyle, style)}\n                        {...props}\n                        ref={forwardedRef}\n                    >\n                        {children}\n                    </Tag>\n                );\n            }\n            Component.displayName = displayName;\n            return React.forwardRef((props, ref) => {\n                return <Component {...props} forwardedRef={ref} />;\n            });\n        }\n\n        const Component = (preProps) => {\n            const {\n                style = {},\n                className,\n    \n                children,\n                ...props\n            } = propMutator(preProps);\n            return (\n                <Tag\n                    className={catClassName(\n                        (excludeComponentDefaultClassName ? '' : `y ${componentClassName}`),\n                        defaultClassName,\n                        className\n                    )}\n                    style={Object.assign({}, defaultStyle, style)}\n                    {...props}\n                >\n                    {children}\n                </Tag>\n            );\n        }\n        Component.displayName = displayName;\n        return Component;\n\n    }\n}\n\n\nexport default {\n    catClassName,\n    buildGenericThemableComponent\n}";function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return i}));var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"util.mdx"}});var p={_frontmatter:c},m=r.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(m,l({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"utiljs"},"util.js"),Object(a.b)("p",null,"to avoid non react dependencies, these are just in a little util file"),Object(a.b)("h2",{id:"catclassname"},"catClassName"),Object(a.b)("p",null,"split arbitrary number of className strings on space, dedupe, space join"),Object(a.b)("h2",{id:"buildgenericthemablecomponent"},"buildGenericThemableComponent"),Object(a.b)("p",null,"with input of {tag, className, and themeSelector, and propMutator} build themable basic widget"),Object(a.b)("h1",{id:"source"},"Source"),Object(a.b)(o.a,{source:s,mdxType:"SourceDisplay"}))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"util.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---util-mdx-9824d457bde0c446ceca.js.map