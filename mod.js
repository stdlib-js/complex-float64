// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__;var u=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,u){var c,p,f,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((p="value"in u)&&(a.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=u.value,t.__proto__=c):t[e]=u.value),f="get"in u,y="set"in u,p&&(f||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(t,e,u.get),y&&i&&i.call(t,e,u.set),t};function c(t,e,r){u(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"number"==typeof t}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return f&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var e,r,o,n,i;if(null==t)return b.call(t);r=t[_],i=_,e=null!=(n=t)&&s.call(n,i);try{t[_]=void 0}catch(e){return b.call(t)}return o=b.call(t),e?t[_]=r:delete t[_],o}:function(t){return b.call(t)},v=Number,h=v.prototype.toString;var g=y();function d(t){return"object"==typeof t&&(t instanceof v||(g?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function w(t){return p(t)||d(t)}function E(){var t,e=arguments,r=e[0],o="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)o+="&arg[]="+encodeURIComponent(e[t]);return o}function S(t,e){if(!(this instanceof S))throw new TypeError(E("08P0G"));if(!p(t))throw new TypeError(E("08P3r",t));if(!p(e))throw new TypeError(E("08P3s",e));return u(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),u(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(w,"isPrimitive",p),c(w,"isObject",d),c(S,"BYTES_PER_ELEMENT",8),c(S.prototype,"BYTES_PER_ELEMENT",8),c(S.prototype,"byteLength",16),c(S.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(S.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));export{S as default};
//# sourceMappingURL=mod.js.map
