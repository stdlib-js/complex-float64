// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(r,s){if(!(this instanceof n))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!e(r))throw new TypeError(i("invalid argument. Real component must be a number. Value: `%s`.",r));if(!e(s))throw new TypeError(i("invalid argument. Imaginary component must be a number. Value: `%s`.",s));return t(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),t(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:s}),this}r(n,"BYTES_PER_ELEMENT",8),r(n.prototype,"BYTES_PER_ELEMENT",8),r(n.prototype,"byteLength",16),r(n.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),r(n.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));export{n as default};
//# sourceMappingURL=index.mjs.map
