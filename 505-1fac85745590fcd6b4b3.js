(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{2038:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(0),o=n.n(r),a=n(343),c=n(951),u=n(850);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=i(Object(r.useState)(0),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{onClick:function(){n(t+1)}},"Text"),o.a.createElement("p",null,"Clicked ".concat(t," times")))};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function f(e){var t=e.components,n=m(e,["components"]);return Object(a.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport { Button } from '@cerner/terra-docs';\n\nexport default () => {\n  const [clickCount, setClickCount] = useState(0);\n  return (\n    <>\n      <Button onClick={() => { setClickCount(clickCount + 1); }}>\n        Text\n      </Button>\n\n      <p>\n        {`Clicked ${clickCount} times`}\n      </p>\n    </>\n  );\n};\n\n")))}f.isMDXComponent=!0;var b=n(832),O=n.n(b),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Button",description:n,example:o.a.createElement(p,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},x=n(835),j=n.n(x);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=function(){return Object(a.mdx)(j.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The button text."))}return t.isMDXComponent=!0,t({})}}]})};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S={};function E(e){var t=e.components,n=C(e,["components"]);return Object(a.mdx)("wrapper",w({},S,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-docs-button"},"terra-docs Button"),Object(a.mdx)("p",null,"A simple button for documentation examples and tests. This button should be used instead of the system button or the terra button when building documentation examples. It is themed, small and has minimal dependencies."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",w({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install @cerner/terra-docs"))))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),"import { Button } from '@cerner/terra-docs';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",w({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",w({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"example"},"Example"),Object(a.mdx)(y,{title:"Button Example",mdxType:"Button"}),Object(a.mdx)("h2",{id:"props"},"Props"),Object(a.mdx)(g,{mdxType:"PropsTable"}))}E.isMDXComponent=!0},836:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=c({},e);return o.a.createElement(a.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=u},951:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(833),c=n.n(a),u=function(e){var t=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-docs",name:"@cerner/terra-docs",version:"1.0.0",url:t})}}}]);