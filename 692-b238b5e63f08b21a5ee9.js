(window.webpackJsonp=window.webpackJsonp||[]).push([[692],{1494:function(t,n,r){"use strict";r.r(n);var e=r(0),o=r.n(e),i=r(22),a=r(345);function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],e=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(r.push(a.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}n.default=function(){var t=u(Object(e.useState)(0),2),n=t[0],r=t[1];return o.a.createElement(a.default,{id:"actionAlert",type:"warning",action:o.a.createElement(i.default,{text:"Action",id:"actionButtonClickCount",onClick:function(){r(n+1)}})},"This is a warning. It is configured with a custom Action button. Action button has been clicked ".concat(n," times."))}}}]);