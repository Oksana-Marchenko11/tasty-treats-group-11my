function t(t,r,n,i){Object.defineProperty(t,r,{get:n,set:i,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequire78be;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var r=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,r.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,r){i[t]=r},r.parcelRequire78be=o),o.register("fmRoT",function(r,n){t(r.exports,"default",()=>o("7we3r").default);var i=o("7we3r");// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:a,AxiosError:s,CanceledError:u,isCancel:f,CancelToken:l,VERSION:c,all:d,Cancel:h,isAxiosError:p,spread:g,toFormData:y,AxiosHeaders:m,HttpStatusCode:b,formToJSON:w,mergeConfig:E}=i.default}),o.register("7we3r",function(r,n){t(r.exports,"default",()=>A);var i=o("gKvUL"),a=o("jJbMR"),s=o("ewFRw"),u=o("lk5EI"),f=o("blSvA"),l=o("8cmY2"),c=o("dIGMp"),d=o("lAKPy"),h=o("7L4QX"),p=o("35BUy"),g=o("jOwpo"),y=o("6HVMZ"),m=o("JEeti"),b=o("dxy9O"),w=o("bxxyx"),E=o("lnWCo");// Create the default instance to be exported
let v=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(r){let n=new s.default(r),o=(0,a.default)(s.default.prototype.request,n);return(// Copy axios.prototype to instance
(0,i.default).extend(o,s.default.prototype,n,{allOwnKeys:!0}),// Copy context to instance
(0,i.default).extend(o,n,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(n){return t((0,u.default)(r,n))},o)}(f.default);// Expose Axios class to allow class inheritance
v.Axios=s.default,// Expose Cancel & CancelToken
v.CanceledError=c.default,v.CancelToken=d.default,v.isCancel=h.default,v.VERSION=p.VERSION,v.toFormData=g.default,// Expose AxiosError class
v.AxiosError=y.default,// alias for CanceledError for backward compatibility
v.Cancel=v.CanceledError,// Expose all/spread
v.all=function(t){return Promise.all(t)},v.spread=m.default,// Expose isAxiosError
v.isAxiosError=b.default,// Expose mergeConfig
v.mergeConfig=u.default,v.AxiosHeaders=w.default,v.formToJSON=t=>(0,l.default)((0,i.default).isHTMLForm(t)?new FormData(t):t),v.HttpStatusCode=E.default,v.default=v;var A=v}),o.register("gKvUL",function(n,i){t(n.exports,"default",()=>D);var a,s,u=o("jJbMR");// utils is a library of generic helper functions non-specific to axios
let{toString:f}=Object.prototype,{getPrototypeOf:l}=Object,c=(a=Object.create(null),t=>{let r=f.call(t);return a[r]||(a[r]=r.slice(8,-1).toLowerCase())}),d=t=>(t=t.toLowerCase(),r=>c(r)===t),h=t=>r=>typeof r===t,{isArray:p}=Array,g=h("undefined"),y=d("ArrayBuffer"),m=h("string"),b=h("function"),w=h("number"),E=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==c(t))return!1;let r=l(t);return(null===r||r===Object.prototype||null===Object.getPrototypeOf(r))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},A=d("Date"),O=d("File"),x=d("Blob"),R=d("FileList"),S=d("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function B(t,r,{allOwnKeys:n=!1}={}){let i,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),p(t))for(i=0,o=t.length;i<o;i++)r.call(null,t[i],i,t);else{let o;// Iterate over object keys
let a=n?Object.getOwnPropertyNames(t):Object.keys(t),s=a.length;for(i=0;i<s;i++)o=a[i],r.call(null,t[o],o,t)}}}function U(t,r){let n;r=r.toLowerCase();let i=Object.keys(t),o=i.length;for(;o-- >0;)if(r===(n=i[o]).toLowerCase())return n;return null}let T=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:r,L=t=>!g(t)&&t!==T,I=(s="undefined"!=typeof Uint8Array&&l(Uint8Array),t=>s&&t instanceof s),C=d("HTMLFormElement"),N=(({hasOwnProperty:t})=>(r,n)=>t.call(r,n))(Object.prototype),j=d("RegExp"),P=(t,r)=>{let n=Object.getOwnPropertyDescriptors(t),i={};B(n,(n,o)=>{!1!==r(n,o,t)&&(i[o]=n)}),Object.defineProperties(t,i)},_="abcdefghijklmnopqrstuvwxyz",k="0123456789",F={DIGIT:k,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+k},M=d("AsyncFunction");var D={isArray:p,isArrayBuffer:y,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!g(t)&&null!==t.constructor&&!g(t.constructor)&&b(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let r;return t&&("function"==typeof FormData&&t instanceof FormData||b(t.append)&&("formdata"===(r=c(t))||// detect form-data instance
"object"===r&&b(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&y(t.buffer)},isString:m,isNumber:w,isBoolean:t=>!0===t||!1===t,isObject:E,isPlainObject:v,isUndefined:g,isDate:A,isFile:O,isBlob:x,isRegExp:j,isFunction:b,isStream:t=>E(t)&&b(t.pipe),isURLSearchParams:S,isTypedArray:I,isFileList:R,forEach:B,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:r}=L(this)&&this||{},n={},i=(i,o)=>{let a=r&&U(n,o)||o;v(n[a])&&v(i)?n[a]=t(n[a],i):v(i)?n[a]=t({},i):p(i)?n[a]=i.slice():n[a]=i};for(let t=0,r=arguments.length;t<r;t++)arguments[t]&&B(arguments[t],i);return n},extend:(t,r,n,{allOwnKeys:i}={})=>(B(r,(r,i)=>{n&&b(r)?t[i]=(0,u.default)(r,n):t[i]=r},{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,r,n,i)=>{t.prototype=Object.create(r.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,r,n,i)=>{let o,a,s;let u={};// eslint-disable-next-line no-eq-null,eqeqeq
if(r=r||{},null==t)return r;do{for(a=(o=Object.getOwnPropertyNames(t)).length;a-- >0;)s=o[a],(!i||i(s,t,r))&&!u[s]&&(r[s]=t[s],u[s]=!0);t=!1!==n&&l(t)}while(t&&(!n||n(t,r))&&t!==Object.prototype)return r},kindOf:c,kindOfTest:d,endsWith:(t,r,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=r.length;let i=t.indexOf(r,n);return -1!==i&&i===n},toArray:t=>{if(!t)return null;if(p(t))return t;let r=t.length;if(!w(r))return null;let n=Array(r);for(;r-- >0;)n[r]=t[r];return n},forEachEntry:(t,r)=>{let n;let i=t&&t[Symbol.iterator],o=i.call(t);for(;(n=o.next())&&!n.done;){let i=n.value;r.call(t,i[0],i[1])}},matchAll:(t,r)=>{let n;let i=[];for(;null!==(n=t.exec(r));)i.push(n);return i},isHTMLForm:C,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:P,freezeMethods:t=>{P(t,(r,n)=>{// skip restricted props in strict mode
if(b(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let i=t[n];if(b(i)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(t,r)=>{let n={};return(t=>{t.forEach(t=>{n[t]=!0})})(p(t)?t:String(t).split(r)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,n){return r.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,r)=>Number.isFinite(t=+t)?t:r,findKey:U,global:T,isContextDefined:L,ALPHABET:F,generateString:(t=16,r=F.ALPHA_DIGIT)=>{let n="",{length:i}=r;for(;t--;)n+=r[Math.random()*i|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&b(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let r=Array(10),n=(t,i)=>{if(E(t)){if(r.indexOf(t)>=0)return;if(!("toJSON"in t)){r[i]=t;let o=p(t)?[]:{};return B(t,(t,r)=>{let a=n(t,i+1);g(a)||(o[r]=a)}),r[i]=void 0,o}}return t};return n(t,0)},isAsyncFn:M,isThenable:t=>t&&(E(t)||b(t))&&b(t.then)&&b(t.catch)}}),o.register("jJbMR",function(r,n){t(r.exports,"default",()=>i);function i(t,r){return function(){return t.apply(r,arguments)}}}),o.register("ewFRw",function(r,n){t(r.exports,"default",()=>g);var i=o("gKvUL"),a=o("cbIsf"),s=o("83RYu"),u=o("dlZEJ"),f=o("lk5EI"),l=o("7GD7a"),c=o("bv3QM"),d=o("bxxyx");let h=c.default.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class p{constructor(t){this.defaults=t,this.interceptors={request:new s.default,response:new s.default}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,r){let n,o,a;"string"==typeof t?(r=r||{}).url=t:r=t||{},r=(0,f.default)(this.defaults,r);let{transitional:s,paramsSerializer:l,headers:p}=r;void 0!==s&&(0,c.default).assertOptions(s,{silentJSONParsing:h.transitional(h.boolean),forcedJSONParsing:h.transitional(h.boolean),clarifyTimeoutError:h.transitional(h.boolean)},!1),null!=l&&((0,i.default).isFunction(l)?r.paramsSerializer={serialize:l}:(0,c.default).assertOptions(l,{encode:h.function,serialize:h.function},!0)),// Set config.method
r.method=(r.method||this.defaults.method||"get").toLowerCase(),// Flatten headers
(n=p&&(0,i.default).merge(p.common,p[r.method]))&&(0,i.default).forEach(["delete","get","head","post","put","patch","common"],t=>{delete p[t]}),r.headers=(0,d.default).concat(n,p);// filter out skipped interceptors
let g=[],y=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(r))&&(y=y&&t.synchronous,g.unshift(t.fulfilled,t.rejected))});let m=[];this.interceptors.response.forEach(function(t){m.push(t.fulfilled,t.rejected)});let b=0;if(!y){let t=[(0,u.default).bind(this),void 0];for(t.unshift.apply(t,g),t.push.apply(t,m),a=t.length,o=Promise.resolve(r);b<a;)o=o.then(t[b++],t[b++]);return o}a=g.length;let w=r;for(b=0;b<a;){let t=g[b++],r=g[b++];try{w=t(w)}catch(t){r.call(this,t);break}}try{o=(0,u.default).call(this,w)}catch(t){return Promise.reject(t)}for(b=0,a=m.length;b<a;)o=o.then(m[b++],m[b++]);return o}getUri(t){t=(0,f.default)(this.defaults,t);let r=(0,l.default)(t.baseURL,t.url);return(0,a.default)(r,t.params,t.paramsSerializer)}}// Provide aliases for supported request methods
(0,i.default).forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/p.prototype[t]=function(r,n){return this.request((0,f.default)(n||{},{method:t,url:r,data:(n||{}).data}))}}),(0,i.default).forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function r(r){return function(n,i,o){return this.request((0,f.default)(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}p.prototype[t]=r(),p.prototype[t+"Form"]=r(!0)});var g=p}),o.register("cbIsf",function(r,n){t(r.exports,"default",()=>u);var i=o("gKvUL"),a=o("l9LQd");/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function s(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function u(t,r,n){let o;/*eslint no-param-reassign:0*/if(!r)return t;let u=n&&n.encode||s,f=n&&n.serialize;if(o=f?f(r,n):(0,i.default).isURLSearchParams(r)?r.toString():new(0,a.default)(r,n).toString(u)){let r=t.indexOf("#");-1!==r&&(t=t.slice(0,r)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}}),o.register("l9LQd",function(r,n){t(r.exports,"default",()=>f);var i=o("jOwpo");/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function a(t){let r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return r[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function s(t,r){this._pairs=[],t&&(0,i.default)(t,this,r)}let u=s.prototype;u.append=function(t,r){this._pairs.push([t,r])},u.toString=function(t){let r=t?function(r){return t.call(this,r,a)}:a;return this._pairs.map(function(t){return r(t[0])+"="+r(t[1])},"").join("&")};var f=s}),o.register("jOwpo",function(r,n){t(r.exports,"default",()=>h);var i=o("gKvUL"),a=o("6HVMZ"),s=o("5vpyF"),u=o("6ZWSX").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function f(t){return(0,i.default).isPlainObject(t)||(0,i.default).isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function l(t){return(0,i.default).endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function c(t,r,n){return t?t.concat(r).map(function(t,r){return(// eslint-disable-next-line no-param-reassign
t=l(t),!n&&r?"["+t+"]":t)}).join(n?".":""):r}let d=(0,i.default).toFlatObject(i.default,{},null,function(t){return/^is[A-Z]/.test(t)});var h=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,r,n){if(!(0,i.default).isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
r=r||new(s.default||FormData),// eslint-disable-next-line no-param-reassign
n=(0,i.default).toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,r){// eslint-disable-next-line no-eq-null,eqeqeq
return!(0,i.default).isUndefined(r[t])});let o=n.metaTokens,h=n.visitor||w,p=n.dots,g=n.indexes,y=n.Blob||"undefined"!=typeof Blob&&Blob,m=y&&(0,i.default).isSpecCompliantForm(r);if(!(0,i.default).isFunction(h))throw TypeError("visitor must be a function");function b(t){if(null===t)return"";if((0,i.default).isDate(t))return t.toISOString();if(!m&&(0,i.default).isBlob(t))throw new a.default("Blob is not supported. Use a Buffer instead.");return(0,i.default).isArrayBuffer(t)||(0,i.default).isTypedArray(t)?m&&"function"==typeof Blob?new Blob([t]):u.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function w(t,n,a){let s=t;if(t&&!a&&"object"==typeof t){if((0,i.default).endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=o?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if((0,i.default).isArray(t)&&(u=t,(0,i.default).isArray(u)&&!u.some(f))||((0,i.default).isFileList(t)||(0,i.default).endsWith(n,"[]"))&&(s=(0,i.default).toArray(t)))return(// eslint-disable-next-line no-param-reassign
n=l(n),s.forEach(function(t,o){(0,i.default).isUndefined(t)||null===t||r.append(!0===g?c([n],o,p):null===g?n:n+"[]",b(t))}),!1)}}return!!f(t)||(r.append(c(a,n,p),b(t)),!1)}let E=[],v=Object.assign(d,{defaultVisitor:w,convertValue:b,isVisitable:f});if(!(0,i.default).isObject(t))throw TypeError("data must be an object");return function t(n,o){if(!(0,i.default).isUndefined(n)){if(-1!==E.indexOf(n))throw Error("Circular reference detected in "+o.join("."));E.push(n),(0,i.default).forEach(n,function(n,a){let s=!((0,i.default).isUndefined(n)||null===n)&&h.call(r,n,(0,i.default).isString(a)?a.trim():a,o,v);!0===s&&t(n,o?o.concat(a):[a])}),E.pop()}}(t),r}}),o.register("6HVMZ",function(r,n){t(r.exports,"default",()=>f);var i=o("gKvUL");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function a(t,r,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)}(0,i.default).inherits(a,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:(0,i.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let s=a.prototype,u={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{u[t]={value:t}}),Object.defineProperties(a,u),Object.defineProperty(s,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
a.from=(t,r,n,o,u,f)=>{let l=Object.create(s);return(0,i.default).toFlatObject(t,l,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),a.call(l,t.message,r,n,o,u),l.cause=t,l.name=t.name,f&&Object.assign(l,f),l};var f=a}),o.register("5vpyF",function(r,n){t(r.exports,"default",()=>i);// eslint-disable-next-line strict
var i=null}),o.register("6ZWSX",function(r,n){t(r.exports,"Buffer",()=>i,t=>i=t),t(r.exports,"INSPECT_MAX_BYTES",()=>a,t=>a=t);var i,a,s=o("kuxul"),u=o("9NvM5");let f="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function l(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let r=new Uint8Array(t);return Object.setPrototypeOf(r,c.prototype),r}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function c(t,r,n){// Common case.
if("number"==typeof t){if("string"==typeof r)throw TypeError('The "string" argument must be of type string. Received type number');return p(t)}return d(t,r,n)}function d(t,r,n){if("string"==typeof t)return function(t,r){if(("string"!=typeof r||""===r)&&(r="utf8"),!c.isEncoding(r))throw TypeError("Unknown encoding: "+r);let n=0|b(t,r),i=l(n),o=i.write(t,r);return o!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(i=i.slice(0,o)),i}(t,r);if(ArrayBuffer.isView(t))return function(t){if(q(t,Uint8Array)){let r=new Uint8Array(t);return y(r.buffer,r.byteOffset,r.byteLength)}return g(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return y(t,r,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return c.from(i,r,n);let o=function(t){var r;if(c.isBuffer(t)){let r=0|m(t.length),n=l(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(r=t.length)!=r// eslint-disable-line no-self-compare
?l(0):g(t):"Buffer"===t.type&&Array.isArray(t.data)?g(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return c.from(t[Symbol.toPrimitive]("string"),r,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return h(t),l(t<0?0:0|m(t))}function g(t){let r=t.length<0?0:0|m(t.length),n=l(r);for(let i=0;i<r;i+=1)n[i]=255&t[i];return n}function y(t,r,n){let i;if(r<0||t.byteLength<r)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),c.prototype),i)}function m(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function b(t,r){if(c.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return F(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return M(t).length;default:if(o)return i?-1:F(t).length// assume utf8
;r=(""+r).toLowerCase(),o=!0}}function w(t,r,n){let i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===r||r<0)&&(r=0),r>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(r>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,r,n){let i=t.length;(!r||r<0)&&(r=0),(!n||n<0||n>i)&&(n=i);let o="";for(let i=r;i<n;++i)o+=$[t[i]];return o}(this,r,n);case"utf8":case"utf-8":return O(this,r,n);case"ascii":return function(t,r,n){let i="";n=Math.min(t.length,n);for(let o=r;o<n;++o)i+=String.fromCharCode(127&t[o]);return i}(this,r,n);case"latin1":case"binary":return function(t,r,n){let i="";n=Math.min(t.length,n);for(let o=r;o<n;++o)i+=String.fromCharCode(t[o]);return i}(this,r,n);case"base64":var o,a;return o=r,a=n,0===o&&a===this.length?s.fromByteArray(this):s.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,r,n){let i=t.slice(r,n),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<i.length-1;t+=2)o+=String.fromCharCode(i[t]+256*i[t+1]);return o}(this,r,n);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function E(t,r,n){let i=t[r];t[r]=t[n],t[n]=i}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function v(t,r,n,i,o){var a;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(a=n=+n// Coerce to Number.
)!=a&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return -1;n=t.length-1}else if(n<0){if(!o)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof r&&(r=c.from(r,i)),c.isBuffer(r))return(// Special case: looking for empty string/buffer always fails
0===r.length?-1:A(t,r,n,i,o));if("number"==typeof r)return(r&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,r,n):Uint8Array.prototype.lastIndexOf.call(t,r,n):A(t,[r],n,i,o);throw TypeError("val must be string, number or Buffer")}function A(t,r,n,i,o){let a,s=1,u=t.length,f=r.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||r.length<2)return -1;s=2,u/=2,f/=2,n/=2}function l(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}if(o){let i=-1;for(a=n;a<u;a++)if(l(t,a)===l(r,-1===i?0:a-i)){if(-1===i&&(i=a),a-i+1===f)return i*s}else -1!==i&&(a-=a-i),i=-1}else for(n+f>u&&(n=u-f),a=n;a>=0;a--){let n=!0;for(let i=0;i<f;i++)if(l(t,a+i)!==l(r,i)){n=!1;break}if(n)return a}return -1}function O(t,r,n){n=Math.min(t.length,n);let i=[],o=r;for(;o<n;){let r=t[o],a=null,s=r>239?4:r>223?3:r>191?2:1;if(o+s<=n){let n,i,u,f;switch(s){case 1:r<128&&(a=r);break;case 2:(192&(n=t[o+1]))==128&&(f=(31&r)<<6|63&n)>127&&(a=f);break;case 3:n=t[o+1],i=t[o+2],(192&n)==128&&(192&i)==128&&(f=(15&r)<<12|(63&n)<<6|63&i)>2047&&(f<55296||f>57343)&&(a=f);break;case 4:n=t[o+1],i=t[o+2],u=t[o+3],(192&n)==128&&(192&i)==128&&(192&u)==128&&(f=(15&r)<<18|(63&n)<<12|(63&i)<<6|63&u)>65535&&f<1114112&&(a=f)}}null===a?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
a=65533,s=1):a>65535&&(// encode to utf16 (surrogate pair dance)
a-=65536,i.push(a>>>10&1023|55296),a=56320|1023&a),i.push(a),o+=s}return function(t){let r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",i=0;for(;i<r;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function x(t,r,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+r>n)throw RangeError("Trying to access beyond buffer length")}function R(t,r,n,i,o,a){if(!c.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<a)throw RangeError('"value" argument is out of bounds');if(n+i>t.length)throw RangeError("Index out of range")}function S(t,r,n,i,o){j(r,i,o,t,n,7);let a=Number(r&BigInt(4294967295));t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a;let s=Number(r>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function B(t,r,n,i,o){j(r,i,o,t,n,7);let a=Number(r&BigInt(4294967295));t[n+7]=a,a>>=8,t[n+6]=a,a>>=8,t[n+5]=a,a>>=8,t[n+4]=a;let s=Number(r>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function U(t,r,n,i,o,a){if(n+i>t.length||n<0)throw RangeError("Index out of range")}function T(t,r,n,i,o){return r=+r,n>>>=0,o||U(t,r,n,4,34028234663852886e22,-34028234663852886e22),u.write(t,r,n,i,23,4),n+4}function L(t,r,n,i,o){return r=+r,n>>>=0,o||U(t,r,n,8,17976931348623157e292,-17976931348623157e292),u.write(t,r,n,i,52,8),n+8}i=c,a=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */c.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/c.from=function(t,r,n){return d(t,r,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/c.alloc=function(t,r,n){return(h(t),t<=0)?l(t):void 0!==r?"string"==typeof n?l(t).fill(r,n):l(t).fill(r):l(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */c.allocUnsafe=function(t){return p(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */c.allocUnsafeSlow=function(t){return p(t)},c.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==c.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},c.compare=function(t,r){if(q(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),q(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),!c.isBuffer(t)||!c.isBuffer(r))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;let n=t.length,i=r.length;for(let o=0,a=Math.min(n,i);o<a;++o)if(t[o]!==r[o]){n=t[o],i=r[o];break}return n<i?-1:i<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,r){let n;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);if(void 0===r)for(n=0,r=0;n<t.length;++n)r+=t[n].length;let i=c.allocUnsafe(r),o=0;for(n=0;n<t.length;++n){let r=t[n];if(q(r,Uint8Array))o+r.length>i.length?(c.isBuffer(r)||(r=c.from(r)),r.copy(i,o)):Uint8Array.prototype.set.call(i,r,o);else if(c.isBuffer(r))r.copy(i,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=r.length}return i},c.byteLength=b,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
c.prototype._isBuffer=!0,c.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<t;r+=2)E(this,r,r+1);return this},c.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<t;r+=4)E(this,r,r+3),E(this,r+1,r+2);return this},c.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<t;r+=8)E(this,r,r+7),E(this,r+1,r+6),E(this,r+2,r+5),E(this,r+3,r+4);return this},c.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?O(this,0,t):w.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(t){if(!c.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){let t="",r=a;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},f&&(c.prototype[f]=c.prototype.inspect),c.prototype.compare=function(t,r,n,i,o){if(q(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),r<0||n>t.length||i<0||o>this.length)throw RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return -1;if(r>=n)return 1;if(r>>>=0,n>>>=0,i>>>=0,o>>>=0,this===t)return 0;let a=o-i,s=n-r,u=Math.min(a,s),f=this.slice(i,o),l=t.slice(r,n);for(let t=0;t<u;++t)if(f[t]!==l[t]){a=f[t],s=l[t];break}return a<s?-1:s<a?1:0},c.prototype.includes=function(t,r,n){return -1!==this.indexOf(t,r,n)},c.prototype.indexOf=function(t,r,n){return v(this,t,r,n,!0)},c.prototype.lastIndexOf=function(t,r,n){return v(this,t,r,n,!1)},c.prototype.write=function(t,r,n,i){var o,a,s,u,f,l,c,d;// Buffer#write(string)
if(void 0===r)i="utf8",n=this.length,r=0;else if(void 0===n&&"string"==typeof r)i=r,n=this.length,r=0;else if(isFinite(r))r>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-r;if((void 0===n||n>h)&&(n=h),t.length>0&&(n<0||r<0)||r>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let p=!1;for(;;)switch(i){case"hex":return function(t,r,n,i){let o;n=Number(n)||0;let a=t.length-n;i?(i=Number(i))>a&&(i=a):i=a;let s=r.length;for(i>s/2&&(i=s/2),o=0;o<i;++o){let i=parseInt(r.substr(2*o,2),16);if(i!=i)break;t[n+o]=i}return o}(this,t,r,n);case"utf8":case"utf-8":return o=r,a=n,D(F(t,this.length-o),this,o,a);case"ascii":case"latin1":case"binary":return s=r,u=n,D(function(t){let r=[];for(let n=0;n<t.length;++n)r.push(255&t.charCodeAt(n));return r}(t),this,s,u);case"base64":// Warning: maxLength not taken into account in base64Write
return f=r,l=n,D(M(t),this,f,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=r,d=n,D(function(t,r){let n,i;let o=[];for(let a=0;a<t.length&&!((r-=2)<0);++a)i=(n=t.charCodeAt(a))>>8,o.push(n%256),o.push(i);return o}(t,this.length-c),this,c,d);default:if(p)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),p=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.slice=function(t,r){let n=this.length;t=~~t,r=void 0===r?n:~~r,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),r<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t);let i=this.subarray(t,r);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i,c.prototype),i)},c.prototype.readUintLE=c.prototype.readUIntLE=function(t,r,n){t>>>=0,r>>>=0,n||x(t,r,this.length);let i=this[t],o=1,a=0;for(;++a<r&&(o*=256);)i+=this[t+a]*o;return i},c.prototype.readUintBE=c.prototype.readUIntBE=function(t,r,n){t>>>=0,r>>>=0,n||x(t,r,this.length);let i=this[t+--r],o=1;for(;r>0&&(o*=256);)i+=this[t+--r]*o;return i},c.prototype.readUint8=c.prototype.readUInt8=function(t,r){return t>>>=0,r||x(t,1,this.length),this[t]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(t,r){return t>>>=0,r||x(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(t,r){return t>>>=0,r||x(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(t,r){return t>>>=0,r||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(t,r){return t>>>=0,r||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readBigUInt64LE=H(function(t){P(t>>>=0,"offset");let r=this[t],n=this[t+7];(void 0===r||void 0===n)&&_(t,this.length-8);let i=r+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*n;return BigInt(i)+(BigInt(o)<<BigInt(32))}),c.prototype.readBigUInt64BE=H(function(t){P(t>>>=0,"offset");let r=this[t],n=this[t+7];(void 0===r||void 0===n)&&_(t,this.length-8);let i=16777216*r+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(o)}),c.prototype.readIntLE=function(t,r,n){t>>>=0,r>>>=0,n||x(t,r,this.length);let i=this[t],o=1,a=0;for(;++a<r&&(o*=256);)i+=this[t+a]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},c.prototype.readIntBE=function(t,r,n){t>>>=0,r>>>=0,n||x(t,r,this.length);let i=r,o=1,a=this[t+--i];for(;i>0&&(o*=256);)a+=this[t+--i]*o;return a>=(o*=128)&&(a-=Math.pow(2,8*r)),a},c.prototype.readInt8=function(t,r){return(t>>>=0,r||x(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},c.prototype.readInt16LE=function(t,r){t>>>=0,r||x(t,2,this.length);let n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,r){t>>>=0,r||x(t,2,this.length);let n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,r){return t>>>=0,r||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,r){return t>>>=0,r||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readBigInt64LE=H(function(t){P(t>>>=0,"offset");let r=this[t],n=this[t+7];(void 0===r||void 0===n)&&_(t,this.length-8);let i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24// Overflow
);return(BigInt(i)<<BigInt(32))+BigInt(r+256*this[++t]+65536*this[++t]+16777216*this[++t])}),c.prototype.readBigInt64BE=H(function(t){P(t>>>=0,"offset");let r=this[t],n=this[t+7];(void 0===r||void 0===n)&&_(t,this.length-8);let i=(r<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+n)}),c.prototype.readFloatLE=function(t,r){return t>>>=0,r||x(t,4,this.length),u.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,r){return t>>>=0,r||x(t,4,this.length),u.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,r){return t>>>=0,r||x(t,8,this.length),u.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,r){return t>>>=0,r||x(t,8,this.length),u.read(this,t,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(t,r,n,i){if(t=+t,r>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;R(this,t,r,n,i,0)}let o=1,a=0;for(this[r]=255&t;++a<n&&(o*=256);)this[r+a]=t/o&255;return r+n},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(t,r,n,i){if(t=+t,r>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;R(this,t,r,n,i,0)}let o=n-1,a=1;for(this[r+o]=255&t;--o>=0&&(a*=256);)this[r+o]=t/a&255;return r+n},c.prototype.writeUint8=c.prototype.writeUInt8=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,1,255,0),this[r]=255&t,r+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},c.prototype.writeBigUInt64LE=H(function(t,r=0){return S(this,t,r,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeBigUInt64BE=H(function(t,r=0){return B(this,t,r,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeIntLE=function(t,r,n,i){if(t=+t,r>>>=0,!i){let i=Math.pow(2,8*n-1);R(this,t,r,n,i-1,-i)}let o=0,a=1,s=0;for(this[r]=255&t;++o<n&&(a*=256);)t<0&&0===s&&0!==this[r+o-1]&&(s=1),this[r+o]=(t/a>>0)-s&255;return r+n},c.prototype.writeIntBE=function(t,r,n,i){if(t=+t,r>>>=0,!i){let i=Math.pow(2,8*n-1);R(this,t,r,n,i-1,-i)}let o=n-1,a=1,s=0;for(this[r+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[r+o+1]&&(s=1),this[r+o]=(t/a>>0)-s&255;return r+n},c.prototype.writeInt8=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},c.prototype.writeInt16LE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},c.prototype.writeInt16BE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},c.prototype.writeInt32LE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},c.prototype.writeInt32BE=function(t,r,n){return t=+t,r>>>=0,n||R(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},c.prototype.writeBigInt64LE=H(function(t,r=0){return S(this,t,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeBigInt64BE=H(function(t,r=0){return B(this,t,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeFloatLE=function(t,r,n){return T(this,t,r,!0,n)},c.prototype.writeFloatBE=function(t,r,n){return T(this,t,r,!1,n)},c.prototype.writeDoubleLE=function(t,r,n){return L(this,t,r,!0,n)},c.prototype.writeDoubleBE=function(t,r,n){return L(this,t,r,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
c.prototype.copy=function(t,r,n,i){if(!c.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),i||0===i||(i=this.length),r>=t.length&&(r=t.length),r||(r=0),i>0&&i<n&&(i=n),i===n||0===t.length||0===this.length)return 0;// Fatal error conditions
if(r<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-r<i-n&&(i=t.length-r+n);let o=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(r,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),r),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
c.prototype.fill=function(t,r,n,i){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof r?(i=r,r=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!c.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){let r=t.charCodeAt(0);("utf8"===i&&r<128||"latin1"===i)&&(t=r)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(r<0||this.length<r||this.length<n)throw RangeError("Out of range index");if(n<=r)return this;if(r>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=r;o<n;++o)this[o]=t;else{let a=c.isBuffer(t)?t:c.from(t,i),s=a.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-r;++o)this[o+r]=a[o%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let I={};function C(t,r,n){I[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function N(t){let r="",n=t.length,i="-"===t[0]?1:0;for(;n>=i+4;n-=3)r=`_${t.slice(n-3,n)}${r}`;return`${t.slice(0,n)}${r}`}function j(t,r,n,i,o,a){if(t>n||t<r){let i;let o="bigint"==typeof r?"n":"";throw i=a>3?0===r||r===BigInt(0)?`>= 0${o} and < 2${o} ** ${(a+1)*8}${o}`:`>= -(2${o} ** ${(a+1)*8-1}${o}) and < 2 ** ${(a+1)*8-1}${o}`:`>= ${r}${o} and <= ${n}${o}`,new I.ERR_OUT_OF_RANGE("value",i,t)}P(o,"offset"),(void 0===i[o]||void 0===i[o+a])&&_(o,i.length-(a+1))}function P(t,r){if("number"!=typeof t)throw new I.ERR_INVALID_ARG_TYPE(r,"number",t)}function _(t,r,n){if(Math.floor(t)!==t)throw P(t,n),new I.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(r<0)throw new I.ERR_BUFFER_OUT_OF_BOUNDS;throw new I.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${r}`,t)}C("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),C("ERR_INVALID_ARG_TYPE",function(t,r){return`The "${t}" argument must be of type number. Received type ${typeof r}`},TypeError),C("ERR_OUT_OF_RANGE",function(t,r,n){let i=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?o=N(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=N(o)),o+="n"),i+=` It must be ${r}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
let k=/[^+/0-9A-Za-z-_]/g;function F(t,r){let n;r=r||1/0;let i=t.length,o=null,a=[];for(let s=0;s<i;++s){// is surrogate component
if((n=t.charCodeAt(s))>55295&&n<57344){// last char was a lead
if(!o){// no lead yet
if(n>56319||s+1===i){(r-=3)>-1&&a.push(239,191,189);continue}// valid lead
o=n;continue}// 2 leads in a row
if(n<56320){(r-=3)>-1&&a.push(239,191,189),o=n;continue}// valid surrogate pair
n=(o-55296<<10|n-56320)+65536}else o&&(r-=3)>-1&&a.push(239,191,189);// encode utf8
if(o=null,n<128){if((r-=1)<0)break;a.push(n)}else if(n<2048){if((r-=2)<0)break;a.push(n>>6|192,63&n|128)}else if(n<65536){if((r-=3)<0)break;a.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((r-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return a}function M(t){return s.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(k,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function D(t,r,n,i){let o;for(o=0;o<i&&!(o+n>=r.length)&&!(o>=t.length);++o)r[o+n]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function q(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let $=function(){let t="0123456789abcdef",r=Array(256);for(let n=0;n<16;++n){let i=16*n;for(let o=0;o<16;++o)r[i+o]=t[n]+t[o]}return r}();// Return not function with Error if BigInt not supported
function H(t){return"undefined"==typeof BigInt?z:t}function z(){throw Error("BigInt not supported")}}),o.register("kuxul",function(r,n){t(r.exports,"toByteArray",()=>i,t=>i=t),t(r.exports,"fromByteArray",()=>o,t=>o=t),i=function(t){var r,n,i=function(t){var r=t.length;if(r%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=t.indexOf("=");-1===n&&(n=r);var i=n===r?0:4-n%4;return[n,i]}(t),o=i[0],a=i[1],f=new u((o+a)*3/4-a),l=0,c=a>0?o-4:o;for(n=0;n<c;n+=4)r=s[t.charCodeAt(n)]<<18|s[t.charCodeAt(n+1)]<<12|s[t.charCodeAt(n+2)]<<6|s[t.charCodeAt(n+3)],f[l++]=r>>16&255,f[l++]=r>>8&255,f[l++]=255&r;return 2===a&&(r=s[t.charCodeAt(n)]<<2|s[t.charCodeAt(n+1)]>>4,f[l++]=255&r),1===a&&(r=s[t.charCodeAt(n)]<<10|s[t.charCodeAt(n+1)]<<4|s[t.charCodeAt(n+2)]>>2,f[l++]=r>>8&255,f[l++]=255&r),f},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var r,n=t.length,i=n%3// if we have 1 byte left, pad 2 bytes
,o=[],s=0,u=n-i;s<u;s+=16383// must be multiple of 3
)o.push(function(t,r,n){for(var i,o=[],s=r;s<n;s+=3)o.push(a[(i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}(t,s,s+16383>u?u:s+16383));return 1===i?o.push(a[(r=t[n-1])>>2]+a[r<<4&63]+"=="):2===i&&o.push(a[(r=(t[n-2]<<8)+t[n-1])>>10]+a[r>>4&63]+a[r<<2&63]+"="),o.join("")};for(var i,o,a=[],s=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,c=f.length;l<c;++l)a[l]=f[l],s[f.charCodeAt(l)]=l;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63}),o.register("9NvM5",function(r,n){var i,o;t(r.exports,"read",()=>i,t=>i=t),t(r.exports,"write",()=>o,t=>o=t),i=function(t,r,n,i,o){var a,s,u=8*o-i-1,f=(1<<u)-1,l=f>>1,c=-7,d=n?o-1:0,h=n?-1:1,p=t[r+d];for(d+=h,a=p&(1<<-c)-1,p>>=-c,c+=u;c>0;a=256*a+t[r+d],d+=h,c-=8);for(s=a&(1<<-c)-1,a>>=-c,c+=i;c>0;s=256*s+t[r+d],d+=h,c-=8);if(0===a)a=1-l;else{if(a===f)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,i),a-=l}return(p?-1:1)*s*Math.pow(2,a-i)},o=function(t,r,n,i,o,a){var s,u,f,l=8*a-o-1,c=(1<<l)-1,d=c>>1,h=23===o?5960464477539062e-23:0,p=i?0:a-1,g=i?1:-1,y=r<0||0===r&&1/r<0?1:0;for(isNaN(r=Math.abs(r))||r===1/0?(u=isNaN(r)?1:0,s=c):(s=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-s))<1&&(s--,f*=2),s+d>=1?r+=h/f:r+=h*Math.pow(2,1-d),r*f>=2&&(s++,f/=2),s+d>=c?(u=0,s=c):s+d>=1?(u=(r*f-1)*Math.pow(2,o),s+=d):(u=r*Math.pow(2,d-1)*Math.pow(2,o),s=0));o>=8;t[n+p]=255&u,p+=g,u/=256,o-=8);for(s=s<<o|u,l+=o;l>0;t[n+p]=255&s,p+=g,s/=256,l-=8);t[n+p-g]|=128*y}}),o.register("83RYu",function(r,n){t(r.exports,"default",()=>a);var i=o("gKvUL"),a=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){(0,i.default).forEach(this.handlers,function(r){null!==r&&t(r)})}}}),o.register("dlZEJ",function(r,n){t(r.exports,"default",()=>d);var i=o("7YJ0v"),a=o("7L4QX"),s=o("blSvA"),u=o("dIGMp"),f=o("bxxyx"),l=o("jZ6wW");/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new u.default(null,t)}function d(t){c(t),t.headers=(0,f.default).from(t.headers),// Transform request data
t.data=(0,i.default).call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let r=(0,l.default).getAdapter(t.adapter||s.default.adapter);return r(t).then(function(r){return c(t),// Transform response data
r.data=(0,i.default).call(t,t.transformResponse,r),r.headers=(0,f.default).from(r.headers),r},function(r){return!(0,a.default)(r)&&(c(t),r&&r.response&&(r.response.data=(0,i.default).call(t,t.transformResponse,r.response),r.response.headers=(0,f.default).from(r.response.headers))),Promise.reject(r)})}}),o.register("7YJ0v",function(r,n){t(r.exports,"default",()=>u);var i=o("gKvUL"),a=o("blSvA"),s=o("bxxyx");function u(t,r){let n=this||a.default,o=r||n,u=(0,s.default).from(o.headers),f=o.data;return(0,i.default).forEach(t,function(t){f=t.call(n,f,u.normalize(),r?r.status:void 0)}),u.normalize(),f}}),o.register("blSvA",function(r,n){t(r.exports,"default",()=>p);var i=o("gKvUL"),a=o("6HVMZ"),s=o("6YCMk"),u=o("jOwpo"),f=o("lcuqa"),l=o("44xkq"),c=o("8cmY2");let d={"Content-Type":void 0},h={transitional:s.default,adapter:["xhr","http"],transformRequest:[function(t,r){let n;let o=r.getContentType()||"",a=o.indexOf("application/json")>-1,s=(0,i.default).isObject(t);s&&(0,i.default).isHTMLForm(t)&&(t=new FormData(t));let l=(0,i.default).isFormData(t);if(l)return a&&a?JSON.stringify((0,c.default)(t)):t;if((0,i.default).isArrayBuffer(t)||(0,i.default).isBuffer(t)||(0,i.default).isStream(t)||(0,i.default).isFile(t)||(0,i.default).isBlob(t))return t;if((0,i.default).isArrayBufferView(t))return t.buffer;if((0,i.default).isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return(0,f.default)(t,this.formSerializer).toString();if((n=(0,i.default).isFileList(t))||o.indexOf("multipart/form-data")>-1){let r=this.env&&this.env.FormData;return(0,u.default)(n?{"files[]":t}:t,r&&new r,this.formSerializer)}}return s||a?(r.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,r,n){if((0,i.default).isString(t))try{return(0,JSON.parse)(t),(0,i.default).trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let r=this.transitional||h.transitional,n=r&&r.forcedJSONParsing,o="json"===this.responseType;if(t&&(0,i.default).isString(t)&&(n&&!this.responseType||o)){let n=r&&r.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!n&&o){if("SyntaxError"===t.name)throw(0,a.default).from(t,a.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:l.default.classes.FormData,Blob:l.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};(0,i.default).forEach(["delete","get","head"],function(t){h.headers[t]={}}),(0,i.default).forEach(["post","put","patch"],function(t){h.headers[t]=(0,i.default).merge(d)});var p=h}),o.register("6YCMk",function(r,n){t(r.exports,"default",()=>i);var i={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),o.register("lcuqa",function(r,n){t(r.exports,"default",()=>u);var i=o("gKvUL"),a=o("jOwpo"),s=o("44xkq");function u(t,r){return(0,a.default)(t,new s.default.classes.URLSearchParams,Object.assign({visitor:function(t,r,n,o){return s.default.isNode&&(0,i.default).isBuffer(t)?(this.append(r,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},r))}}),o.register("44xkq",function(r,n){let i;t(r.exports,"default",()=>c);var a=o("9ww2p"),s=o("bzEBu"),u=o("7HTwA");/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */let f=("undefined"==typeof navigator||"ReactNative"!==(i=navigator.product)&&"NativeScript"!==i&&"NS"!==i)&&"undefined"!=typeof window&&"undefined"!=typeof document,l="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var c={isBrowser:!0,classes:{URLSearchParams:a.default,FormData:s.default,Blob:u.default},isStandardBrowserEnv:f,isStandardBrowserWebWorkerEnv:l,protocols:["http","https","file","blob","url","data"]}}),o.register("9ww2p",function(r,n){t(r.exports,"default",()=>a);var i=o("l9LQd"),a="undefined"!=typeof URLSearchParams?URLSearchParams:i.default}),o.register("bzEBu",function(r,n){t(r.exports,"default",()=>i);var i="undefined"!=typeof FormData?FormData:null}),o.register("7HTwA",function(r,n){t(r.exports,"default",()=>i);var i="undefined"!=typeof Blob?Blob:null}),o.register("8cmY2",function(r,n){t(r.exports,"default",()=>a);var i=o("gKvUL"),a=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if((0,i.default).isFormData(t)&&(0,i.default).isFunction(t.entries)){let r={};return(0,i.default).forEachEntry(t,(t,n)=>{!function t(r,n,o,a){let s=r[a++],u=Number.isFinite(+s),f=a>=r.length;if(s=!s&&(0,i.default).isArray(o)?o.length:s,f)return(0,i.default).hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!u;o[s]&&(0,i.default).isObject(o[s])||(o[s]=[]);let l=t(r,n,o[s],a);return l&&(0,i.default).isArray(o[s])&&(o[s]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let r,n;let i={},o=Object.keys(t),a=o.length;for(r=0;r<a;r++)i[n=o[r]]=t[n];return i}(o[s])),!u}((0,i.default).matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),n,r,0)}),r}return null}}),o.register("bxxyx",function(r,n){t(r.exports,"default",()=>h);var i=o("gKvUL"),a=o("lDriZ");let s=Symbol("internals");function u(t){return t&&String(t).trim().toLowerCase()}function f(t){return!1===t||null==t?t:(0,i.default).isArray(t)?t.map(f):String(t)}let l=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function c(t,r,n,o,a){if((0,i.default).isFunction(o))return o.call(this,r,n);if(a&&(r=n),(0,i.default).isString(r)){if((0,i.default).isString(o))return -1!==r.indexOf(o);if((0,i.default).isRegExp(o))return o.test(r)}}class d{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function s(t,r,n){let a=u(r);if(!a)throw Error("header name must be a non-empty string");let s=(0,i.default).findKey(o,a);s&&void 0!==o[s]&&!0!==n&&(void 0!==n||!1===o[s])||(o[s||r]=f(t))}let c=(t,r)=>(0,i.default).forEach(t,(t,n)=>s(t,n,r));return(0,i.default).isPlainObject(t)||t instanceof this.constructor?c(t,r):(0,i.default).isString(t)&&(t=t.trim())&&!l(t)?c((0,a.default)(t),r):null!=t&&s(r,t,n),this}get(t,r){if(t=u(t)){let n=(0,i.default).findKey(this,t);if(n){let t=this[n];if(!r)return t;if(!0===r)return function(t){let r;let n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;r=i.exec(t);)n[r[1]]=r[2];return n}(t);if((0,i.default).isFunction(r))return r.call(this,t,n);if((0,i.default).isRegExp(r))return r.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=u(t)){let n=(0,i.default).findKey(this,t);return!!(n&&void 0!==this[n]&&(!r||c(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function a(t){if(t=u(t)){let a=(0,i.default).findKey(n,t);a&&(!r||c(n,n[a],a,r))&&(delete n[a],o=!0)}}return(0,i.default).isArray(t)?t.forEach(a):a(t),o}clear(t){let r=Object.keys(this),n=r.length,i=!1;for(;n--;){let o=r[n];(!t||c(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){let r=this,n={};return(0,i.default).forEach(this,(o,a)=>{let s=(0,i.default).findKey(n,a);if(s){r[s]=f(o),delete r[a];return}let u=t?a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n):String(a).trim();u!==a&&delete r[a],r[u]=f(o),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return(0,i.default).forEach(this,(n,o)=>{null!=n&&!1!==n&&(r[o]=t&&(0,i.default).isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(t=>n.set(t)),n}static accessor(t){let r=this[s]=this[s]={accessors:{}},n=r.accessors,o=this.prototype;function a(t){let r=u(t);n[r]||(function(t,r){let n=(0,i.default).toCamelCase(" "+r);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(t,n,o){return this[i].call(this,r,t,n,o)},configurable:!0})})}(o,t),n[r]=!0)}return(0,i.default).isArray(t)?t.forEach(a):a(t),this}}d.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),(0,i.default).freezeMethods(d.prototype),(0,i.default).freezeMethods(d);var h=d}),o.register("lDriZ",function(r,n){t(r.exports,"default",()=>s);var i=o("gKvUL");// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let a=(0,i.default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */s=t=>{let r,n,i;let o={};return t&&t.split("\n").forEach(function(t){i=t.indexOf(":"),r=t.substring(0,i).trim().toLowerCase(),n=t.substring(i+1).trim(),!r||o[r]&&a[r]||("set-cookie"===r?o[r]?o[r].push(n):o[r]=[n]:o[r]=o[r]?o[r]+", "+n:n)}),o}}),o.register("7L4QX",function(r,n){t(r.exports,"default",()=>i);function i(t){return!!(t&&t.__CANCEL__)}}),o.register("dIGMp",function(r,n){t(r.exports,"default",()=>s);var i=o("6HVMZ");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function a(t,r,n){// eslint-disable-next-line no-eq-null,eqeqeq
(0,i.default).call(this,null==t?"canceled":t,i.default.ERR_CANCELED,r,n),this.name="CanceledError"}(0,o("gKvUL").default).inherits(a,i.default,{__CANCEL__:!0});var s=a}),o.register("jZ6wW",function(r,n){t(r.exports,"default",()=>l);var i=o("gKvUL"),a=o("5vpyF"),s=o("at5cb"),u=o("6HVMZ");let f={http:a.default,xhr:s.default};(0,i.default).forEach(f,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:r})}});var l={getAdapter:t=>{let r,n;t=(0,i.default).isArray(t)?t:[t];let{length:o}=t;for(let a=0;a<o&&(r=t[a],!(n=(0,i.default).isString(r)?f[r.toLowerCase()]:r));a++);if(!n){if(!1===n)throw new u.default(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error((0,i.default).hasOwnProp(f,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!(0,i.default).isFunction(n))throw TypeError("adapter is not a function");return n},adapters:f}}),o.register("at5cb",function(r,n){t(r.exports,"default",()=>E);var i=o("gKvUL"),a=o("kk0E9"),s=o("8JRzs"),u=o("cbIsf"),f=o("7GD7a"),l=o("889er"),c=o("6YCMk"),d=o("6HVMZ"),h=o("dIGMp"),p=o("32jg5"),g=o("44xkq"),y=o("bxxyx"),m=o("6paAk");function b(t,r){let n=0,i=(0,m.default)(50,250);return o=>{let a=o.loaded,s=o.lengthComputable?o.total:void 0,u=a-n,f=i(u),l=a<=s;n=a;let c={loaded:a,total:s,progress:s?a/s:void 0,bytes:u,rate:f||void 0,estimated:f&&s&&l?(s-a)/f:void 0,event:o};c[r?"download":"upload"]=!0,t(c)}}let w="undefined"!=typeof XMLHttpRequest;var E=w&&function(t){return new Promise(function(r,n){let o,m=t.data,w=(0,y.default).from(t.headers).normalize(),E=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}(0,i.default).isFormData(m)&&(g.default.isStandardBrowserEnv||g.default.isStandardBrowserWebWorkerEnv?w.setContentType(!1):w.setContentType("multipart/form-data;",!1));let A=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let r=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";w.set("Authorization","Basic "+btoa(r+":"+n))}let O=(0,f.default)(t.baseURL,t.url);function x(){if(!A)return;// Prepare the response
let i=(0,y.default).from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),o=E&&"text"!==E&&"json"!==E?A.response:A.responseText,s={data:o,status:A.status,statusText:A.statusText,headers:i,config:t,request:A};(0,a.default)(function(t){r(t),v()},function(t){n(t),v()},s),// Clean up request
A=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(A.open(t.method.toUpperCase(),(0,u.default)(O,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
A.timeout=t.timeout,"onloadend"in A?A.onloadend=x:A.onreadystatechange=function(){A&&4===A.readyState&&(0!==A.status||A.responseURL&&0===A.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(x)},// Handle browser request cancellation (as opposed to a manual cancellation)
A.onabort=function(){A&&(n(new d.default("Request aborted",d.default.ECONNABORTED,t,A)),// Clean up request
A=null)},// Handle low level network errors
A.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new d.default("Network Error",d.default.ERR_NETWORK,t,A)),// Clean up request
A=null},// Handle timeout
A.ontimeout=function(){let r=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",i=t.transitional||c.default;t.timeoutErrorMessage&&(r=t.timeoutErrorMessage),n(new d.default(r,i.clarifyTimeoutError?d.default.ETIMEDOUT:d.default.ECONNABORTED,t,A)),// Clean up request
A=null},g.default.isStandardBrowserEnv){// Add xsrf header
let r=(t.withCredentials||(0,l.default)(O))&&t.xsrfCookieName&&(0,s.default).read(t.xsrfCookieName);r&&w.set(t.xsrfHeaderName,r)}// Remove Content-Type if data is undefined
void 0===m&&w.setContentType(null),"setRequestHeader"in A&&(0,i.default).forEach(w.toJSON(),function(t,r){A.setRequestHeader(r,t)}),(0,i.default).isUndefined(t.withCredentials)||(A.withCredentials=!!t.withCredentials),E&&"json"!==E&&(A.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&A.addEventListener("progress",b(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&A.upload&&A.upload.addEventListener("progress",b(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=r=>{A&&(n(!r||r.type?new h.default(null,t,A):r),A.abort(),A=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));let R=(0,p.default)(O);if(R&&-1===(0,g.default).protocols.indexOf(R)){n(new d.default("Unsupported protocol "+R+":",d.default.ERR_BAD_REQUEST,t));return}// Send the request
A.send(m||null)})}}),o.register("kk0E9",function(r,n){t(r.exports,"default",()=>a);var i=o("6HVMZ");function a(t,r,n){let o=n.config.validateStatus;!n.status||!o||o(n.status)?t(n):r(new i.default("Request failed with status code "+n.status,[i.default.ERR_BAD_REQUEST,i.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}}),o.register("8JRzs",function(r,n){t(r.exports,"default",()=>a);var i=o("gKvUL"),a=o("44xkq").default.isStandardBrowserEnv?{write:function(t,r,n,o,a,s){let u=[];u.push(t+"="+encodeURIComponent(r)),(0,i.default).isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),(0,i.default).isString(o)&&u.push("path="+o),(0,i.default).isString(a)&&u.push("domain="+a),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){let r=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),o.register("7GD7a",function(r,n){t(r.exports,"default",()=>s);var i=o("ckHwb"),a=o("fE4ul");function s(t,r){return t&&!(0,i.default)(r)?(0,a.default)(t,r):r}}),o.register("ckHwb",function(r,n){t(r.exports,"default",()=>i);function i(t){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}}),o.register("fE4ul",function(r,n){t(r.exports,"default",()=>i);function i(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t}}),o.register("889er",function(r,n){t(r.exports,"default",()=>a);var i=o("gKvUL"),a=o("44xkq").default.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function o(t){let i=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return r&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=o(window.location.href),function(r){let n=(0,i.default).isString(r)?o(r):r;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}}),o.register("32jg5",function(r,n){t(r.exports,"default",()=>i);function i(t){let r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}}),o.register("6paAk",function(r,n){t(r.exports,"default",()=>i);var i=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,r){let n;t=t||10;let i=Array(t),o=Array(t),a=0,s=0;return r=void 0!==r?r:1e3,function(u){let f=Date.now(),l=o[s];n||(n=f),i[a]=u,o[a]=f;let c=s,d=0;for(;c!==a;)d+=i[c++],c%=t;if((a=(a+1)%t)===s&&(s=(s+1)%t),f-n<r)return;let h=l&&f-l;return h?Math.round(1e3*d/h):void 0}}}),o.register("lk5EI",function(r,n){t(r.exports,"default",()=>u);var i=o("gKvUL"),a=o("bxxyx");let s=t=>t instanceof a.default?t.toJSON():t;function u(t,r){// eslint-disable-next-line no-param-reassign
r=r||{};let n={};function o(t,r,n){return(0,i.default).isPlainObject(t)&&(0,i.default).isPlainObject(r)?(0,i.default).merge.call({caseless:n},t,r):(0,i.default).isPlainObject(r)?(0,i.default).merge({},r):(0,i.default).isArray(r)?r.slice():r}// eslint-disable-next-line consistent-return
function a(t,r,n){return(0,i.default).isUndefined(r)?(0,i.default).isUndefined(t)?void 0:o(void 0,t,n):o(t,r,n)}// eslint-disable-next-line consistent-return
function u(t,r){if(!(0,i.default).isUndefined(r))return o(void 0,r)}// eslint-disable-next-line consistent-return
function f(t,r){return(0,i.default).isUndefined(r)?(0,i.default).isUndefined(t)?void 0:o(void 0,t):o(void 0,r)}// eslint-disable-next-line consistent-return
function l(n,i,a){return a in r?o(n,i):a in t?o(void 0,n):void 0}let c={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:l,headers:(t,r)=>a(s(t),s(r),!0)};return(0,i.default).forEach(Object.keys(Object.assign({},t,r)),function(o){let s=c[o]||a,u=s(t[o],r[o],o);(0,i.default).isUndefined(u)&&s!==l||(n[o]=u)}),n}}),o.register("bv3QM",function(r,n){t(r.exports,"default",()=>f);var i=o("35BUy"),a=o("6HVMZ");let s={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,r)=>{s[t]=function(n){return typeof n===t||"a"+(r<1?"n ":" ")+t}});let u={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */s.transitional=function(t,r,n){function o(t,r){return"[Axios v"+i.VERSION+"] Transitional option '"+t+"'"+r+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,i,s)=>{if(!1===t)throw new a.default(o(i," has been removed"+(r?" in "+r:"")),a.default.ERR_DEPRECATED);return r&&!u[i]&&(u[i]=!0,// eslint-disable-next-line no-console
console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),!t||t(n,i,s)}};var f={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,r,n){if("object"!=typeof t)throw new a.default("options must be an object",a.default.ERR_BAD_OPTION_VALUE);let i=Object.keys(t),o=i.length;for(;o-- >0;){let s=i[o],u=r[s];if(u){let r=t[s],n=void 0===r||u(r,s,t);if(!0!==n)throw new a.default("option "+s+" must be "+n,a.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new a.default("Unknown option "+s,a.default.ERR_BAD_OPTION)}},validators:s}}),o.register("35BUy",function(r,n){t(r.exports,"VERSION",()=>i);let i="1.4.0"}),o.register("lAKPy",function(r,n){t(r.exports,"default",()=>s);var i=o("dIGMp");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class a{constructor(t){let r;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){r=t});let n=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!n._listeners)return;let r=n._listeners.length;for(;r-- >0;)n._listeners[r](t);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let r;// eslint-disable-next-line func-names
let i=new Promise(t=>{n.subscribe(t),r=t}).then(t);return i.cancel=function(){n.unsubscribe(r)},i},t(function(t,o,a){n.reason||(n.reason=new i.default(t,o,a),r(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);-1!==r&&this._listeners.splice(r,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let r=new a(function(r){t=r});return{token:r,cancel:t}}}var s=a}),o.register("JEeti",function(r,n){t(r.exports,"default",()=>i);function i(t){return function(r){return t.apply(null,r)}}}),o.register("dxy9O",function(r,n){t(r.exports,"default",()=>a);var i=o("gKvUL");function a(t){return(0,i.default).isObject(t)&&!0===t.isAxiosError}}),o.register("lnWCo",function(r,n){t(r.exports,"default",()=>o);let i={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(i).forEach(([t,r])=>{i[r]=t});var o=i}),o.register("6o7gM",function(r,n){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",()=>f);var i=o("6kfMw");let a=new i.default,s=document.querySelector("[data-modal-recipe]"),u=document.querySelector(".modal-recipe");var f={open:function(t){if(null!==t)try{let r;a.getRecipeById(t).then(t=>{r=t,console.log("Recipe Info:",r),function(t){let r=u.querySelector(".recipe-image"),n=u.querySelector(".selected-recipe-name");u.querySelector(".tags");let i=u.querySelector(".modal-rating-number-recipe"),a=u.querySelector(".cooking-time"),s=u.querySelector(".ingredients"),f=u.querySelector(".instruction-wrap"),l=u.querySelector(".btn-favorite");// const recipeInstruction = modalRecipe.querySelector('.recipe-instruction');
//--------------------
r.src=t.preview,n.textContent=t.title;//-----------------------------------
let c=u.querySelector(".youtube-link");c.href=t.youtube;// Populate tags (assuming recipe has tags property)
// Select the appropriate tags element based on screen width
let d=document.querySelector(".tags-1"),h=document.querySelector(".tags-2");if(t.tags&&t.tags.length>0&&""!==t.tags[0]){let r=t.tags.map(t=>`<li class="tag-item"><button class="btn-tag" type="button">#${t}</button></li>`).join("");d.insertAdjacentHTML("beforeend",r),h.insertAdjacentHTML("beforeend",r)}if(t.rating&&(i.textContent=t.rating.toFixed(1)),t.time&&(a.textContent=`${t.time} min`),t.ingredients&&t.ingredients.length>0&&(s.innerHTML=t.ingredients.map(t=>`
<li class="ingredient-item">
${t.name}<span class="ingredient-amount">${t.measure}</span>
</li>
`).join("")),f.innerHTML="",t.instructions&&t.instructions.split("\n").forEach(t=>{let r=document.createElement("p");r.innerText=t,r.classList.add("recipe-instruction"),f.appendChild(r)}),t.rating){i.textContent=t.rating.toFixed(1);let r=u.querySelector(".stars"),n=Math.round(t.rating);for(let t=1;t<=5;t++){let i=r.querySelector(`[data-rating="${t}"]`);t<=n?i.classList.add("star-filled"):i.classList.remove("star-filled")}}l.dataset.recipeId=t._id,l.addEventListener("click",function(t){t.preventDefault(),//let btn = e.target.closest('.btn-favorite');
o("2JNBJ").default.togleFav(t.target.dataset.recipeId);//btn.innerText = favApi.togleFav(e.target.dataset.recipeId) ? 'In Favorites' : 'Add to Favorites';
})}(r),s.classList.remove("is-hidden"),window.addEventListener("keydown",t=>{"Escape"===t.code&&l()})})}catch(t){console.error("Error fetching recipe:",t)}else console.error("Can't get 'data-recipe-id' from: "+e.target)}};function l(){s.classList.add("is-hidden"),window.removeEventListener("keydown",t=>{"Escape"===t.code&&l()})}u.querySelector("[data-modal-recipe-close]").addEventListener("click",l),s.addEventListener("click",t=>{t.target===s&&l()})}),o.register("6kfMw",function(r,n){t(r.exports,"default",()=>s),o("fmRoT");var i=o("7we3r");let a="https://tasty-treats-backend.p.goit.global/api";class s{constructor(){this.params={},this.params.category="",this.params.limit="",this.params.title="",this.params.ingredient="",this.params.area="",this.params.time="",this.params.page=1}async getCategories(){let t=await (0,i.default).get(`${a}/categories`);return t.data}setCategory(t){this.params.category=t}setPerPage(t){this.params.limit=t}setSearchText(t){this.params.title=t}setSearchIngredient(t){this.params.ingredient=t}setSearchArea(t){this.params.area=t}async getRecipes(){let t=await (0,i.default).get(`${a}/recipes`,{params:this.params});return t.data}async getAreas(){let t=await (0,i.default).get(`${a}/areas`);return console.log(t.data),t.data}async getIngredients(){let t=await (0,i.default).get(`${a}/ingredients`);return console.log(t.data),t.data}setSearchTime(t){this.params.time=t}setPage(t){this.params.page=Number(t)}async getRecipeById(t){let r=await (0,i.default).get(`${a}/recipes/${t}`);return r.data}setResetFilters(){this.params={},this.params.category="",this.params.limit="",this.params.title="",this.params.ingredient="",this.params.area="",this.params.time="",this.params.page=1,console.log(this.params)}}}),o.register("2JNBJ",function(r,n){t(r.exports,"default",()=>f);var i=o("5L674");let a=new(o("6kfMw")).default,s="favorites";function u(){return(0,i.default).load(s)||{}}var f={getLs:u,checkFav:function(t){return(console.log(t),t in u())?(console.log(`Id ${t} in Favorites`),!0):(console.log(`Id ${t} not in Favorites`),!1)},togleFav:function(t){console.log(t);let r=u();return t in r?(delete r[t],(0,i.default).save(s,r),console.log("Remove from favorites"),0):(a.getRecipeById(t).then(n=>{console.log(n),r[t]=n,(0,i.default).save(s,r),console.log("Add to favorites")}),console.log(r),1)}}}),o.register("5L674",function(r,n){t(r.exports,"default",()=>i);var i={save:(t,r)=>{try{let n=JSON.stringify(r);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},load:t=>{try{let r=localStorage.getItem(t);return null===r?void 0:JSON.parse(r)}catch(t){console.error("Get state error: ",t.message)}},remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove item error: ",t.message)}}}});//# sourceMappingURL=favorites.c9c95a0e.js.map

//# sourceMappingURL=favorites.c9c95a0e.js.map
