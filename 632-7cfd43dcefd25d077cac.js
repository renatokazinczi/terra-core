(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1810:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),l=n.n(a),i=n(100),c=n(162),u=n(858),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=l.a.bind(s.a),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,n,r,a=v(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this)).state={show:!1,toggle:"true"},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(p(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(p(e)),e.handleRandomClick=e.handleRandomClick.bind(p(e)),e}return t=l,(n=[{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0,id:"terra-Overlay--container"})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"})}},{key:"handleRandomClick",value:function(){"false"===this.state.toggle?this.setState({toggle:"true"}):this.setState({toggle:"false"})}},{key:"addOverlay",value:function(){var e=this;return o.a.createElement(i.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,id:this.state.id},o.a.createElement("h3",null,"Overlay with custom content."),o.a.createElement("button",{type:"button",id:"close_overlay",onClick:function(){e.setState({show:!1})}},"Close Overlay"))}},{key:"render",value:function(){return o.a.createElement("div",{id:"custom-content-example"},o.a.createElement(c.default,{className:m("overlay-container2"),overlay:this.addOverlay()},o.a.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"),o.a.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay")),o.a.createElement("br",null),o.a.createElement("p",null," Outside of overlay container to prove functionality. Click the random button below after clicking the Trigger Container Overlay button to confirm an Overlay relative to container does not block outside interactions. "),o.a.createElement("button",{type:"button",id:"random_button",onClick:this.handleRandomClick},"A Random Button To Change Toggle State "),o.a.createElement("p",null,"Random Button toggle State is"," ",o.a.createElement("span",{id:"random_state"},this.state.toggle)))}}])&&y(t.prototype,n),r&&y(t,r),l}(o.a.Component);t.default=b},858:function(e,t,n){e.exports={"overlay-container1":"OverlayTestCommon-module__overlay-container1___3wz13","overlay-container2":"OverlayTestCommon-module__overlay-container2___y7PHS"}}}]);