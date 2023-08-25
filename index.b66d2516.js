var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire78be;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire78be=i);var a=i("6kfMw"),o=i("2JNBJ"),r={},l=0/0,C=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,f=p||g||Function("return this")(),v=Object.prototype.toString,h=Math.max,m=Math.min,b=function(){return f.Date.now()};/**
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
 */function w(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
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
 */function L(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return l;if(w(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(C,"");var i=c.test(e);return i||d.test(e)?u(e.slice(2),i?2:8):s.test(e)?l:+e}r=/**
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
 */function(e,t,n){var i,a,o,r,l,C,s=0,c=!1,d=!1,u=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var n=i,o=a;return i=a=void 0,s=t,r=e.apply(o,n)}function g(e){var n=e-C,i=e-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===C||n>=t||n<0||d&&i>=o}function f(){var e,n,i,a=b();if(g(a))return v(a);// Restart the timer.
l=setTimeout(f,(e=a-C,n=a-s,i=t-e,d?m(i,o-n):i))}function v(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=void 0,u&&i)?p(e):(i=a=void 0,r))}function y(){var e,n=b(),o=g(n);if(i=arguments,a=this,C=n,o){if(void 0===l)return(// Reset any `maxWait` timer.
s=e=C,// Start the timer for the trailing edge.
l=setTimeout(f,t),c?p(e):r);if(d)return(// Handle invocations in a tight loop.
l=setTimeout(f,t),p(C))}return void 0===l&&(l=setTimeout(f,t)),r}return t=L(t)||0,w(n)&&(c=!!n.leading,o=(d="maxWait"in n)?h(L(n.maxWait)||0,t):o,u="trailing"in n?!!n.trailing:u),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=C=a=l=void 0},y.flush=function(){return void 0===l?r:v(b())},y};var y={},M="Expected a function",T=0/0,x=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,F=/^0o[0-7]+$/i,H=parseInt,S="object"==typeof e&&e&&e.Object===Object&&e,j="object"==typeof self&&self&&self.Object===Object&&self,O=S||j||Function("return this")(),q=Object.prototype.toString,k=Math.max,Z=Math.min,B=function(){return O.Date.now()};/**
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
 */function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
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
 */function N(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==q.call(t))return T;if(_(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=_(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(x,"");var i=$.test(e);return i||F.test(e)?H(e.slice(2),i?2:8):E.test(e)?T:+e}y=/**
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
 */function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(M);return _(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),/**
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
 */function(e,t,n){var i,a,o,r,l,C,s=0,c=!1,d=!1,u=!0;if("function"!=typeof e)throw TypeError(M);function p(t){var n=i,o=a;return i=a=void 0,s=t,r=e.apply(o,n)}function g(e){var n=e-C,i=e-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===C||n>=t||n<0||d&&i>=o}function f(){var e,n,i,a=B();if(g(a))return v(a);// Restart the timer.
l=setTimeout(f,(e=a-C,n=a-s,i=t-e,d?Z(i,o-n):i))}function v(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=void 0,u&&i)?p(e):(i=a=void 0,r))}function h(){var e,n=B(),o=g(n);if(i=arguments,a=this,C=n,o){if(void 0===l)return(// Reset any `maxWait` timer.
s=e=C,// Start the timer for the trailing edge.
l=setTimeout(f,t),c?p(e):r);if(d)return(// Handle invocations in a tight loop.
l=setTimeout(f,t),p(C))}return void 0===l&&(l=setTimeout(f,t)),r}return t=N(t)||0,_(n)&&(c=!!n.leading,o=(d="maxWait"in n)?k(N(n.maxWait)||0,t):o,u="trailing"in n?!!n.trailing:u),h.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=C=a=l=void 0},h.flush=function(){return void 0===l?r:v(B())},h}(e,t,{leading:i,maxWait:t,trailing:a})};const P=new a.default,W=document.querySelector(".category-list"),A=document.querySelector(".list-item"),R=document.querySelector(".filter-input"),D=document.querySelector(".area"),I=document.querySelector(".ingrediends"),U=document.querySelector(".time"),z=document.querySelector(".all-category-btn"),J=document.querySelector(".reset-filters");J.addEventListener("click",e=>{document.querySelector(".form-filters").reset(),P.setResetFilters(),Q()});for(let e=0;e<=120;e+=5){let t=document.createElement("option");t.value=e||"",t.innerHTML=e+" min",U.appendChild(t)}// triggers
R.addEventListener("input",r(function(e){console.log(e.target.value.trim()),P.setSearchText(e.target.value.trim()),Q()},300)),I.addEventListener("change",function(e){console.log(e.target.value),P.setSearchIngredient(e.target.value),Q()}),D.addEventListener("change",function(e){console.log(e.target.selectedOptions[0].dataset.param),P.setSearchArea(e.target.selectedOptions[0].dataset.param),Q()}),W.addEventListener("click",function(e){W.querySelectorAll(".category-btn").forEach(e=>{e.classList.remove("active-button")}),e.target.classList.add("active-button"),console.log(e.target.dataset.recipeCategory),P.setCategory(e.target.dataset.recipeCategory),Q()}),U.addEventListener("change",function(e){console.log(e.target.value),P.setSearchTime(e.target.value),Q()}),z.addEventListener("click",function(){P.setCategory(""),Q()}),//ОТРИМУЄМО СПИСОК КАТЕГОРІЙ ПРИ ЗАВАНТАЖЕНІ СТОРІНКИ
P.getCategories().then(e=>{e.forEach(e=>{W.innerHTML+=`<li class="category-item-list"><button class="category-btn" data-recipe-category="${e.name}">${e.name}</button></li>`})}),//ОТРИМУЄМО СПИСОК КРАЇН
P.getAreas().then(e=>{let t=document.createElement("option");t.value="",t.innerHTML="Region",t.dataset.param="",D.appendChild(t),e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,D.appendChild(t)})}),//ОТРИМУЄМО СПИСОК ІНГРІДІЄНТІВ
P.getIngredients().then(e=>{let t=document.createElement("option");t.value="",t.innerHTML="Product",I.appendChild(t),e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,I.appendChild(t)})}),window.onresize=y(function(){Q()},500),//ОТРИМУЄМО СПИСОК РЕЦЕПТІВ ПРИ ЗАВАНТАЖЕНІ СТОРІНКИ
Q();const G=`
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
        d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234
        5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912
        17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629
        19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219
        19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961
        13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434
        2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,K=`
<svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path opacity="1" fill-rule="evenodd" clip-rule="evenodd"
        d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234
        5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912
        17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629
        19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219
        19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961
        13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434
        2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;function Q(){window.innerWidth<768?P.setPerPage(6):window.innerWidth<1280?P.setPerPage(8):P.setPerPage(9);let e=(0,o.default).getLs();P.getRecipes().then(t=>{A.innerHTML="",t.results.forEach(t=>{let n=t._id in e?K:G,i=document.createElement("li");i.className="item-cards",i.innerHTML=`
                <div class="shadow-on-img" data-recipe-id="${t._id}">
                    <img class="card-img" src="${t.preview}" />
                </div>
                <button class="add-fav-btn" data-recipe-id="${t._id}">
                    ${n}
                </button>
                <span class="span-title" data-recipe-id="${t._id}">
                    ${t.title.toUpperCase()}
                </span>
                <span class="span-descr" data-recipe-id="${t._id}">
                    ${t.description}
                </span>
                <button class="main-see-recipe" data-recipe-id="${t._id}">
                    See recipe
                </button>
            `,i.appendChild(// functions
function(e){let t=`
        <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
    `,n=document.createElement("div"),i=(Math.round(10*e)/10).toFixed(1);n.className="rating-recipe",n.innerHTML=`<span class="rating-number-recipe">${i}</span>`;let a=document.createElement("ul");a.className="stars";for(let n=1;n<=5;n++){let i=document.createElement("li");n<=e?i.innerHTML=`
                <svg class="star star-filled" viewBox="0 0 34 32" data-rating="${n}" width="16" height="16">
                    ${t}
                </svg>            
            `:i.innerHTML=`
                <svg class="star" viewBox="0 0 34 32" data-rating="${n}" width="16" height="16">
                    ${t}
                </svg>            
            `,a.appendChild(i)}return n.appendChild(a),n}(t.rating)),A.appendChild(i)}),A.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){let t=e.target.closest("button"),n=(0,o.default).togleFav(t.getAttribute("data-recipe-id"));console.log("Result: "+n),n?t.innerHTML=K:t.innerHTML=G})}),A.querySelectorAll(".main-see-recipe").forEach(e=>{let t=i("6o7gM");e.addEventListener("click",e=>{t.default.open(e.target.dataset.recipeId)})});let n=document.querySelector(".pagination");// Пагінація*************************************************************************************
(function(e,t,n,i){e=Number(e),t=Number(t);let a=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(// inactive prev b
n.innerHTML+=`
                <button class="main-pag-btn" disabled>
                    <svg width="32" height="32" viewBox="1 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5999 12.7101C10.5061 12.6171 10.4317 12.5065 10.381 12.3847C10.3302 12.2628 10.3041 12.1321 10.3041 12.0001C10.3041 11.8681 10.3302 11.7374 10.381 11.6155C10.4317 11.4936 10.5061 11.383 10.5999 11.2901L15.1899 6.71006C15.2836 6.6171 15.358 6.5065 15.4088 6.38464C15.4595 6.26278 15.4857 6.13207 15.4857 6.00006C15.4857 5.86805 15.4595 5.73734 15.4088 5.61548C15.358 5.49362 15.2836 5.38302 15.1899 5.29006C15.0025 5.10381 14.749 4.99927 14.4849 4.99927C14.2207 4.99927 13.9672 5.10381 13.7799 5.29006L9.18986 9.88007C8.62806 10.4426 8.3125 11.2051 8.3125 12.0001C8.3125 12.7951 8.62806 13.5576 9.18986 14.1201L13.7799 18.7101C13.9661 18.8948 14.2175 18.999 14.4799 19.0001C14.6115 19.0008 14.7419 18.9756 14.8638 18.9259C14.9856 18.8761 15.0964 18.8028 15.1899 18.7101C15.2836 18.6171 15.358 18.5065 15.4088 18.3847C15.4595 18.2628 15.4857 18.1321 15.4857 18.0001C15.4857 17.8681 15.4595 17.7374 15.4088 17.6155C15.358 17.4936 15.2836 17.383 15.1899 17.2901L10.5999 12.7101Z" fill="#F8F8F8" fill-opacity="0.5"/>
                        <path d="M17.5999 12.7101C17.5061 12.6171 17.4317 12.5065 17.381 12.3847C17.3302 12.2628 17.3041 12.1321 17.3041 12.0001C17.3041 11.8681 17.3302 11.7374 17.381 11.6155C17.4317 11.4936 17.5061 11.383 17.5999 11.2901L22.1899 6.71006C22.2836 6.6171 22.358 6.5065 22.4088 6.38464C22.4595 6.26278 22.4857 6.13207 22.4857 6.00006C22.4857 5.86805 22.4595 5.73734 22.4088 5.61548C22.358 5.49362 22.2836 5.38302 22.1899 5.29006C22.0025 5.10381 21.749 4.99927 21.4849 4.99927C21.2207 4.99927 20.9672 5.10381 20.7799 5.29006L16.1899 9.88007C15.6281 10.4426 15.3125 11.2051 15.3125 12.0001C15.3125 12.7951 15.6281 13.5576 16.1899 14.1201L20.7799 18.7101C20.9661 18.8948 21.2175 18.999 21.4799 19.0001C21.6115 19.0008 21.7419 18.9756 21.8638 18.9259C21.9856 18.8761 22.0964 18.8028 22.1899 18.7101C22.2836 18.6171 22.358 18.5065 22.4088 18.3847C22.4595 18.2628 22.4857 18.1321 22.4857 18.0001C22.4857 17.8681 22.4595 17.7374 22.4088 17.6155C22.358 17.4936 22.2836 17.383 22.1899 17.2901L17.5999 12.7101Z" fill="#F8F8F8" fill-opacity="0.5"/>
                    </svg>
                </button>
                `,n.innerHTML+=`
            <button class="main-pag-btn" disabled>
                <svg width="32" height="32" viewBox="-2 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5999 12.7101C10.5061 12.6171 10.4317 12.5065 10.381 12.3847C10.3302 12.2628 10.3041 12.1321 10.3041 12.0001C10.3041 11.8681 10.3302 11.7374 10.381 11.6155C10.4317 11.4936 10.5061 11.383 10.5999 11.2901L15.1899 6.71006C15.2836 6.6171 15.358 6.5065 15.4088 6.38464C15.4595 6.26278 15.4857 6.13207 15.4857 6.00006C15.4857 5.86805 15.4595 5.73734 15.4088 5.61548C15.358 5.49362 15.2836 5.38302 15.1899 5.29006C15.0025 5.10381 14.749 4.99927 14.4849 4.99927C14.2207 4.99927 13.9672 5.10381 13.7799 5.29006L9.18986 9.88007C8.62806 10.4426 8.3125 11.2051 8.3125 12.0001C8.3125 12.7951 8.62806 13.5576 9.18986 14.1201L13.7799 18.7101C13.9661 18.8948 14.2175 18.999 14.4799 19.0001C14.6115 19.0008 14.7419 18.9756 14.8638 18.9259C14.9856 18.8761 15.0964 18.8028 15.1899 18.7101C15.2836 18.6171 15.358 18.5065 15.4088 18.3847C15.4595 18.2628 15.4857 18.1321 15.4857 18.0001C15.4857 17.8681 15.4595 17.7374 15.4088 17.6155C15.358 17.4936 15.2836 17.383 15.1899 17.2901L10.5999 12.7101Z" fill="#F8F8F8" fill-opacity="0.5"/>
                </svg>
            </button>`):(// active prev b
n.innerHTML+=`
            <button class="main-pag-btn main-pag-btn-green" data-topage="1">
                <svg width="32" height="32" viewBox="1 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5999 12.7101C10.5061 12.6171 10.4317 12.5065 10.381 12.3847C10.3302 12.2628 10.3041 12.1321 10.3041 12.0001C10.3041 11.8681 10.3302 11.7374 10.381 11.6155C10.4317 11.4936 10.5061 11.383 10.5999 11.2901L15.1899 6.71006C15.2836 6.6171 15.358 6.5065 15.4088 6.38464C15.4595 6.26278 15.4857 6.13207 15.4857 6.00006C15.4857 5.86805 15.4595 5.73734 15.4088 5.61548C15.358 5.49362 15.2836 5.38302 15.1899 5.29006C15.0025 5.10381 14.749 4.99927 14.4849 4.99927C14.2207 4.99927 13.9672 5.10381 13.7799 5.29006L9.18986 9.88007C8.62806 10.4426 8.3125 11.2051 8.3125 12.0001C8.3125 12.7951 8.62806 13.5576 9.18986 14.1201L13.7799 18.7101C13.9661 18.8948 14.2175 18.999 14.4799 19.0001C14.6115 19.0008 14.7419 18.9756 14.8638 18.9259C14.9856 18.8761 15.0964 18.8028 15.1899 18.7101C15.2836 18.6171 15.358 18.5065 15.4088 18.3847C15.4595 18.2628 15.4857 18.1321 15.4857 18.0001C15.4857 17.8681 15.4595 17.7374 15.4088 17.6155C15.358 17.4936 15.2836 17.383 15.1899 17.2901L10.5999 12.7101Z" fill="#F8F8F8" fill-opacity="0.5"/>
                    <path d="M17.5999 12.7101C17.5061 12.6171 17.4317 12.5065 17.381 12.3847C17.3302 12.2628 17.3041 12.1321 17.3041 12.0001C17.3041 11.8681 17.3302 11.7374 17.381 11.6155C17.4317 11.4936 17.5061 11.383 17.5999 11.2901L22.1899 6.71006C22.2836 6.6171 22.358 6.5065 22.4088 6.38464C22.4595 6.26278 22.4857 6.13207 22.4857 6.00006C22.4857 5.86805 22.4595 5.73734 22.4088 5.61548C22.358 5.49362 22.2836 5.38302 22.1899 5.29006C22.0025 5.10381 21.749 4.99927 21.4849 4.99927C21.2207 4.99927 20.9672 5.10381 20.7799 5.29006L16.1899 9.88007C15.6281 10.4426 15.3125 11.2051 15.3125 12.0001C15.3125 12.7951 15.6281 13.5576 16.1899 14.1201L20.7799 18.7101C20.9661 18.8948 21.2175 18.999 21.4799 19.0001C21.6115 19.0008 21.7419 18.9756 21.8638 18.9259C21.9856 18.8761 22.0964 18.8028 22.1899 18.7101C22.2836 18.6171 22.358 18.5065 22.4088 18.3847C22.4595 18.2628 22.4857 18.1321 22.4857 18.0001C22.4857 17.8681 22.4595 17.7374 22.4088 17.6155C22.358 17.4936 22.2836 17.383 22.1899 17.2901L17.5999 12.7101Z" fill="#F8F8F8" fill-opacity="0.5"/>
                </svg>
            </button>`,n.innerHTML+=`
            <button class="main-pag-btn main-pag-btn-green"
                    data-topage="${e-1}">
                <svg width="32" height="32" viewBox="-2 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5999 12.7101C10.5061 12.6171 10.4317 12.5065 10.381 12.3847C10.3302 12.2628 10.3041 12.1321 10.3041 12.0001C10.3041 11.8681 10.3302 11.7374 10.381 11.6155C10.4317 11.4936 10.5061 11.383 10.5999 11.2901L15.1899 6.71006C15.2836 6.6171 15.358 6.5065 15.4088 6.38464C15.4595 6.26278 15.4857 6.13207 15.4857 6.00006C15.4857 5.86805 15.4595 5.73734 15.4088 5.61548C15.358 5.49362 15.2836 5.38302 15.1899 5.29006C15.0025 5.10381 14.749 4.99927 14.4849 4.99927C14.2207 4.99927 13.9672 5.10381 13.7799 5.29006L9.18986 9.88007C8.62806 10.4426 8.3125 11.2051 8.3125 12.0001C8.3125 12.7951 8.62806 13.5576 9.18986 14.1201L13.7799 18.7101C13.9661 18.8948 14.2175 18.999 14.4799 19.0001C14.6115 19.0008 14.7419 18.9756 14.8638 18.9259C14.9856 18.8761 15.0964 18.8028 15.1899 18.7101C15.2836 18.6171 15.358 18.5065 15.4088 18.3847C15.4595 18.2628 15.4857 18.1321 15.4857 18.0001C15.4857 17.8681 15.4595 17.7374 15.4088 17.6155C15.358 17.4936 15.2836 17.383 15.1899 17.2901L10.5999 12.7101Z" fill="#F8F8F8" fill-opacity="0.5"/>
                </svg>
            </button>`);for(let i=e-a;i<=e+a;i++)i>0&&i<=t&&(i===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${i}">${i}</button>`:i===e+a||i===e-a?n.innerHTML+=`<button class="main-pag-btn" data-topage="${i}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${i}">${i}</button>`);e===t?(// inactive forward b
n.innerHTML+=`
            <button class="main-pag-btn" disabled>
                <svg width="31" height="24" viewBox="-5 -1 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4001 12.7103C13.4939 12.6173 13.5683 12.5067 13.619 12.3848C13.6698 12.263 13.6959 12.1323 13.6959 12.0003C13.6959 11.8682 13.6698 11.7375 13.619 11.6157C13.5683 11.4938 13.4939 11.3832 13.4001 11.2903L8.81014 6.71025C8.71641 6.61728 8.64202 6.50668 8.59125 6.38482C8.54048 6.26296 8.51434 6.13226 8.51434 6.00024C8.51434 5.86823 8.54048 5.73753 8.59125 5.61567C8.64202 5.49381 8.71641 5.38321 8.81014 5.29024C8.9975 5.10399 9.25095 4.99945 9.51514 4.99945C9.77933 4.99945 10.0328 5.10399 10.2201 5.29024L14.8101 9.88025C15.3719 10.4428 15.6875 11.2053 15.6875 12.0003C15.6875 12.7953 15.3719 13.5578 14.8101 14.1203L10.2201 18.7103C10.0339 18.895 9.78248 18.9992 9.52014 19.0003C9.38853 19.001 9.25807 18.9758 9.13623 18.926C9.0144 18.8763 8.90358 18.8029 8.81014 18.7103C8.71641 18.6173 8.64202 18.5067 8.59125 18.3848C8.54048 18.263 8.51434 18.1323 8.51434 18.0003C8.51434 17.8683 8.54048 17.7375 8.59125 17.6157C8.64202 17.4938 8.71641 17.3832 8.81014 17.2903L13.4001 12.7103Z" fill="#050505"/>
                </svg>
            </button>`,n.innerHTML+=`
            <button class="main-pag-btn" disabled>
                <svg width="31" height="24" viewBox="-1 -2 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4001 12.7103C20.4939 12.6173 20.5683 12.5067 20.619 12.3848C20.6698 12.263 20.6959 12.1323 20.6959 12.0003C20.6959 11.8682 20.6698 11.7375 20.619 11.6157C20.5683 11.4938 20.4939 11.3832 20.4001 11.2903L15.8101 6.71025C15.7164 6.61728 15.642 6.50668 15.5912 6.38482C15.5405 6.26296 15.5143 6.13226 15.5143 6.00024C15.5143 5.86823 15.5405 5.73753 15.5912 5.61567C15.642 5.49381 15.7164 5.38321 15.8101 5.29024C15.9975 5.10399 16.251 4.99945 16.5151 4.99945C16.7793 4.99945 17.0328 5.10399 17.2201 5.29024L21.8101 9.88025C22.3719 10.4428 22.6875 11.2053 22.6875 12.0003C22.6875 12.7953 22.3719 13.5578 21.8101 14.1203L17.2201 18.7103C17.0339 18.895 16.7825 18.9992 16.5201 19.0003C16.3885 19.001 16.2581 18.9758 16.1362 18.926C16.0144 18.8763 15.9036 18.8029 15.8101 18.7103C15.7164 18.6173 15.642 18.5067 15.5912 18.3848C15.5405 18.263 15.5143 18.1323 15.5143 18.0003C15.5143 17.8683 15.5405 17.7375 15.5912 17.6157C15.642 17.4938 15.7164 17.3832 15.8101 17.2903L20.4001 12.7103Z" fill="#050505"/>
                    <path d="M13.4001 12.7103C13.4939 12.6173 13.5683 12.5067 13.619 12.3848C13.6698 12.263 13.6959 12.1323 13.6959 12.0003C13.6959 11.8682 13.6698 11.7375 13.619 11.6157C13.5683 11.4938 13.4939 11.3832 13.4001 11.2903L8.81014 6.71025C8.71641 6.61728 8.64202 6.50668 8.59125 6.38482C8.54048 6.26296 8.51434 6.13226 8.51434 6.00024C8.51434 5.86823 8.54048 5.73753 8.59125 5.61567C8.64202 5.49381 8.71641 5.38321 8.81014 5.29024C8.9975 5.10399 9.25095 4.99945 9.51514 4.99945C9.77933 4.99945 10.0328 5.10399 10.2201 5.29024L14.8101 9.88025C15.3719 10.4428 15.6875 11.2053 15.6875 12.0003C15.6875 12.7953 15.3719 13.5578 14.8101 14.1203L10.2201 18.7103C10.0339 18.895 9.78248 18.9992 9.52014 19.0003C9.38853 19.001 9.25807 18.9758 9.13623 18.926C9.0144 18.8763 8.90358 18.8029 8.81014 18.7103C8.71641 18.6173 8.64202 18.5067 8.59125 18.3848C8.54048 18.263 8.51434 18.1323 8.51434 18.0003C8.51434 17.8683 8.54048 17.7375 8.59125 17.6157C8.64202 17.4938 8.71641 17.3832 8.81014 17.2903L13.4001 12.7103Z" fill="#050505"/>
                </svg>
            </button>`):(// active forward b
n.innerHTML+=`
            <button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">
                <svg width="31" height="24" viewBox="-5 -2 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4001 12.7103C13.4939 12.6173 13.5683 12.5067 13.619 12.3848C13.6698 12.263 13.6959 12.1323 13.6959 12.0003C13.6959 11.8682 13.6698 11.7375 13.619 11.6157C13.5683 11.4938 13.4939 11.3832 13.4001 11.2903L8.81014 6.71025C8.71641 6.61728 8.64202 6.50668 8.59125 6.38482C8.54048 6.26296 8.51434 6.13226 8.51434 6.00024C8.51434 5.86823 8.54048 5.73753 8.59125 5.61567C8.64202 5.49381 8.71641 5.38321 8.81014 5.29024C8.9975 5.10399 9.25095 4.99945 9.51514 4.99945C9.77933 4.99945 10.0328 5.10399 10.2201 5.29024L14.8101 9.88025C15.3719 10.4428 15.6875 11.2053 15.6875 12.0003C15.6875 12.7953 15.3719 13.5578 14.8101 14.1203L10.2201 18.7103C10.0339 18.895 9.78248 18.9992 9.52014 19.0003C9.38853 19.001 9.25807 18.9758 9.13623 18.926C9.0144 18.8763 8.90358 18.8029 8.81014 18.7103C8.71641 18.6173 8.64202 18.5067 8.59125 18.3848C8.54048 18.263 8.51434 18.1323 8.51434 18.0003C8.51434 17.8683 8.54048 17.7375 8.59125 17.6157C8.64202 17.4938 8.71641 17.3832 8.81014 17.2903L13.4001 12.7103Z" fill="#050505"/>
                </svg>
            </button>`,n.innerHTML+=`
            <button class="main-pag-btn main-pag-btn-green" data-topage="${t}">
                <svg width="31" height="24" viewBox="-1 -2 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4001 12.7103C20.4939 12.6173 20.5683 12.5067 20.619 12.3848C20.6698 12.263 20.6959 12.1323 20.6959 12.0003C20.6959 11.8682 20.6698 11.7375 20.619 11.6157C20.5683 11.4938 20.4939 11.3832 20.4001 11.2903L15.8101 6.71025C15.7164 6.61728 15.642 6.50668 15.5912 6.38482C15.5405 6.26296 15.5143 6.13226 15.5143 6.00024C15.5143 5.86823 15.5405 5.73753 15.5912 5.61567C15.642 5.49381 15.7164 5.38321 15.8101 5.29024C15.9975 5.10399 16.251 4.99945 16.5151 4.99945C16.7793 4.99945 17.0328 5.10399 17.2201 5.29024L21.8101 9.88025C22.3719 10.4428 22.6875 11.2053 22.6875 12.0003C22.6875 12.7953 22.3719 13.5578 21.8101 14.1203L17.2201 18.7103C17.0339 18.895 16.7825 18.9992 16.5201 19.0003C16.3885 19.001 16.2581 18.9758 16.1362 18.926C16.0144 18.8763 15.9036 18.8029 15.8101 18.7103C15.7164 18.6173 15.642 18.5067 15.5912 18.3848C15.5405 18.263 15.5143 18.1323 15.5143 18.0003C15.5143 17.8683 15.5405 17.7375 15.5912 17.6157C15.642 17.4938 15.7164 17.3832 15.8101 17.2903L20.4001 12.7103Z" fill="#050505"/>
                    <path d="M13.4001 12.7103C13.4939 12.6173 13.5683 12.5067 13.619 12.3848C13.6698 12.263 13.6959 12.1323 13.6959 12.0003C13.6959 11.8682 13.6698 11.7375 13.619 11.6157C13.5683 11.4938 13.4939 11.3832 13.4001 11.2903L8.81014 6.71025C8.71641 6.61728 8.64202 6.50668 8.59125 6.38482C8.54048 6.26296 8.51434 6.13226 8.51434 6.00024C8.51434 5.86823 8.54048 5.73753 8.59125 5.61567C8.64202 5.49381 8.71641 5.38321 8.81014 5.29024C8.9975 5.10399 9.25095 4.99945 9.51514 4.99945C9.77933 4.99945 10.0328 5.10399 10.2201 5.29024L14.8101 9.88025C15.3719 10.4428 15.6875 11.2053 15.6875 12.0003C15.6875 12.7953 15.3719 13.5578 14.8101 14.1203L10.2201 18.7103C10.0339 18.895 9.78248 18.9992 9.52014 19.0003C9.38853 19.001 9.25807 18.9758 9.13623 18.926C9.0144 18.8763 8.90358 18.8029 8.81014 18.7103C8.71641 18.6173 8.64202 18.5067 8.59125 18.3848C8.54048 18.263 8.51434 18.1323 8.51434 18.0003C8.51434 17.8683 8.54048 17.7375 8.59125 17.6157C8.64202 17.4938 8.71641 17.3832 8.81014 17.2903L13.4001 12.7103Z" fill="#050505"/>
                </svg>
            </button>`),n.querySelectorAll("[data-topage]").forEach(e=>{/* console.log(btn.dataset.topage); */e.addEventListener("click",function(e){e.preventDefault(),P.setPage(Number(e.target.dataset.topage)),i()})})}else n.innerHTML=""}//# sourceMappingURL=index.b66d2516.js.map
)(t.page,t.totalPages,n,Q),console.log(t)})}
//# sourceMappingURL=index.b66d2516.js.map
