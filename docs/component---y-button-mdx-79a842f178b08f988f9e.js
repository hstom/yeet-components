(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{984:function(t,n,e){"use strict";e.r(n);e(12),e(6),e(7),e(4),e(8),e(5),e(9),e(1);var o=e(82),a=e(973),r=e(33),u=e(972),c=e(974),l="import { buildGenericThemableComponent } from '../../util.js';\nimport './YButton.css';\n\nconst _ThemableYButton = buildGenericThemableComponent({\n    Tag: 'button',\n    componentClassName: 'y-button',\n    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {})\n});\n\nconst _ThemableYButtonPrimary = buildGenericThemableComponent({\n    Tag: 'button',\n    componentClassName: 'y-button primary',\n    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {})\n});\n\nconst _ThemableYButtonSecondary = buildGenericThemableComponent({\n    Tag: 'button',\n    componentClassName: 'y-button secondary',\n    themeSelector: (globalTheme) => (((globalTheme.YBasic || {}).YButton) || {})\n});\n\nexport const YButton = _ThemableYButton();\nexport const YButtonPrimary = _ThemableYButtonPrimary()\nexport const YButtonSecondary = _ThemableYButtonSecondary();\n\nexport const ThemableYButton = globalTheme => ({\n\tYButton: _ThemableYButton(globalTheme),\n\tYButtonPrimary: _ThemableYButtonPrimary(globalTheme),\n\tYButtonSecondary: _ThemableYButtonSecondary(globalTheme)\n});\n\nexport default {\n\tYButtonPrimary,\n\tYButtonSecondary,\n\tYButton\n};\n";function m(){return(m=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}e.d(n,"_frontmatter",(function(){return b})),e.d(n,"default",(function(){return s}));var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"YButton.mdx"}});var i={_frontmatter:b},y=a.a;function s(t){var n=t.components,e=function(t,n){if(null==t)return{};var e,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["components"]);return Object(o.b)(y,m({},i,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ybutton"},"YButton"),Object(o.b)(r.c,{__position:0,__code:"<YButtonPrimary>I am a button, I have no onClick</YButtonPrimary>",__scope:{props:e,DefaultLayout:a.a,Playground:r.c,YButtonPrimary:u.b,YButtonSecondary:u.c,SourceDisplay:c.a,source:l},mdxType:"Playground"},Object(o.b)(u.b,{mdxType:"YButtonPrimary"},"I am a button, I have no onClick")),Object(o.b)(r.c,{__position:1,__code:"<YButtonPrimary onClick={() => alert('Ouch!')}>I do!</YButtonPrimary>",__scope:{props:e,DefaultLayout:a.a,Playground:r.c,YButtonPrimary:u.b,YButtonSecondary:u.c,SourceDisplay:c.a,source:l},mdxType:"Playground"},Object(o.b)(u.b,{onClick:function(){return alert("Ouch!")},mdxType:"YButtonPrimary"},"I do!")),Object(o.b)(r.c,{__position:2,__code:"<YButtonSecondary onClick={() => alert('Ouch!')}>\n  I'm also a secondary button!\n</YButtonSecondary>",__scope:{props:e,DefaultLayout:a.a,Playground:r.c,YButtonPrimary:u.b,YButtonSecondary:u.c,SourceDisplay:c.a,source:l},mdxType:"Playground"},Object(o.b)(u.c,{onClick:function(){return alert("Ouch!")},mdxType:"YButtonSecondary"},"I'm also a secondary button!")),Object(o.b)("h1",{id:"source"},"Source"),Object(o.b)(c.a,{source:l,mdxType:"SourceDisplay"}))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"YButton.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---y-button-mdx-79a842f178b08f988f9e.js.map