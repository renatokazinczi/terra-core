(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1360:function(e,t,n){e.exports={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___1Irv4","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___3X6Ix","section-header":"SectionHeader-module__section-header___3E_uQ","is-interactable":"SectionHeader-module__is-interactable___1A_Ax","is-active":"SectionHeader-module__is-active___QSU7M","is-transparent":"SectionHeader-module__is-transparent___2bo9h",title:"SectionHeader-module__title____yeDI","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___1uTHq","accordion-icon":"SectionHeader-module__accordion-icon___15-Xs","is-open":"SectionHeader-module__is-open___3OOF_"}},901:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),c=n.n(i),a=n(11),l=n.n(a),s=n(4),u=n.n(s),p=n(6),f=n.n(p),y=n(10),_=n(207),b=n(1360),d=n.n(b);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=u.a.bind(d.a),D={title:c.a.string.isRequired,onClick:c.a.func,isOpen:c.a.bool,level:c.a.oneOf([1,2,3,4,5,6]),isTransparent:c.a.bool},C={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},H=function(e){return e.nativeEvent.keyCode===y.KEY_RETURN||e.nativeEvent.keyCode===y.KEY_SPACE},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,n,r,i=g(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(E(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(E(t)),t}return t=c,(n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){H(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){H(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.onClick,r=e.isOpen,i=e.isTransparent,c=e.level,a=w(e,["title","onClick","isOpen","isTransparent","level"]),s=this.context,u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a);n&&(u.tabIndex="0",u.onKeyDown=this.wrapOnKeyDown(u.onKeyDown),u.onKeyUp=this.wrapOnKeyUp(u.onKeyUp),u.role="button");var p=K(["accordion-icon",{"is-open":n&&r}]),f=o.a.createElement("div",{className:K("accordion-icon-wrapper")},o.a.createElement("span",{className:p})),y=l()(K("section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":i},s.className),a.className),b="h".concat(c);return o.a.createElement("div",v({},u,{onClick:n,className:y}),o.a.createElement(_.default,{fitStart:n&&f,fill:o.a.createElement(b,{className:K("title")},t)}))}}])&&S(t.prototype,n),r&&S(t,r),c}(o.a.Component);x.propTypes=D,x.defaultProps=C,x.contextType=f.a,t.a=x}}]);