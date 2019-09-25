(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{985:function(e,t,n){"use strict";n.r(t);n(12),n(6),n(7),n(4),n(8),n(5),n(172),n(9);var a=n(1),o=n.n(a),i=n(82),l=n(973),s=n(33),r=n(990),c=n(972),u=n(975),d=n(974),b="import React from 'react';\nimport { catClassName } from '../../util.js';\nimport './YModal.css';\n\nconst YModalDefaultClassName = 'y y-modal';\nconst YModalDefaultChildClassName = 'y y-modal-content'\n\nexport const ThemableYModal = (globalTheme = {}) => {\n\n    const {\n        defaultStyle={},\n        defaultChildStyle={}, \n        defaultClassName='',\n        defaultChildClassName='',\n        excludeComponentDefaultClassName=false,\n        excludeComponentDefaultChildClassName=false\n    } = ((globalTheme.YBasic || {}).YTable || {});\n\n    return ({\n        style = {},\n        childStyle = {},\n        \n        className: propClassName,\n        childClassName: propChildClassName,\n        \n        children,\n        \n        ...props\n    }) => {\n        return (\n            <div\n                className={catClassName(\n                    (excludeComponentDefaultClassName ? '' : YModalDefaultClassName),\n                    defaultClassName,\n                    propClassName\n                )}\n                style={Object.assign({}, defaultStyle, style)}\n                {...props}\n            >\n                <div\n                    className={catClassName(\n                        (excludeComponentDefaultChildClassName ? '' : YModalDefaultChildClassName),\n                        defaultChildClassName,\n                        propChildClassName\n                    )}\n                    style={Object.assign({}, defaultChildStyle, childStyle)}\n                >\n                    {children}\n                </div>\n            </div>\n        );\n    }\n    \n}\n\nconst YModal = ThemableYModal();\nexport default YModal;";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"_frontmatter",(function(){return y})),n.d(t,"default",(function(){return O}));var y={};void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"YModal.mdx"}});var f={_frontmatter:y},p=l.a;function O(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(i.b)(p,m({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"ymodal"},"YModal"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"position-fixed"},"position: fixed;"),Object(i.b)("h3",{id:"position-fixed-default"},"position: fixed (default)"),Object(i.b)(s.c,{__position:0,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal>\n            Hello, I am a basic modal, close me with{' '}\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:l.a,Playground:s.c,YModal:r.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)(u.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(u.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(o.a.Fragment,null,Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(r.b,{mdxType:"YModal"},"Hello, I am a basic modal, close me with ",Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h3",{id:"position-fixed-default-with-width-fit-content"},"position: fixed (default) with width: fit-content"),Object(i.b)(s.c,{__position:1,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal childStyle={{ width: 'fit-content' }}>\n            Hello, I am a basic modal, close me with{' '}\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:l.a,Playground:s.c,YModal:r.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)(u.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(u.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(o.a.Fragment,null,Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(r.b,{childStyle:{width:"fit-content"},mdxType:"YModal"},"Hello, I am a basic modal, close me with ",Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h2",{id:"position-fixed-default-with-height-overflow"},"position: fixed (default) with height overflow"),Object(i.b)(s.c,{__position:2,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal>\n            Hello, I am a basic modal,\n            <div>\n              {Array(100)\n                .fill()\n                .map((_, i) => (\n                  <span key={'key' + i}>and I'm just way too verbose</span>\n                ))}\n            </div>\n            {Array(100)\n              .fill()\n              .map((_, i) => (\n                <div key={'key' + i}>and I'm just way too verbose</div>\n              ))}\n            , close me with\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:l.a,Playground:s.c,YModal:r.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)(u.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(u.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(o.a.Fragment,null,Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(r.b,{mdxType:"YModal"},"Hello, I am a basic modal,",Object(i.b)("div",null,Array(100).fill().map((function(e,t){return Object(i.b)("span",{key:"key"+t},"and I'm just way too verbose")}))),Array(100).fill().map((function(e,t){return Object(i.b)("div",{key:"key"+t},"and I'm just way too verbose")})),", close me with",Object(i.b)(c.b,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h2",{id:"position-absolute"},"position: absolute;"),Object(i.b)(s.c,{__position:3,__code:"<div style={{ position: 'relative', height: '400px' }}>\n  <YModal\n    style={{\n      position: 'absolute',\n      zIndex: 'unset',\n    }}\n  >\n    More like resolute!\n  </YModal>\n</div>",__scope:{props:n,DefaultLayout:l.a,Playground:s.c,YModal:r.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)("div",{style:{position:"relative",height:"400px"}},Object(i.b)(r.b,{style:{position:"absolute",zIndex:"unset"},mdxType:"YModal"},"More like resolute!"))),Object(i.b)("h2",{id:"position-absolute-with-height-overflow"},"position: absolute; with height overflow"),Object(i.b)(s.c,{__position:4,__code:"<div style={{ position: 'relative', height: '400px' }}>\n  <YModal\n    style={{\n      position: 'absolute',\n      zIndex: 'unset',\n    }}\n  >\n    <div>\n      {Array(100)\n        .fill()\n        .map((_, i) => (\n          <span key={'key' + i}>Wow there's just so many words!</span>\n        ))}\n    </div>\n    {Array(100)\n      .fill()\n      .map((_, i) => (\n        <div key={'key' + i}>And just even more!</div>\n      ))}\n  </YModal>\n</div>",__scope:{props:n,DefaultLayout:l.a,Playground:s.c,YModal:r.b,YButtonPrimary:c.b,State:u.b,Observe:u.a,SourceDisplay:d.a,source:b},mdxType:"Playground"},Object(i.b)("div",{style:{position:"relative",height:"400px"}},Object(i.b)(r.b,{style:{position:"absolute",zIndex:"unset"},mdxType:"YModal"},Object(i.b)("div",null,Array(100).fill().map((function(e,t){return Object(i.b)("span",{key:"key"+t},"Wow there's just so many words!")}))),Array(100).fill().map((function(e,t){return Object(i.b)("div",{key:"key"+t},"And just even more!")}))))),Object(i.b)("h1",{id:"source"},"Source"),Object(i.b)("p",null,"./src/YBasic/YModal/YModal.js"),Object(i.b)(d.a,{source:b,mdxType:"SourceDisplay"}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"YModal.mdx"}}),O.isMDXComponent=!0},990:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(5),n(6),n(7),n(4),n(8),n(12);var a=n(9),o=(n(1),n(128));n(976);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){void 0===e&&(e={});var t=(e.YBasic||{}).YTable||{},n=t.defaultStyle,l=void 0===n?{}:n,s=t.defaultChildStyle,r=void 0===s?{}:s,c=t.defaultClassName,u=void 0===c?"":c,d=t.defaultChildClassName,b=void 0===d?"":d,m=t.excludeComponentDefaultClassName,y=void 0!==m&&m,f=t.excludeComponentDefaultChildClassName,p=void 0!==f&&f;return function(e){var t=e.style,n=void 0===t?{}:t,s=e.childStyle,c=void 0===s?{}:s,d=e.className,m=e.childClassName,f=e.children,O=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["style","childStyle","className","childClassName","children"]);return Object(a.c)("div",i({className:Object(o.b)(y?"":"y y-modal",u,d),style:Object.assign({},l,n)},O),Object(a.c)("div",{className:Object(o.b)(p?"":"y y-modal-content",b,m),style:Object.assign({},r,c)},f))}};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}});var s=l();t.b=s,void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}})}}]);
//# sourceMappingURL=component---y-modal-mdx-b1406d630b2a69aeb72d.js.map