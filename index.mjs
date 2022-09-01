// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(r,o){if(!(this instanceof s))throw new TypeError(i("08P0G"));if(!e(r))throw new TypeError(i("08P3r",r));if(!e(o))throw new TypeError(i("08P3s",o));return t(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),t(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:o}),this}r(s,"BYTES_PER_ELEMENT",8),r(s.prototype,"BYTES_PER_ELEMENT",8),r(s.prototype,"byteLength",16),r(s.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),r(s.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));export{s as default};
//# sourceMappingURL=index.mjs.map
