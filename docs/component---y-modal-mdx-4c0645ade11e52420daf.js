(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{989:function(e,t,n){"use strict";n.r(t);n(12),n(6),n(7),n(4),n(8),n(5),n(172),n(9);var o=n(1),a=n.n(o),i=n(82),r=n(971),c=n(33),l=n(994),u=n(993),s=n(974),b=n(972),d="import React from 'react';\nimport { getGenericThemableSubcomponentBuilder } from '../../util.js';\nimport './YModal.css';\n\nconst genSubcomponent = getGenericThemableSubcomponentBuilder('y modal', globalTheme => ((globalTheme.YBasic || {}).YModal || {}));\n\nexport const ThemableYModal = globalTheme => {\n    const ThemedYModalWrapper = genSubcomponent()(globalTheme);\n    const ThemedYModalChild = genSubcomponent('child')(globalTheme);\n\n    return ({\n        style = {},\n        className = '',\n\n        child = {},\n        \n        children,\n        \n        ...props\n    }) => (\n    <ThemedYModalWrapper\n        style={style}\n        className={className}\n        {...props}\n    >\n        <ThemedYModalChild\n            {...child}\n        >\n            {children}\n        </ThemedYModalChild>\n    </ThemedYModalWrapper>\n    );\n}\n\nconst YModal = ThemableYModal();\nexport default YModal;";function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return j}));var f={};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"YModal.mdx"}});var y={_frontmatter:f},Y=r.a;function j(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(Y,m({},y,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Quality: Sophistication"),Object(i.b)("h1",{id:"ymodal"},"YModal"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"position-fixed"},"position: fixed;"),Object(i.b)("h3",{id:"position-fixed-default"},"position: fixed (default)"),Object(i.b)(c.c,{__position:0,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal>\n            Hello, I am a basic modal, close me with{' '}\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:r.a,Playground:c.c,YModal:l.b,YButtonPrimary:u.d,State:s.b,Observe:s.a,SourceDisplay:b.a,source:d},mdxType:"Playground"},Object(i.b)(s.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(s.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(a.a.Fragment,null,Object(i.b)(u.d,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(l.b,{mdxType:"YModal"},"Hello, I am a basic modal, close me with ",Object(i.b)(u.d,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h3",{id:"position-fixed-default-with-width-fit-content"},"position: fixed (default) with width: fit-content"),Object(i.b)(c.c,{__position:1,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal childStyle={{ width: 'fit-content' }}>\n            Hello, I am a basic modal, close me with{' '}\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:r.a,Playground:c.c,YModal:l.b,YButtonPrimary:u.d,State:s.b,Observe:s.a,SourceDisplay:b.a,source:d},mdxType:"Playground"},Object(i.b)(s.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(s.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(a.a.Fragment,null,Object(i.b)(u.d,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(l.b,{childStyle:{width:"fit-content"},mdxType:"YModal"},"Hello, I am a basic modal, close me with ",Object(i.b)(u.d,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h2",{id:"position-fixed-default-with-height-overflow"},"position: fixed (default) with height overflow"),Object(i.b)(c.c,{__position:2,__code:"<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModal>\n            Hello, I am a basic modal,\n            <div>\n              {Array(100)\n                .fill()\n                .map((_, i) => (\n                  <span key={'key' + i}>and I'm just way too verbose</span>\n                ))}\n            </div>\n            {Array(100)\n              .fill()\n              .map((_, i) => (\n                <div key={'key' + i}>and I'm just way too verbose</div>\n              ))}\n            , close me with\n            <YButtonPrimary onClick={() => setState(s => ({ count: false }))}>\n              this button\n            </YButtonPrimary>\n          </YModal>\n        )}\n      </>\n    )}\n  </Observe>\n</State>",__scope:{props:n,DefaultLayout:r.a,Playground:c.c,YModal:l.b,YButtonPrimary:u.d,State:s.b,Observe:s.a,SourceDisplay:b.a,source:d},mdxType:"Playground"},Object(i.b)(s.b,{initialState:{count:!1},mdxType:"State"},Object(i.b)(s.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(i.b)(a.a.Fragment,null,Object(i.b)(u.d,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(l.b,{mdxType:"YModal"},"Hello, I am a basic modal,",Object(i.b)("div",null,Array(100).fill().map((function(e,t){return Object(i.b)("span",{key:"key"+t},"and I'm just way too verbose")}))),Array(100).fill().map((function(e,t){return Object(i.b)("div",{key:"key"+t},"and I'm just way too verbose")})),", close me with",Object(i.b)(u.d,{onClick:function(){return n((function(e){return{count:!1}}))},mdxType:"YButtonPrimary"},"this button")))})))),Object(i.b)("h2",{id:"position-absolute"},"position: absolute;"),Object(i.b)(c.c,{__position:3,__code:"<div style={{ position: 'relative', height: '400px' }}>\n  <YModal\n    style={{\n      position: 'absolute',\n      zIndex: 'unset',\n    }}\n  >\n    More like resolute!\n  </YModal>\n</div>",__scope:{props:n,DefaultLayout:r.a,Playground:c.c,YModal:l.b,YButtonPrimary:u.d,State:s.b,Observe:s.a,SourceDisplay:b.a,source:d},mdxType:"Playground"},Object(i.b)("div",{style:{position:"relative",height:"400px"}},Object(i.b)(l.b,{style:{position:"absolute",zIndex:"unset"},mdxType:"YModal"},"More like resolute!"))),Object(i.b)("h2",{id:"position-absolute-with-height-overflow"},"position: absolute; with height overflow"),Object(i.b)(c.c,{__position:4,__code:"<div style={{ position: 'relative', height: '400px' }}>\n  <YModal\n    style={{\n      position: 'absolute',\n      zIndex: 'unset',\n    }}\n  >\n    <div>\n      {Array(100)\n        .fill()\n        .map((_, i) => (\n          <span key={'key' + i}>Wow there's just so many words!</span>\n        ))}\n    </div>\n    {Array(100)\n      .fill()\n      .map((_, i) => (\n        <div key={'key' + i}>And just even more!</div>\n      ))}\n  </YModal>\n</div>",__scope:{props:n,DefaultLayout:r.a,Playground:c.c,YModal:l.b,YButtonPrimary:u.d,State:s.b,Observe:s.a,SourceDisplay:b.a,source:d},mdxType:"Playground"},Object(i.b)("div",{style:{position:"relative",height:"400px"}},Object(i.b)(l.b,{style:{position:"absolute",zIndex:"unset"},mdxType:"YModal"},Object(i.b)("div",null,Array(100).fill().map((function(e,t){return Object(i.b)("span",{key:"key"+t},"Wow there's just so many words!")}))),Array(100).fill().map((function(e,t){return Object(i.b)("div",{key:"key"+t},"And just even more!")}))))),Object(i.b)("h1",{id:"source"},"Source"),Object(i.b)("p",null,"./src/YBasic/YModal/YModal.js"),Object(i.b)(b.a,{source:d,mdxType:"SourceDisplay"}))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"YModal.mdx"}}),j.isMDXComponent=!0},993:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u}));n(5);var o=n(969),a=(n(975),Object(o.a)({Tag:"button",componentClassName:"y-button",themeSelector:function(e){return(e.YBasic||{}).YButton||{}},displayName:"YButton"}));void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"ThemableYButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"ThemableYButton",filename:"src/YBasic/YButton/YButton.js"}});var i=Object(o.a)({Tag:"button",componentClassName:"y-button primary",themeSelector:function(e){return(e.YBasic||{}).YButton||{}},displayName:"YButtonPrimary"});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"ThemableYButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"ThemableYButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}});var r=Object(o.a)({Tag:"button",componentClassName:"y-button secondary",themeSelector:function(e){return(e.YBasic||{}).YButton||{}},displayName:"YButtonSecondary"});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"ThemableYButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"ThemableYButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}});var c=a();void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}});var l=i();void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}});var u=r();void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}});var s=function(e){return{YButton:a(e),YButtonPrimary:i(e),YButtonSecondary:r(e)}};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"ThemableYButtons",filename:"src/YBasic/YButton/YButton.js"}}),s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"ThemableYButtons",filename:"src/YBasic/YButton/YButton.js"}});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}})},994:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(5),n(6),n(7),n(4),n(8),n(12);var o=n(9),a=(n(1),n(969));n(976);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var r=Object(a.c)("y modal",(function(e){return(e.YBasic||{}).YModal||{}})),c=function(e){var t=r()(e),n=r("child")(e);return function(e){var a=e.style,r=void 0===a?{}:a,c=e.className,l=void 0===c?"":c,u=e.child,s=void 0===u?{}:u,b=e.children,d=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["style","className","child","children"]);return Object(o.c)(t,i({style:r,className:l},d),Object(o.c)(n,s,b))}};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}});var l=c();t.b=l,void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}})}}]);
//# sourceMappingURL=component---y-modal-mdx-4c0645ade11e52420daf.js.map