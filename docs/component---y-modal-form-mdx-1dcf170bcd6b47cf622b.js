(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1001:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(5),n(6),n(7),n(4),n(8),n(12);var o=n(9),a=n(1),i=n(970);n(975),n(969);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=Object(i.d)("y modal",(function(e){return(e.YBasic||{}).YModal||{}})),l=c(),s=c("child",{forwardRef:!0}),u=function(e){var t=e.style,n=void 0===t?{}:t,c=e.className,u=void 0===c?"":c,d=e.yChild,m=void 0===d?{}:d,b=e.children,f=e.onOutsideClick,Y=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["style","className","yChild","children","onOutsideClick"]),y=Object(a.useRef)();return Object(i.e)(y,(function(e){return f&&f(e)})),Object(o.c)(l,r({style:n,className:u},Y),Object(o.c)(s,r({ref:y},m),b))};u.displayName="YModal";var d=u;void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),t.b=d,void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}}),void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"YModal",filename:"src/YBasic/YModal/YModal.js"}})},1004:function(e,t,n){"use strict";n(5),n(6),n(7),n(4),n(8),n(12);var o=n(9),a=(n(1),n(1001)),i=n(996),r=n(970);n(976),n(969);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=Object(r.d)("y modal form",(function(e){return(e.YBasic||{}).YModalForm||{}})),s={extraClassNames:["y-modal-form-region"]},u=l("header",s),d=l("body",s),m=l("footer",s),b=function(e){var t=e.style,n=void 0===t?{}:t,l=e.className,s=void 0===l?"":l,b=e.yChild,f=void 0===b?{}:b,Y=e.yHeader,y=void 0===Y?{}:Y,j=e.yBody,O=void 0===j?{}:j,p=e.yFooter,v=void 0===p?{}:p,B=e.ySubmit,M=void 0===B?{}:B,F=e.yCancel,g=void 0===F?{}:F,_=e.title,h=e.submitAction,C=e.cancelAction,P=e.children,x=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["style","className","yChild","yHeader","yBody","yFooter","ySubmit","yCancel","title","submitAction","cancelAction","children"]);return Object(o.c)(a.a,c({style:n,className:Object(r.c)("y-modal-form",s),child:f,onOutsideClick:C},x),Object(o.c)(u,y,_),Object(o.c)(d,O,P),Object(o.c)(m,v,Object(o.c)(i.b,c({},M,{onClick:C}),"Cancel"),Object(o.c)(i.a,c({},g,{onClick:h}),"Submit")))};b.displayName="YModalForm";var f=b;void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"YModalForm",filename:"src/YFancy/YModalForm/YModalForm.js"}}),void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"YModalForm",filename:"src/YFancy/YModalForm/YModalForm.js"}}),t.a=f,void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"YModalForm",filename:"src/YFancy/YModalForm/YModalForm.js"}}),void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"YModalForm",filename:"src/YFancy/YModalForm/YModalForm.js"}})},991:function(e,t,n){"use strict";n.r(t);n(12),n(6),n(7),n(4),n(8),n(5),n(9);var o=n(1),a=n.n(o),i=n(81),r=n(972),c=n(33),l=n(996),s=n(1004),u=n(997),d=n(973),m="import React from 'react';\nimport {YModal} from '../../YBasic/YModal/YModal.js';\nimport {YButtonPrimary, YButtonSecondary} from '../../YBasic/YButton/YButton';\nimport {catClassName, getGenericThemableSubcomponentBuilder} from '../../util.js';\nimport './YModalForm.css';\nimport '../../Y.css';\n\nconst getSubcomponent = getGenericThemableSubcomponentBuilder('y modal form', globalTheme => (globalTheme.YBasic || {}).YModalForm || {});\n\nconst regionClassNames = {extraClassNames: ['y-modal-form-region']};\n\nconst YModalFormHeader = getSubcomponent('header', regionClassNames);\nconst YModalFormBody = getSubcomponent('body', regionClassNames);\nconst YModalFormFooter = getSubcomponent('footer', regionClassNames);\n\nconst YModalFormComponent = ({\n    style = {},\n    className = '',\n    \n    yChild = {},\n    yHeader = {},\n    yBody = {},\n    yFooter = {},\n    ySubmit = {},\n    yCancel = {},\n\n    title,\n    submitAction,\n    cancelAction,\n    \n    children,\n\n    ...rest\n}) => (\n    <YModal\n        style={style}\n        className={catClassName('y-modal-form', className)}\n        child={yChild}\n        onOutsideClick={cancelAction}\n        {...rest}\n    >\n        <YModalFormHeader {...yHeader}>\n            {title}\n        </YModalFormHeader>\n        <YModalFormBody {...yBody}>\n                {children}\n        </YModalFormBody>\n        <YModalFormFooter {...yFooter}>\n            {/*These are floated backwards */}\n            <YButtonSecondary {...ySubmit} onClick={cancelAction}>\n                Cancel    \n            </YButtonSecondary>\n            <YButtonPrimary {...yCancel} onClick={submitAction}>\n                Submit\n            </YButtonPrimary>\n        </YModalFormFooter>\n\n    </YModal>\n)\n\nYModalFormComponent.displayName = 'YModalForm';\nexport const YModalForm = YModalFormComponent;\n\nexport default YModalForm;";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return j}));var f={};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"YModalForm.mdx"}});var Y={_frontmatter:f},y=r.a;function j(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(y,b({},Y,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Quality: Inquiry"),Object(i.b)("h1",{id:"ymodalform"},"YModalForm"),Object(i.b)("hr",null),Object(i.b)(c.c,{__position:0,__code:"<FunctionChild>\n  {() => {\n    const [open, setOpen] = useState(false)\n    return (\n      <>\n        <pre style={{ margin: 0 }}>\n          {'form with default submit, cancel, and outside click'}\n        </pre>\n        <YButtonPrimary onClick={() => setOpen(!open)}>\n          Click me\n        </YButtonPrimary>\n        {open && (\n          <YModalForm\n            title=\"Modal Title\"\n            submitAction={() => setOpen(false)}\n            cancelAction={() => setOpen(false)}\n          >\n            Hello, I am a basic modal, close me with the standard button!\n          </YModalForm>\n        )}\n      </>\n    )\n  }}\n</FunctionChild>",__scope:{props:n,DefaultLayout:r.a,useState:o.useState,Playground:c.c,Props:c.d,YButtonPrimary:l.a,YModalForm:s.a,FunctionChild:u.a,SourceDisplay:d.a,source:m},mdxType:"Playground"},Object(i.b)(u.a,{mdxType:"FunctionChild"},(function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(i.b)(a.a.Fragment,null,Object(i.b)("pre",{style:{margin:0}},"form with default submit, cancel, and outside click"),Object(i.b)(l.a,{onClick:function(){return n(!t)},mdxType:"YButtonPrimary"},"Click me"),t&&Object(i.b)(s.a,{title:"Modal Title",submitAction:function(){return n(!1)},cancelAction:function(){return n(!1)},mdxType:"YModalForm"},"Hello, I am a basic modal, close me with the standard button!"))}))),Object(i.b)("h1",{id:"source"},"Source"),Object(i.b)(d.a,{source:m,mdxType:"SourceDisplay"}))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"YModalForm.mdx"}}),j.isMDXComponent=!0},996:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));n(5);var o=n(970),a=(n(974),n(969),Object(o.d)("y button",(function(e){return(e.YBasic||{}).YButton||{}}))),i=a(void 0,{Tag:"button",dismplayName:"YButton"});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}});var r=a(void 0,{Tag:"button",extraClassNames:["primary"],displayName:"YButtonPrimary"});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}});var c=a(void 0,{Tag:"button",extraClassNames:["secondary"],displayName:"YButtonPrimary"});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"YButton",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"YButtonSecondary",filename:"src/YBasic/YButton/YButton.js"}}),void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"YButtonPrimary",filename:"src/YBasic/YButton/YButton.js"}})},997:function(e,t,n){"use strict";var o=n(9),a=n(1),i=n.n(a);t.a=function(e){var t=e.children;return Object(o.c)(i.a.Fragment,null,t())}}}]);
//# sourceMappingURL=component---y-modal-form-mdx-1dcf170bcd6b47cf622b.js.map