function t(t,r,a,i){Object.defineProperty(t,r,{get:a,set:i,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=r.parcelRequire78be;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in i){var r=i[t];delete i[t];var n={id:t,exports:{}};return a[t]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,r){i[t]=r},r.parcelRequire78be=n),n.register("6kfMw",function(r,a){t(r.exports,"default",()=>s);var i=n("fmRoT");let o="https://tasty-treats-backend.p.goit.global/api";class s{constructor(){this.params={},this.params.category="",this.params.limit="",this.params.title="",this.params.ingredient="",this.params.area="",this.params.time="",this.params.page=1}async getCategories(){let t=await (0,i.default).get(`${o}/categories`);return t.data}setCategory(t){this.params.category=t}setPerPage(t){this.params.limit=t}setSearchText(t){this.params.title=t}setSearchIngredient(t){this.params.ingredient=t}setSearchArea(t){this.params.area=t}async getRecipes(){let t=await (0,i.default).get(`${o}/recipes`,{params:this.params});return t.data}async getAreas(){let t=await (0,i.default).get(`${o}/areas`);return console.log(t.data),t.data}async getIngredients(){let t=await (0,i.default).get(`${o}/ingredients`);return console.log(t.data),t.data}setSearchTime(t){this.params.time=t}setPage(t){this.params.page=Number(t)}async getRecipeById(t){let r=await (0,i.default).get(`${o}/recipes/${t}`);return r.data}setResetFilters(){this.params={},this.params.category="",this.params.limit="",this.params.title="",this.params.ingredient="",this.params.area="",this.params.time="",this.params.page=1,console.log(this.params)}}}),n.register("2JNBJ",function(r,a){t(r.exports,"default",()=>c);var i=n("5L674");let o=new(n("6kfMw")).default,s="favorites";function l(){return(0,i.default).load(s)||{}}var c={getLs:l,checkFav:function(t){return(console.log(t),t in l())?(console.log(`Id ${t} in Favorites`),!0):(console.log(`Id ${t} not in Favorites`),!1)},togleFav:function(t){console.log(t);let r=l();return t in r?(delete r[t],(0,i.default).save(s,r),console.log("Remove from favorites"),0):(o.getRecipeById(t).then(a=>{console.log(a),r[t]=a,(0,i.default).save(s,r),console.log("Add to favorites")}),console.log(r),1)}}}),n.register("5L674",function(r,a){t(r.exports,"default",()=>i);var i={save:(t,r)=>{try{let a=JSON.stringify(r);localStorage.setItem(t,a)}catch(t){console.error("Set state error: ",t.message)}},load:t=>{try{let r=localStorage.getItem(t);return null===r?void 0:JSON.parse(r)}catch(t){console.error("Get state error: ",t.message)}},remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove item error: ",t.message)}}}}),n.register("eMXxl",function(t,a){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var i="Expected a function",n=0/0,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof r&&r&&r.Object===Object&&r,f="object"==typeof self&&self&&self.Object===Object&&self,g=d||f||Function("return this")(),p=Object.prototype.toString,m=Math.max,v=Math.min,y=function(){return g.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function h(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function b(t){if("number"==typeof t)return t;if("symbol"==typeof(r=t)||r&&"object"==typeof r&&"[object Symbol]"==p.call(r))return n;if(h(t)){var r,a="function"==typeof t.valueOf?t.valueOf():t;t=h(a)?a+"":a}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=l.test(t);return i||c.test(t)?u(t.slice(2),i?2:8):s.test(t)?n:+t}t.exports=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(t,r,a){var n=!0,o=!0;if("function"!=typeof t)throw TypeError(i);return h(a)&&(n="leading"in a?!!a.leading:n,o="trailing"in a?!!a.trailing:o),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(t,r,a){var n,o,s,l,c,u,d=0,f=!1,g=!1,p=!0;if("function"!=typeof t)throw TypeError(i);function S(r){var a=n,i=o;return n=o=void 0,d=r,l=t.apply(i,a)}function w(t){var a=t-u,i=t-d;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===u||a>=r||a<0||g&&i>=s}function x(){var t,a,i,n=y();if(w(n))return T(n);// Restart the timer.
c=setTimeout(x,(t=n-u,a=n-d,i=r-t,g?v(i,s-a):i))}function T(t){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(c=void 0,p&&n)?S(t):(n=o=void 0,l))}function q(){var t,a=y(),i=w(a);if(n=arguments,o=this,u=a,i){if(void 0===c)return(// Reset any `maxWait` timer.
d=t=u,// Start the timer for the trailing edge.
c=setTimeout(x,r),f?S(t):l);if(g)return(// Handle invocations in a tight loop.
c=setTimeout(x,r),S(u))}return void 0===c&&(c=setTimeout(x,r)),l}return r=b(r)||0,h(a)&&(f=!!a.leading,s=(g="maxWait"in a)?m(b(a.maxWait)||0,r):s,p="trailing"in a?!!a.trailing:p),q.cancel=function(){void 0!==c&&clearTimeout(c),d=0,n=u=o=c=void 0},q.flush=function(){return void 0===c?l:T(y())},q}(t,r,{leading:n,maxWait:r,trailing:o})}}),n.register("6o7gM",function(r,a){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",()=>c);var i=n("6kfMw");let o=new i.default,s=document.querySelector("[data-modal-recipe]"),l=document.querySelector(".modal-recipe");var c={open:function(t){if(null!==t)try{let r;o.getRecipeById(t).then(t=>{r=t,console.log("Recipe Info:",r),function(t){let r=l.querySelector(".recipe-image"),a=l.querySelector(".selected-recipe-name");l.querySelector(".tags");let i=l.querySelector(".modal-rating-number-recipe"),o=l.querySelector(".cooking-time"),s=l.querySelector(".ingredients"),c=l.querySelector(".instruction-wrap"),u=l.querySelector(".btn-favorite");// const recipeInstruction = modalRecipe.querySelector('.recipe-instruction');
//--------------------
r.src=t.preview,a.textContent=t.title;//-----------------------------------
let d=l.querySelector(".youtube-link");d.href=t.youtube;// Populate tags (assuming recipe has tags property)
// Select the appropriate tags element based on screen width
let f=document.querySelector(".tags-1"),g=document.querySelector(".tags-2");if(t.tags&&t.tags.length>0&&""!==t.tags[0]){let r=t.tags.map(t=>`<li class="tag-item"><button class="btn-tag" type="button">#${t}</button></li>`).join("");f.insertAdjacentHTML("beforeend",r),g.insertAdjacentHTML("beforeend",r)}if(t.rating&&(i.textContent=t.rating.toFixed(1)),t.time&&(o.textContent=`${t.time} min`),t.ingredients&&t.ingredients.length>0&&(s.innerHTML=t.ingredients.map(t=>`
<li class="ingredient-item">
${t.name}<span class="ingredient-amount">${t.measure}</span>
</li>
`).join("")),c.innerHTML="",t.instructions&&t.instructions.split("\n").forEach(t=>{let r=document.createElement("p");r.innerText=t,r.classList.add("recipe-instruction"),c.appendChild(r)}),t.rating){i.textContent=t.rating.toFixed(1);let r=l.querySelector(".stars"),a=Math.round(t.rating);for(let t=1;t<=5;t++){let i=r.querySelector(`[data-rating="${t}"]`);t<=a?i.classList.add("star-filled"):i.classList.remove("star-filled")}}u.dataset.recipeId=t._id,u.addEventListener("click",function(t){console.log("Try to add to favorites"),t.preventDefault();let r=n("2JNBJ").default;r.togleFav(t.target.dataset.recipeId),r.checkFav(t.target.dataset.recipeId)&&t.target.value("Remove from Favorites")})}(r),s.classList.remove("is-hidden"),window.addEventListener("keydown",t=>{"Escape"===t.code&&u()})})}catch(t){console.error("Error fetching recipe:",t)}else console.error("Can't get 'data-recipe-id' from: "+e.target)}};function u(){s.classList.add("is-hidden"),window.removeEventListener("keydown",t=>{"Escape"===t.code&&u()})}l.querySelector("[data-modal-recipe-close]").addEventListener("click",u),s.addEventListener("click",t=>{t.target===s&&u()})});//# sourceMappingURL=favorites.360cd62e.js.map

//# sourceMappingURL=favorites.360cd62e.js.map
