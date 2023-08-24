var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire78be;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire78be=i);var a=i("6kfMw"),r=i("2JNBJ"),o={},s=0/0,c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,g="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,m=g||p||Function("return this")(),v=Object.prototype.toString,b=Math.max,h=Math.min,y=function(){return m.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return s;if(T(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var i=u.test(e);return i||d.test(e)?f(e.slice(2),i?2:8):l.test(e)?s:+e}o=function(e,t,n){var i,a,r,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=i,r=a;return i=a=void 0,l=t,o=e.apply(r,n)}function p(e){var n=e-c,i=e-l;return void 0===c||n>=t||n<0||d&&i>=r}function m(){var e,n,i,a=y();if(p(a))return v(a);s=setTimeout(m,(e=a-c,n=a-l,i=t-e,d?h(i,r-n):i))}function v(e){return(s=void 0,f&&i)?g(e):(i=a=void 0,o)}function L(){var e,n=y(),r=p(n);if(i=arguments,a=this,c=n,r){if(void 0===s)return l=e=c,s=setTimeout(m,t),u?g(e):o;if(d)return s=setTimeout(m,t),g(c)}return void 0===s&&(s=setTimeout(m,t)),o}return t=w(t)||0,T(n)&&(u=!!n.leading,r=(d="maxWait"in n)?b(w(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),L.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=a=s=void 0},L.flush=function(){return void 0===s?o:v(y())},L};var L={},E="Expected a function",$=0/0,M=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,x=/^0o[0-7]+$/i,C=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,H="object"==typeof self&&self&&self.Object===Object&&self,q=O||H||Function("return this")(),k=Object.prototype.toString,_=Math.max,F=Math.min,P=function(){return q.Date.now()};function W(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==k.call(t))return $;if(W(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=W(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(M,"");var i=j.test(e);return i||x.test(e)?C(e.slice(2),i?2:8):S.test(e)?$:+e}L=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(E);return W(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),function(e,t,n){var i,a,r,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw TypeError(E);function g(t){var n=i,r=a;return i=a=void 0,l=t,o=e.apply(r,n)}function p(e){var n=e-c,i=e-l;return void 0===c||n>=t||n<0||d&&i>=r}function m(){var e,n,i,a=P();if(p(a))return v(a);s=setTimeout(m,(e=a-c,n=a-l,i=t-e,d?F(i,r-n):i))}function v(e){return(s=void 0,f&&i)?g(e):(i=a=void 0,o)}function b(){var e,n=P(),r=p(n);if(i=arguments,a=this,c=n,r){if(void 0===s)return l=e=c,s=setTimeout(m,t),u?g(e):o;if(d)return s=setTimeout(m,t),g(c)}return void 0===s&&(s=setTimeout(m,t)),o}return t=I(t)||0,W(n)&&(u=!!n.leading,r=(d="maxWait"in n)?_(I(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=a=s=void 0},b.flush=function(){return void 0===s?o:v(P())},b}(e,t,{leading:i,maxWait:t,trailing:a})};const N=new a.default,A=document.querySelector(".category-list"),D=document.querySelector(".list-item"),R=document.querySelector(".filter-input"),U=document.querySelector(".area"),B=document.querySelector(".ingrediends"),J=document.querySelector(".time"),z=document.querySelector(".all-category-btn"),Z=document.querySelector(".reset-filters");Z.addEventListener("click",e=>{document.querySelector(".form-filters").reset(),N.setResetFilters(),K()});for(let e=5;e<=120;e+=5){let t=document.createElement("option");t.value=e,t.innerHTML=e+" min",J.appendChild(t)}R.addEventListener("input",o(function(e){console.log(e.target.value.trim()),N.setSearchText(e.target.value.trim()),K()},300)),B.addEventListener("change",function(e){console.log(e.target.value),N.setSearchIngredient(e.target.value),K()}),U.addEventListener("change",function(e){console.log(e.target.selectedOptions[0].dataset.param),N.setSearchArea(e.target.selectedOptions[0].dataset.param),K()}),A.addEventListener("click",function(e){console.log(e.target.dataset.recipeCategory),N.setCategory(e.target.dataset.recipeCategory),K()}),J.addEventListener("change",function(e){console.log(e.target.value),N.setSearchTime(e.target.value),K()}),z.addEventListener("click",function(){N.setCategory(""),K()}),N.getCategories().then(e=>{e.forEach(e=>{A.innerHTML+=`<li class="category-item-list"><button class="category-btn" data-recipe-category="${e.name}">${e.name}</button></li>`})}),N.getAreas().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,U.appendChild(t)})}),N.getIngredients().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,B.appendChild(t)})}),window.onresize=L(function(){K()},500),K();const G=`
<div class="rating-recipe" id="rating-container">
    <span class="rating-number-recipe">4.5</span>
    <ul class="stars">
        <li>
            <svg class="star" data-rating="1" width="16" height="16">
                <use href="/src/img/modal-recipe#icon-star"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="2" width="16" height="16">
                <use href="/src/img/modal-recipe#icon-star"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="3" width="16" height="16">
                <use href="/src/img/modal-recipe#icon-star"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="4" width="16" height="16">
                <use href="/src/img/modal-recipe#icon-star"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="5" width="16" height="16">
                <use href="/src/img/modal-recipe#icon-star"></use>
            </svg>
        </li>
    </ul>
</div>
`;function K(){window.innerWidth<768?N.setPerPage(6):window.innerWidth<1280?N.setPerPage(8):N.setPerPage(9);let e=(0,r.default).getLs();N.getRecipes().then(t=>{let n="";t.results.forEach(t=>{let i=t._id in e?"favorite":"unfavorite";n+=`    
            <li class="item-cards">
                <div class="shadow-on-img" data-recipe-id="${t._id}">
                    <img class="card-img" src="${t.preview}" />
                </div>
                ${G}
                <button class="add-fav-btn ${i}">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234 5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912 17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629 19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219 19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961 13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434 2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
            </li>
            `}),D.innerHTML=n,D.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){console.log((0,r.default).togleFav(e.target.closest("button").dataset.recipeId))})}),D.querySelectorAll(".main-see-recipe").forEach(e=>{let t=i("6o7gM");e.addEventListener("click",e=>{t.default.open(e.target.dataset.recipeId)})});let a=document.querySelector(".pagination");(function(e,t,n,i){e=Number(e),t=Number(t);let a=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let i=e-a;i<=e+a;i++)i>0&&i<=t&&(i===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${i}">${i}</button>`:i===e+a||i===e-a?n.innerHTML+=`<button class="main-pag-btn" data-topage="${i}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${i}">${i}</button>`);e===t?(n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),N.setPage(Number(e.target.dataset.topage)),i()})})}})(t.page,t.totalPages,a,K),console.log(t)})}
//# sourceMappingURL=index.c4a18bc3.js.map
