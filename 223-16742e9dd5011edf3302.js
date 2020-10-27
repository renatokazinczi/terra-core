(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{2035:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var r=n(0),o=n.n(r),a=n(343),c=n(863),l=n(98),s=n(850),i=n(4),p=n.n(i),m=n(879),u=n.n(m),d=p.a.bind(u.a),b=function(){return o.a.createElement(l.default,null,o.a.createElement(l.Subsection,{key:"static-subsection",title:"Static Subsection"},o.a.createElement(l.Item,{key:"123"},o.a.createElement(s.c,{title:"Item 0-0",className:d("placeholder")})),o.a.createElement(l.Item,{key:"124"},o.a.createElement(s.c,{title:"Item 0-1",className:d("placeholder")})),o.a.createElement(l.Item,{key:"125"},o.a.createElement(s.c,{title:"Item 0-2",className:d("placeholder")}))),o.a.createElement(l.Subsection,{key:"collapsible-subsection",isCollapsible:!0,title:"Collapsible Subsection"},o.a.createElement(l.Item,{key:"223"},o.a.createElement(s.c,{title:"Item 1-0",className:d("placeholder")})),o.a.createElement(l.Item,{key:"224"},o.a.createElement(s.c,{title:"Item 1-1",className:d("placeholder")})),o.a.createElement(l.Item,{key:"225"},o.a.createElement(s.c,{title:"Item 1-2",className:d("placeholder")}))),o.a.createElement(l.Subsection,{key:"collapsible-subsection",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Subsection"},o.a.createElement(l.Item,{key:"323"},o.a.createElement(s.c,{title:"Item 2-0",className:d("placeholder")})),o.a.createElement(l.Item,{key:"324"},o.a.createElement(s.c,{title:"Item 2-1",className:d("placeholder")})),o.a.createElement(l.Item,{key:"325"},o.a.createElement(s.c,{title:"Item 2-2",className:d("placeholder")}))))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var x={};function O(e){var t=e.components,n=y(e,["components"]);return Object(a.mdx)("wrapper",f({},x,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",f({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item, Subsection } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSubsectionExample = () => (\n  <List>\n    <Subsection\n      key="static-subsection"\n      title="Static Subsection"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsible\n      title="Collapsible Subsection"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Subsection"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n  </List>\n);\n\nexport default ListSubsectionExample;\n\n')))}O.isMDXComponent=!0;var h=n(832),j=n.n(h),v=n(880),I=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(j.a,{title:t||"List Subsection",description:n,example:o.a.createElement(b,null),exampleCssSrc:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(O,null),isExpanded:r})},w=n(835),g=n.n(w);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=function(){return Object(a.mdx)(g.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The children list items passed to the component."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsed",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the subsection is collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsible",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the subsection can be collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"level",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",D({parentName:"pre"},{className:"language-json"}),'[\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"2",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Optionally sets the heading level. One of ",Object(a.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"6"),"."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback passthrough for the ref of the section li."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Title text to be placed within the subsection header."))}return t.isMDXComponent=!0,t({})}}]})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={};function X(e){var t=e.components,n=S(e,["components"]);return Object(a.mdx)("wrapper",M({},k,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"list-subsection"},"List Subsection"),Object(a.mdx)("p",null,"The list subsection component creates a subsection header and layouts it out with the passed child list items. The subsection provides the ability to display and collapse a subsection within a logical group. The list subsection will render as a flat list."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import List, { Item, Subsection } from 'terra-list/lib/List';\\\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(I,{mdxType:"ListSubsectionExample"}),Object(a.mdx)("h2",{id:"list-subsection-props"},"List Subsection Props"),Object(a.mdx)(E,{mdxType:"ListSubsectionPropsTable"}))}X.isMDXComponent=!0},836:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=c({},e);return o.a.createElement(a.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},863:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(833),c=n.n(a),l=function(e){var t=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.39.0",url:t})}},879:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___2b6OD"}},880:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var r=n(343);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={};function l(e){var t=e.components,n=a(e,["components"]);return Object(r.mdx)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}l.isMDXComponent=!0}}]);