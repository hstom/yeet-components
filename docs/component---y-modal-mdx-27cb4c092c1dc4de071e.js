(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{982:function(e,t,n){"use strict";n.r(t);n(12),n(6),n(7),n(4),n(8),n(5),n(171),n(9);var a=n(1),o=n.n(a),i=n(82),l=n(971),r=n(33),s=n(985),c=n(972),u=n(986),d=n(973),b="import React from 'react';\nimport { catClassName } from '../../util.js';\nimport './YModal.css';\n\nconst YModalDefaultClassName = 'y y-modal';\nconst YModalDefaultChildClassName = 'y y-modal-content'\n\nexport const ThemableYModal = (globalTheme = {}) => {\n    const componentTheme = (globalTheme.YModal) || {}; \n\n    const {\n        defaultStyle={},\n        defaultChildStyle={}, \n        defaultClassName='',\n        defaultChildClassName='',\n        excludeComponentDefaultClassName=false,\n        excludeComponentDefaultChildClassName=false\n    } = componentTheme;\n\n    return ({\n        style = {},\n        childStyle = {},\n        \n        className: propClassName,\n        childClassName: propChildClassName,\n        \n        children,\n        \n        ...props\n    }) => {\n        return (\n            <div\n                className={catClassName(\n                    (excludeComponentDefaultClassName ? '' : YModalDefaultClassName),\n                    defaultClassName,\n                    propClassName\n                )}\n                style={Object.assign({}, defaultStyle, style)}\n                {...props}\n            >\n                <div\n                    className={catClassName(\n                        (excludeComponentDefaultChildClassName ? '' : YModalDefaultChildClassName),\n                        defaultChildClassName,\n                        propChildClassName\n                    )}\n                    style={Object.assign({}, defaultChildStyle, childStyle)}\n                >\n                    {children}\n                </div>\n            </div>\n        );\n    }\n    \n}\n\nconst YModal = ThemableYModal();\nexport default YModal;";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return h}));var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"YModal.mdx"}});var f={_frontmatter:p},y=l.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(i.b)(y,m({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"ymodal"},"YModal"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"position-fixed"},"position: fixed;"),Object(i.b)("h3",{id:"position-fixed-default"},"position: fixed (default)"),Object(i.b)(r.c,{__position:0,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal>\n            Hello, I am a basic modal, close me with{' '}\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:l.a,Playground:r.c,YModal:s.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)(u.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(u.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(o.a.Fragment,null,Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(s.b,{mdxType:"YModal"},"Hello, I am a basic modal, close me with ",Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h3",{id:"position-fixed-default-with-width-fit-content"},"position: fixed (default) with width: fit-content"),Object(i.b)(r.c,{__position:1,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal childStyle={{ width: 'fit-content' }}>\n            Hello, I am a basic modal, close me with{' '}\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:l.a,Playground:r.c,YModal:s.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)(u.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(u.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(o.a.Fragment,null,Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(s.b,{childStyle:{width:"fit-content"},mdxType:"YModal"},"Hello, I am a basic modal, close me with ",Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h2",{id:"position-fixed-default-with-height-overflow"},"position: fixed (default) with height overflow"),Object(i.b)(r.c,{__position:2,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal>\n            Hello, I am a basic modal,\n            <div>\n              {Array(100)\n                .fill()\n                .map((_, i) => (\n                  <span key={'key' + i}>and I'm just way too verbose</span>\n                ))}\n            </div>\n            {Array(100)\n              .fill()\n              .map((_, i) => (\n                <div key={'key' + i}>and I'm just way too verbose</div>\n              ))}\n            , close me with\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:l.a,Playground:r.c,YModal:s.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)(u.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(u.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(o.a.Fragment,null,Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(s.b,{mdxType:"YModal"},"Hello, I am a basic modal,",Object(i.b)("div",null,Array(100).fill().map((function(e,t){return Object(i.b)("span",{key:"key"+t},"and I'm just way too verbose")}))),Array(100).fill().map((function(e,t){return Object(i.b)("div",{key:"key"+t},"and I'm just way too verbose")})),", close me with",Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h2",{id:"position-absolute"},"position: absolute;"),Object(i.b)(r.c,{__position:3,__code:"<div style={{ position: 'relative', height: '400px' }}>\n  <YModal\n    style={{\n      position: 'absolute',\n      zIndex: 'unset',\n    }}\n  >\n    More like resolute!\n  </YModal>\n</div>",__scope:{props:n,DefaultLayout:l.a,Playground:r.c,YModal:s.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)("div",{style:{position:"relative",height:"400px"}},Object(i.b)(s.b,{style:{position:"absolute",zIndex:"unset"},mdxType:"YModal"},"More like resolute!"))),Object(i.b)("h2",{id:"position-absolute-with-height-overflow"},"position: absolute; with height overflow"),Object(i.b)(r.c,{__position:4,__code:"<div style={{ position: 'relative', height: '400px' }}>\n  <YModal\n    style={{\n      position: 'absolute',\n      zIndex: 'unset',\n    }}\n  >\n    <div>\n      {Array(100)\n        .fill()\n        .map((_, i) => (\n          <span key={'key' + i}>Wow there's just so many words!</span>\n        ))}\n    </div>\n    {Array(100)\n      .fill()\n      .map((_, i) => (\n        <div key={'key' + i}>And just even more!</div>\n      ))}\n  </YModal>\n</div>",__scope:{props:n,DefaultLayout:l.a,Playground:r.c,YModal:s.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)("div",{style:{position:"relative",height:"400px"}},Object(i.b)(s.b,{style:{position:"absolute",zIndex:"unset"},mdxType:"YModal"},Object(i.b)("div",null,Array(100).fill().map((function(e,t){return Object(i.b)("span",{key:"key"+t},"Wow there's just so many words!")}))),Array(100).fill().map((function(e,t){return Object(i.b)("div",{key:"key"+t},"And just even more!")}))))),Object(i.b)("h1",{id:"source"},"Source"),Object(i.b)("p",null,"./src/YBasic/YModal/YModal.js"),Object(i.b)(d.a,{source:b,mdxType:"SourceDisplay"}))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"YModal.mdx"}}),h.isMDXComponent=!0},985:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(5),n(6),n(7),n(4),n(8),n(12);var a=n(9),o=(n(1),n(241));n(974);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){void 0===e&&(e={});var t=e.YModal||{},n=t.defaultStyle,l=void 0===n?{}:n,r=t.defaultChildStyle,s=void 0===r?{}:r,c=t.defaultClassName,u=void 0===c?"":c,d=t.defaultChildClassName,b=void 0===d?"":d,m=t.excludeComponentDefaultClassName,p=void 0!==m&&m,f=t.excludeComponentDefaultChildClassName,y=void 0!==f&&f;return function(e){var t=e.style,n=void 0===t?{}:t,r=e.childStyle,c=void 0===r?{}:r,d=e.className,m=e.childClassName,f=e.children,h=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["style","childStyle","className","childClassName","children"]);return Object(a.c)("div",i({className:Object(o.a)(p?"":"y y-modal",u,d),style:Object.assign({},l,n)},h),Object(a.c)("div",{className:Object(o.a)(y?"":"y y-modal-content",b,m),style:Object.assign({},s,c)},f))}};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}});var r=l();t.b=r,void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}})},986:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));n(81),n(36),n(12);var a=n(1),o=n.n(a),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=o.a.createContext({setState:function(){}}),u=function(e){function t(){var n,a;l(this,t);for(var o=arguments.length,s=Array(o),c=0;c<o;c++)s[c]=arguments[c];return n=a=r(this,e.call.apply(e,[this].concat(s))),a.state=i({},a.props.initialState,{setState:function(e){return a.setState(e)}}),r(a,n)}return s(t,e),t.prototype.render=function(){return o.a.createElement(c.Provider,{value:this.state},o.a.createElement(o.a.Fragment,null,"function"==typeof this.props.children?this.props.children(this.state):this.props.children))},t}(o.a.Component);u.defaultProps={initialState:{}};var d=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(c.Consumer,null,(function(t){return e(t)}))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---y-modal-mdx-27cb4c092c1dc4de071e.js.map