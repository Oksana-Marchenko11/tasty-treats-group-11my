var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire78be;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire78be=a);// Оновлений JavaScript зі скролом
const i=`
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
</svg>`,r=`
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
</svg>`;var o={},l="Expected a function",c=0/0,s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,v=f||b||Function("return this")(),m=Object.prototype.toString,h=Math.max,y=Math.min,w=function(){return v.Date.now()};/**
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
 */function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
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
 */function L(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return c;if(T(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var a=u.test(e);return a||p.test(e)?g(e.slice(2),a?2:8):d.test(e)?c:+e}o=/**
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
 */function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw TypeError(l);return T(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),/**
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
 */function(e,t,n){var a,i,r,o,c,s,d=0,u=!1,p=!1,g=!0;if("function"!=typeof e)throw TypeError(l);function f(t){var n=a,r=i;return a=i=void 0,d=t,o=e.apply(r,n)}function b(e){var n=e-s,a=e-d;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===s||n>=t||n<0||p&&a>=r}function v(){var e,n,a,i=w();if(b(i))return m(i);// Restart the timer.
c=setTimeout(v,(e=i-s,n=i-d,a=t-e,p?y(a,r-n):a))}function m(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(c=void 0,g&&a)?f(e):(a=i=void 0,o))}function M(){var e,n=w(),r=b(n);if(a=arguments,i=this,s=n,r){if(void 0===c)return(// Reset any `maxWait` timer.
d=e=s,// Start the timer for the trailing edge.
c=setTimeout(v,t),u?f(e):o);if(p)return(// Handle invocations in a tight loop.
c=setTimeout(v,t),f(s))}return void 0===c&&(c=setTimeout(v,t)),o}return t=L(t)||0,T(n)&&(u=!!n.leading,r=(p="maxWait"in n)?h(L(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),M.cancel=function(){void 0!==c&&clearTimeout(c),d=0,a=s=i=c=void 0},M.flush=function(){return void 0===c?o:m(w())},M}(e,t,{leading:a,maxWait:t,trailing:i})};const M=document.querySelector(".category-list-favorites"),$=document.querySelector(".favorites-list"),C=document.querySelector("#pagination"),x=document.querySelector(".favorites-wrap"),E=document.querySelector(".categories-box-favorites");var H=a("2JNBJ").default;let S=9,q=[],j="";function k(e){var t,n;let o,l;e||=1,e=Number(e);let c=H.getLs(),s=Object.values(c);q=[],c.length,$.innerHTML="",l=12,window.innerWidth<768&&(l=9),S=l,s.forEach(e=>{q.includes(e.category)||q.push(e.category)}),q.includes(j)||(j="");let d=(t=e,n=[],o=0,s.forEach(e=>{let a=1===t?0:(t-1)*S,i=1===t?S:t*S;if(!(j&&e.category===j||!j)||(o++,!(n.length<S&&o>a&&o<=i)))return;let l=document.createElement("li");l.className="item-cards",l.innerHTML=`
            <div class="shadow-on-img" data-recipe-id="${e._id}">
                <img class="card-img" src="${e.preview}" />
            </div>
            <button class="add-fav-btn"
                    data-recipe-id="${e._id}">
                ${r}
            </button>
            <span class="span-title" data-recipe-id="${e._id}">
                ${e.title.toUpperCase()}
            </span>
            <span class="span-descr" data-recipe-id="${e._id}">
                ${e.description}
            </span>
            <button class="main-see-recipe" data-recipe-id="${e._id}">
                See recipe
            </button>
        `,l.appendChild(function(e){let t=`
        <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
    `,n=document.createElement("div"),a=(Math.round(10*e)/10).toFixed(1);n.className="rating-recipe",n.innerHTML=`<span class="rating-number-recipe">${a}</span>`;let i=document.createElement("ul");i.className="stars";for(let n=1;n<=5;n++){let a=document.createElement("li");n<=e?a.innerHTML=`
                <svg class="star star-filled" viewBox="0 0 34 32" data-rating="${n}" width="16" height="16">
                    ${t}
                </svg>            
            `:a.innerHTML=`
                <svg class="star" viewBox="0 0 34 32" data-rating="${n}" width="16" height="16">
                    ${t}
                </svg>            
            `,i.appendChild(a)}return n.appendChild(i),n}(e.rating)),$.appendChild(l)}),o);M.innerHTML=q.sort().map(e=>`<li class="favourites-list-btn"><button class="category-btn all-tags" data-recipe-category="${e}">${e}</button></li>`).join(""),M.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",e=>{j=e.target.dataset.recipeCategory,console.log(e.target.dataset.recipeCategory),// Оновлюємо вподобані рецепти
k()})}),document.querySelector(".all-tags").addEventListener("click",()=>{console.log("categories reset",j=""),// Оновлюємо вподобані рецепти
k()}),E.addEventListener("scroll",e=>{E.scrollLeft;// Отримуємо ширину контейнера і вираховуємо, чи потрібно показувати горизонтальний скрол
let t=E.clientWidth,n=E.scrollWidth;n<=t?E.style.overflowX="hidden":E.style.overflowX="scroll";// Опрацьовуємо подію при прокручуванні
// Ви можете додати необхідний код тут, якщо потрібно
}),$.querySelectorAll(".item-cards").length>0?($.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){let t=e.target.closest("button"),n=H.togleFav(t.getAttribute("data-recipe-id"));console.log("Result: "+n),n?t.innerHTML=r:t.innerHTML=i,k()})}),$.querySelectorAll(".main-see-recipe").forEach(e=>{let t=a("6o7gM");e.addEventListener("click",e=>{console.log(e.target.dataset),t.default.open(e.target.dataset.recipeId)})}),d>S?// pagination
function(e,t,n,a){e=Number(e),t=Number(t);let i=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(// inactive prev b
n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(// active prev b
n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let a=e-i;a<=e+i;a++)a>0&&a<=t&&(a===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${a}">${a}</button>`:a===e+i||a===e-i?n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">${a}</button>`);e===t?(// inactive forward b
n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(// active forward b
n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),a(Number(e.target.dataset.topage))})})}}//# sourceMappingURL=favorites.a23cd966.js.map
(e,Math.ceil(d/S),C,k):C.innerHTML="",x.style.display="none",document.querySelector(".tags-container").style.display="flex"):(x.style.display="flex",document.querySelector(".tags-container").style.display="none")}window.onresize=o(function(){k()},500),k();
//# sourceMappingURL=favorites.a23cd966.js.map
