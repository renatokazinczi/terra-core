(window.webpackJsonp=window.webpackJsonp||[]).push([[777],{1830:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(206);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,r,a=l(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=a.call(this)).state={breakpoint:void 0},e.handleOnChange=e.handleOnChange.bind(s(e)),e}return t=f,(n=[{key:"handleOnChange",value:function(e){this.setState({breakpoint:e})}},{key:"render",value:function(){var e=this.state.breakpoint,t=null;return"tiny"===e?t=o.a.createElement("div",null,"Tiny"):"small"===e?t=o.a.createElement("div",null,"Small"):"medium"===e?t=o.a.createElement("div",null,"Medium"):"large"===e?t=o.a.createElement("div",null,"Large"):"huge"===e?t=o.a.createElement("div",null,"Huge"):"enormous"===e&&(t=o.a.createElement("div",null,"Enormous")),o.a.createElement(u.a,{onChange:this.handleOnChange},t)}}])&&i(t.prototype,n),r&&i(t,r),f}(o.a.Component);t.default=y}}]);