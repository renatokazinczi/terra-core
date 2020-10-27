(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1356:function(e,t,n){e.exports=n.p+"2d50003b6b587b1e3ce153b0e06feafa.png"},1357:function(e,t,n){e.exports={"image-container":"ImageFitTypes__image-container___1VxUC",image:"ImageFitTypes__image___3vTMB"}},1358:function(e,t,n){e.exports=n.p+"40415849cc161edd3bafb6a6a5c973b2.jpg"},2009:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return oe}));var r=n(0),a=n.n(r),o=n(343),c=n(998),l=n(163),i=n(928),p=n.n(i),m=n(1356),u=n.n(m),s=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Default"),a.a.createElement(l.default,{src:p.a,alt:"default image"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Circle"),a.a.createElement(l.default,{src:p.a,alt:"circle image",variant:"circle"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Rounded"),a.a.createElement(l.default,{src:p.a,alt:"rounded image",variant:"rounded"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Thumbnail"),a.a.createElement(l.default,{src:p.a,alt:"thumbnail image",variant:"thumbnail"}),a.a.createElement("br",null),a.a.createElement("h2",null,"Fluid"),a.a.createElement(l.default,{src:u.a,alt:"fluid image",isFluid:!0}),a.a.createElement("br",null),a.a.createElement("h2",null,"Placeholder"),a.a.createElement("h3",null,"Invalid src prop (placeholder will show)"),a.a.createElement(l.default,{src:"/mock/failure/route",alt:"invalid src attribute image",placeholder:a.a.createElement(l.default,{src:u.a,alt:"placeholder image"})}),a.a.createElement("h3",null,"Valid src prop (src will show)"),a.a.createElement(l.default,{src:p.a,alt:"src image",placeholder:a.a.createElement(l.default,{src:u.a,alt:"placeholder image"})}))};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function y(e){var t=e.components,n=f(e,["components"]);return Object(o.mdx)("wrapper",d({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Image from \'terra-image\';\nimport placeholderPic150x150 from \'../../assets/150x150.jpg\';\nimport placeholderPic1000x200 from \'../../assets/1000x200.png\';\n\nconst ImageDefault = () => (\n  <div>\n    <h2>Default</h2>\n    <Image src={placeholderPic150x150} alt="default image" />\n    <br />\n    <h2>Circle</h2>\n    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />\n    <br />\n    <h2>Rounded</h2>\n    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />\n    <br />\n    <h2>Thumbnail</h2>\n    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />\n    <br />\n    <h2>Fluid</h2>\n    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />\n    <br />\n    <h2>Placeholder</h2>\n    <h3>Invalid src prop (placeholder will show)</h3>\n    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}\n    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n    <h3>Valid src prop (src will show)</h3>\n    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n  </div>\n);\n\nexport default ImageDefault;\n\n')))}y.isMDXComponent=!0;var h=n(832),x=n.n(h),g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(x.a,{title:t||"Image Default",description:n,example:a.a.createElement(s,null),exampleSrc:a.a.createElement(y,null),isExpanded:r})},O=n(1),v=n.n(O),j=n(4),w=n.n(j);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var a=P(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return X(this,n)}}function X(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(l,t);var n,r,o,c=M(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).handleOnSelect=t.handleOnSelect.bind(C(t)),t.state={fitType:"fill",variantType:"default"},t}return n=l,(r=[{key:"handleOnSelect",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(e,E({fit:this.state.fitType,variant:this.state.variantType},this.props)),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"fitType"},"Select a Fit Type:")),a.a.createElement("select",{id:"fitType",name:"fitType",value:this.state.fitType,onChange:this.handleOnSelect},a.a.createElement("option",{value:"fill"},"fill"),a.a.createElement("option",{value:"cover"},"cover"),a.a.createElement("option",{value:"contain"},"contain"),a.a.createElement("option",{value:"scale-down"},"scale-down"),a.a.createElement("option",{value:"none"},"none")),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"variantType"},"Select a Variant Type:")),a.a.createElement("select",{id:"variantType",name:"variantType",value:this.state.variantType,onChange:this.handleOnSelect},a.a.createElement("option",{value:"default"},"default"),a.a.createElement("option",{value:"circle"},"circle"),a.a.createElement("option",{value:"rounded"},"rounded"),a.a.createElement("option",{value:"thumbnail"},"thumbnail")))}}])&&D(n.prototype,r),o&&D(n,o),l}(a.a.Component)},S=n(1357),L=n.n(S),F=n(1358),_=n.n(F);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k=w.a.bind(L.a),R={fit:v.a.string,variant:v.a.string},q=function(e){var t=V({},e);return a.a.createElement("div",{className:k("image-container")},a.a.createElement(l.default,{alt:"Toggle fit image",className:k("image"),src:_.a,fit:t.fit,variant:t.variant}))};q.propTypes=R;var B=I(q);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U={};function z(e){var t=e.components,n=J(e,["components"]);return Object(o.mdx)("wrapper",W({},U,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",W({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Image from 'terra-image';\nimport FitTypesWrapper from 'terra-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';\nimport styles from './ImageFitTypes.scss';\nimport exampleImage from '../../assets/170x251.jpg';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = { fit: PropTypes.string, variant: PropTypes.string };\n\nconst ImageFitTypes = ({\n  ...props\n}) => (\n  <div className={cx('image-container')}>\n    <Image alt=\"Toggle fit image\" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />\n  </div>\n);\n\nImageFitTypes.propTypes = propTypes;\nexport default FitTypesWrapper(ImageFitTypes);\n\n")))}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}z.isMDXComponent=!0;var H={};function K(e){var t=e.components,n=G(e,["components"]);return Object(o.mdx)("wrapper",A({},H,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",A({parentName:"pre"},{className:"language-scss"}),":local {\n  .image-container {\n    height: 150px;\n    width: 150px;\n  }\n  \n  .image {\n    height: 100%;\n    width: 100%;\n  }\n}\n\n")))}K.isMDXComponent=!0;var Q=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(x.a,{title:t||"Image Fit Types",description:n,example:a.a.createElement(B,null),exampleCssSrc:a.a.createElement(K,null),exampleSrc:a.a.createElement(z,null),isExpanded:r})},Y=n(835),Z=n.n(Y);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var te=function(){return Object(o.mdx)(Z.a,{rows:[{name:"src",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The source string for the image which will be loaded and displayed."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",$({parentName:"pre"},{className:"language-json"}),'[\n "default",\n "rounded",\n "circle",\n "thumbnail"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'default'",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"rounded"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"circle"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"thumbnail"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isFluid",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the fluid behavior of the image, which is ",Object(o.mdx)("inlineCode",{parentName:"p"},"nonfluid")," by default."))}return t.isMDXComponent=!0,t({})}},{name:"alt",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"' '",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The text content that specifies an alternative text for an image."))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A React element which will be displayed during loading and in case of src load failure."))}return t.isMDXComponent=!0,t({})}},{name:"height",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the height of the image."))}return t.isMDXComponent=!0,t({})}},{name:"width",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the width of the image."))}return t.isMDXComponent=!0,t({})}},{name:"onLoad",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load is successful."))}return t.isMDXComponent=!0,t({})}},{name:"onError",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load errors."))}return t.isMDXComponent=!0,t({})}},{name:"fit",type:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",$({parentName:"pre"},{className:"language-json"}),'[\n "cover",\n "scale-down",\n "fill",\n "contain",\n "none"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'fill'",description:function(){var e={};function t(t){var n=t.components,r=ee(t,["components"]);return Object(o.mdx)("wrapper",$({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the ",Object(o.mdx)("inlineCode",{parentName:"p"},"object-fit")," style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"cover"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"contain"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"fill"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"scale-down"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"none"),"."))}return t.isMDXComponent=!0,t({})}}]})};function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae={};function oe(e){var t=e.components,n=re(e,["components"]);return Object(o.mdx)("wrapper",ne({},ae,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-image"},"Terra Image"),Object(o.mdx)("p",null,"The terra-image component provides styling for visual imagery."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",ne({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-image"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",ne({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",ne({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",ne({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",ne({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",ne({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",ne({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",ne({parentName:"pre"},{className:"language-jsx"}),"import Image from 'terra-image';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ne({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ne({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ne({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(g,{mdxType:"ImageDefault"}),Object(o.mdx)(Q,{mdxType:"ImageFit"}),Object(o.mdx)("h2",{id:"image-props"},"Image Props"),Object(o.mdx)(te,{mdxType:"ImagePropsTable"}))}oe.isMDXComponent=!0},836:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=c({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},928:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"},998:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(833),c=n.n(o),l=function(e){var t=e.url;return a.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.31.0",url:t})}}}]);