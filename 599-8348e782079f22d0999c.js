(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1713:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),u=n.n(a),c=n(126),i=n(839),l=n.n(i);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=u.a.bind(l.a),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,a=y(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={value:[]},e.handleChange=e.handleChange.bind(d(e)),e}return t=u,(n=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:v("content-wrapper")},o.a.createElement(c.a,{onChange:this.handleChange,placeholder:"Select a color",required:!0,variant:"tag",id:"tag",value:this.state.value},o.a.createElement(c.a.Option,{value:"blue",display:"Blue"}),o.a.createElement(c.a.Option,{value:"green",display:"Green"}),o.a.createElement(c.a.Option,{value:"purple",display:"Purple"}),o.a.createElement(c.a.Option,{value:"red",display:"Red"}),o.a.createElement(c.a.Option,{value:"violet",display:"Violet"})))}}])&&p(t.prototype,n),r&&p(t,r),u}(o.a.Component);t.default=m},839:function(e,t,n){e.exports={"content-wrapper":"Select-test-module__content-wrapper___2iw6l","bottom-left":"Select-test-module__bottom-left___bgyVg"}}}]);