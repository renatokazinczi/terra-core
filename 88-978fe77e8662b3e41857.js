(window.webpackJsonp=window.webpackJsonp||[]).push([[88,4,11,15,16,17,84,85,86,87,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159],{832:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(0)),i=m(a(1)),l=m(a(4)),r=a(97),s=m(a(836)),u=m(a(159)),c=a(10),d=m(a(837));function m(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,i=void 0;try{for(var l,r=e[Symbol.iterator]();!(n=(l=r.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==r.return||r.return()}finally{if(o)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var h=l.default.bind(d.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,i=e.title,l=e.description,d=e.isExpanded,m=_((0,o.useState)(d),2),f=m[0],p=m[1],g=_((0,o.useState)(!1),2),v=g[0],T=g[1],E=o.default.useContext(r.ThemeContext),S=void 0!==n,w=function(){T(!v),f&&p(!f)},C=function(){p(!f),v&&T(!v)},P=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",E.className)},o.default.createElement("div",{className:h("header")},i&&o.default.createElement("h2",{className:h("title")},i)),o.default.createElement("div",{className:h("content")},l&&o.default.createElement("div",{className:h("description")},l),t),o.default.createElement("div",{className:h("footer")},a?o.default.createElement("div",{className:h("button-container")},S&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":v}),onClick:w,onKeyDown:function(e){return P(e,w)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":f}),onClick:C,onKeyDown:function(e){return P(e,C)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:h("chevron")}))):null,o.default.createElement("div",null,v&&o.default.createElement("div",{className:h("css")},n),f&&o.default.createElement("div",{className:h("code")},a))))};v.propTypes=g,v.defaultProps={isExpanded:!1};var T=v;t.default=T},833:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=r(a(1)),i=r(a(4)),l=r(a(834));function r(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(l.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,a=e.name,o=e.url,i=e.version,l=n.default.createElement("a",{className:s("badge"),href:o||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},n.default.createElement("span",{className:s("badge-name")},o?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(i))),r=t?n.default.createElement("a",{className:s("badge"),href:t},n.default.createElement("span",{className:s("badge-name")},"github"),n.default.createElement("span",{className:s("badge-version")},"source")):void 0;return n.default.createElement("div",{className:s("badge-container")},l,r)};c.propTypes=u;var d=c;t.default=d},834:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},835:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(0)),i=u(a(1)),l=u(a(4)),r=a(97),s=u(a(838));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var d=l.default.bind(s.default),m={rows:i.default.arrayOf(i.default.shape({name:i.default.string,type:i.default.func,required:i.default.bool,defaultValue:i.default.string,description:i.default.func}))},f=function(e){var t=e.rows,a=(0,o.useContext)(r.ThemeContext);return o.default.createElement("table",{className:d("table",a.className)},o.default.createElement("thead",null,o.default.createElement("tr",{className:d("tr")},o.default.createElement("th",{className:d("th")},"Prop Name"),o.default.createElement("th",{className:d("th")},"Type"),o.default.createElement("th",{className:d("th")},"Is Required"),o.default.createElement("th",{className:d("th")},"Default Value"),o.default.createElement("th",{className:d("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:d("tr","props-tr"),key:e.name},o.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:d(["td","props-td"])},e.type()),o.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};f.propTypes=m;var _=f;t.default=_},837:function(e,t,a){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},838:function(e,t,a){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3s97-","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},843:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=u(a(0)),r=u(a(1)),s=u(a(11));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},m=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function f(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];if(!a.length)return e;for(var o={},i=Object.keys(e),l=0;l<i.length;l++){var r=i[l];-1===a.indexOf(r)&&(o[r]=e[r])}return o}function _(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)}function h(e){return"string"==typeof e&&e.search("%")===e.length-1&&p(e.substr(0,e.length-1))}function g(e,t){e&&"function"==typeof e&&e(t)}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.animationFrameIDs=[];var n="auto",i="visible";p(e.height)?(n=e.height<0||"0"===e.height?0:e.height,i="hidden"):h(e.height)&&(n="0%"===e.height?0:e.height,i="hidden"),a.animationStateClasses=o({},d,e.animationStateClasses);var l=a.getStaticStateClasses(n);return a.state={animationStateClasses:l,height:n,overflow:i,shouldUseTransitions:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var a,n,o=this,i=this.props,l=i.delay,r=i.duration,u=i.height,d=i.onAnimationEnd,m=i.onAnimationStart;if(this.contentElement&&u!==e.height){var f;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var y=r+l,v=null,T={height:null,overflow:"hidden"},E="auto"===t.height;p(u)?(v=u<0||"0"===u?0:u,T.height=v):h(u)?(v="0%"===u?0:u,T.height=v):(v=b,T.height="auto",T.overflow=null),E&&(T.height=v,v=b);var S=(0,s.default)((c(f={},this.animationStateClasses.animating,!0),c(f,this.animationStateClasses.animatingUp,"auto"===e.height||u<e.height),c(f,this.animationStateClasses.animatingDown,"auto"===u||u>e.height),c(f,this.animationStateClasses.animatingToHeightZero,0===T.height),c(f,this.animationStateClasses.animatingToHeightAuto,"auto"===T.height),c(f,this.animationStateClasses.animatingToHeightSpecific,T.height>0),f)),w=this.getStaticStateClasses(T.height);this.setState({animationStateClasses:S,height:v,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(T.shouldUseTransitions=!0,_(this.animationFrameIDs),this.animationFrameIDs=(a=function(){o.setState(T),g(m,{newHeight:T.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){a()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:w,shouldUseTransitions:!1}),o.hideContent(T.height),g(d,{newHeight:T.height})}),y)):(g(m,{newHeight:v}),this.timeoutID=setTimeout((function(){T.animationStateClasses=w,T.shouldUseTransitions=!1,o.setState(T),"auto"!==u&&o.hideContent(v),g(d,{newHeight:v})}),y))}}},{key:"componentWillUnmount",value:function(){_(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.animateOpacity,i=a.applyInlineTransitions,r=a.children,u=a.className,d=a.contentClassName,_=a.delay,p=a.duration,h=a.easing,g=a.id,b=a.style,y=this.state,v=y.height,T=y.overflow,E=y.animationStateClasses,S=y.shouldUseTransitions,w=o({},b,{height:v,overflow:T||b.overflow});S&&i&&(w.transition="height "+p+"ms "+h+" "+_+"ms",b.transition&&(w.transition=b.transition+", "+w.transition),w.WebkitTransition=w.transition);var C={};n&&(C.transition="opacity "+p+"ms "+h+" "+_+"ms",C.WebkitTransition=C.transition,0===v&&(C.opacity=0));var P=(0,s.default)((c(e={},E,!0),c(e,u,u),e)),N="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return l.default.createElement("div",o({},f.apply(void 0,[this.props].concat(m)),{"aria-hidden":N,className:P,id:g,style:w}),l.default.createElement("div",{className:d,style:C,ref:function(e){return t.contentElement=e}},r))}}]),t}(l.default.Component);b.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(e,t,a){var o=e[t];return"number"==typeof o&&o>=0||h(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":n(o))+'" is invalid type for '+t+" in "+a+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=b}}]);