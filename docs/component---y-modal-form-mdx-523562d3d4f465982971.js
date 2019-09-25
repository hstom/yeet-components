(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{985:function(e,t,n){"use strict";n.r(t);n(12),n(6),n(7),n(4),n(8),n(5),n(9);var o=n(1),a=n.n(o),r=n(82),l=n(973),c=n(33),i=n(975),m=n(972),s=n(997),d=n(974),u="import React from 'react';\nimport {ThemableYModal} from '../../YBasic/YModal/YModal.js';\nimport {ThemableYButton} from '../../YBasic/YButton/YButton.js';\nimport {catClassName} from '../../util.js';\nimport './YModalForm.css';\n\nexport const ThemableYModalForm = (globalTheme = {}) => {\n    const componentTheme = ((globalTheme.YFancy ||{}).YModalForm) || {}; \n\n    const {\n        overrideHeaderComponent: themeHeaderComponent,\n        overrideFooterComponent: themeFooterComponent\n    } = componentTheme;\n\n    const YModal = ThemableYModal(globalTheme);\n    const { YButtonPrimary, YButtonSecondary} = ThemableYButton(globalTheme);\n\n    const DefaultHeader = ({title}) => \n        <div\n            className='y y-modal-form y-modal-form-region y-modal-form-header'\n        >\n            {title}\n        </div>;\n\n    const DefaultFooter = ({submitAction, cancelAction}) =>\n        <div\n            className='y y-modal-form y-modal-form-region y-modal-form-footer'\n        >\n            <YButtonSecondary onClick={cancelAction}>Cancel</YButtonSecondary>\n            <YButtonPrimary onClick={submitAction}>Submit</YButtonPrimary>\n        </div>;\n\n    return ({\n        style = {},\n        childStyle = {},\n        \n        className,\n        childClassName,\n        wrapperClassName,\n\n        overrideHeaderComponent,\n        overrideFooterComponent,\n        \n        title,\n        children,\n        submitAction,\n        cancelAction,\n        \n        ...props\n    }) => {\n\n        const HeaderComponent = overrideHeaderComponent || themeHeaderComponent || DefaultHeader;\n        const FooterComponent = overrideFooterComponent || themeFooterComponent || DefaultFooter;\n\n        return (\n            <YModal\n                className={catClassName('y y-modal-form y-modal-form', className)}\n                childClassName={catClassName('y y-modal-form y-modal-form-wrapper', wrapperClassName)}\n                {...props}\n            >\n                <HeaderComponent title={title} />\n                <div className={catClassName('y y-modal-form y-modal-form-region', childClassName)}>\n                    {children}\n                </div>\n                <FooterComponent submitAction={submitAction} cancelAction={cancelAction} />\n            </YModal>\n        );\n    }\n    \n}\n\nexport default ThemableYModalForm();";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return v}));var f={};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"YModalForm.mdx"}});var y={_frontmatter:f},p=l.a;function v(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(p,b({},y,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"ymodalform"},"YModalForm"),Object(r.b)("hr",null),Object(r.b)(c.c,{__position:0,__code:'<State initialState={{ count: false }}>\n  <Observe>\n    {({ count, setState }) => (\n      <>\n        <YButtonPrimary onClick={() => setState(s => ({ count: true }))}>\n          Click me\n        </YButtonPrimary>\n        {count && (\n          <YModalForm\n            title="Modal Title"\n            submitAction={() => setState(s => ({ count: false }))}\n            cancelAction={() => setState(s => ({ count: false }))}\n          >\n            Hello, I am a basic modal, close me with the standard button!\n          </YModalForm>\n        )}\n      </>\n    )}\n  </Observe>\n</State>',__scope:{props:n,DefaultLayout:l.a,Playground:c.c,Props:c.d,State:i.b,Observe:i.a,YButtonPrimary:m.b,YModalForm:s.b,SourceDisplay:d.a,source:u},mdxType:"Playground"},Object(r.b)(i.b,{initialState:{count:!1},mdxType:"State"},Object(r.b)(i.a,{mdxType:"Observe"},(function(e){var t=e.count,n=e.setState;return Object(r.b)(a.a.Fragment,null,Object(r.b)(m.b,{onClick:function(){return n((function(e){return{count:!0}}))},mdxType:"YButtonPrimary"},"Click me"),t&&Object(r.b)(s.b,{title:"Modal Title",submitAction:function(){return n((function(e){return{count:!1}}))},cancelAction:function(){return n((function(e){return{count:!1}}))},mdxType:"YModalForm"},"Hello, I am a basic modal, close me with the standard button!"))})))),Object(r.b)("h1",{id:"source"},"Source"),Object(r.b)(d.a,{source:u,mdxType:"SourceDisplay"}))}v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"YModalForm.mdx"}}),v.isMDXComponent=!0},990:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(5),n(6),n(7),n(4),n(8),n(12);var o=n(9),a=(n(1),n(128));n(976);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=function(e){void 0===e&&(e={});var t=(e.YBasic||{}).YTable||{},n=t.defaultStyle,l=void 0===n?{}:n,c=t.defaultChildStyle,i=void 0===c?{}:c,m=t.defaultClassName,s=void 0===m?"":m,d=t.defaultChildClassName,u=void 0===d?"":d,b=t.excludeComponentDefaultClassName,f=void 0!==b&&b,y=t.excludeComponentDefaultChildClassName,p=void 0!==y&&y;return function(e){var t=e.style,n=void 0===t?{}:t,c=e.childStyle,m=void 0===c?{}:c,d=e.className,b=e.childClassName,y=e.children,v=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["style","childStyle","className","childClassName","children"]);return Object(o.c)("div",r({className:Object(a.b)(f?"":"y y-modal",s,d),style:Object.assign({},l,n)},v),Object(o.c)("div",{className:Object(a.b)(p?"":"y y-modal-content",u,b),style:Object.assign({},i,m)},y))}};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"ThemableYModal",filename:"src/YBasic/YModal/YModal.js"}});var c=l();t.b=c,void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}})},997:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(5),n(6),n(7),n(4),n(8),n(12);var o=n(9),a=(n(1),n(990)),r=n(972),l=n(128);n(977);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i=function(e){void 0===e&&(e={});var t=(e.YFancy||{}).YModalForm||{},n=t.overrideHeaderComponent,i=t.overrideFooterComponent,m=Object(a.a)(e),s=Object(r.a)(e),d=s.YButtonPrimary,u=s.YButtonSecondary,b=function(e){var t=e.title;return Object(o.c)("div",{className:"y y-modal-form y-modal-form-region y-modal-form-header"},t)},f=function(e){var t=e.submitAction,n=e.cancelAction;return Object(o.c)("div",{className:"y y-modal-form y-modal-form-region y-modal-form-footer"},Object(o.c)(u,{onClick:n},"Cancel"),Object(o.c)(d,{onClick:t},"Submit"))};return function(e){e.style,e.childStyle;var t=e.className,a=e.childClassName,r=e.wrapperClassName,s=e.overrideHeaderComponent,d=e.overrideFooterComponent,u=e.title,y=e.children,p=e.submitAction,v=e.cancelAction,O=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["style","childStyle","className","childClassName","wrapperClassName","overrideHeaderComponent","overrideFooterComponent","title","children","submitAction","cancelAction"]),j=s||n||b,Y=d||i||f;return Object(o.c)(m,c({className:Object(l.b)("y y-modal-form y-modal-form",t),childClassName:Object(l.b)("y y-modal-form y-modal-form-wrapper",r)},O),Object(o.c)(j,{title:u}),Object(o.c)("div",{className:Object(l.b)("y y-modal-form y-modal-form-region",a)},y),Object(o.c)(Y,{submitAction:p,cancelAction:v}))}};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"ThemableYModalForm",filename:"src/YFancy/YModalForm/YModalForm.js"}}),void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"ThemableYModalForm",filename:"src/YFancy/YModalForm/YModalForm.js"}}),t.b=i()}}]);
//# sourceMappingURL=component---y-modal-form-mdx-523562d3d4f465982971.js.map