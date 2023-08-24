var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire78be;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire78be=i);var a=i("6kfMw"),r=i("2JNBJ"),o={},s=0/0,c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,g=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,v=f||p||Function("return this")(),b=Object.prototype.toString,m=Math.max,h=Math.min,y=function(){return v.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==b.call(t))return s;if(T(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var i=u.test(e);return i||d.test(e)?g(e.slice(2),i?2:8):l.test(e)?s:+e}o=function(e,t,n){var i,a,r,o,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var n=i,r=a;return i=a=void 0,l=t,o=e.apply(r,n)}function p(e){var n=e-c,i=e-l;return void 0===c||n>=t||n<0||d&&i>=r}function v(){var e,n,i,a=y();if(p(a))return b(a);s=setTimeout(v,(e=a-c,n=a-l,i=t-e,d?h(i,r-n):i))}function b(e){return(s=void 0,g&&i)?f(e):(i=a=void 0,o)}function $(){var e,n=y(),r=p(n);if(i=arguments,a=this,c=n,r){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):o;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=L(t)||0,T(n)&&(u=!!n.leading,r=(d="maxWait"in n)?m(L(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),$.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=a=s=void 0},$.flush=function(){return void 0===s?o:b(y())},$};var $={},w="Expected a function",E=0/0,S=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,O=/^0o[0-7]+$/i,x=parseInt,H="object"==typeof e&&e&&e.Object===Object&&e,q="object"==typeof self&&self&&self.Object===Object&&self,C=H||q||Function("return this")(),_=Object.prototype.toString,P=Math.max,W=Math.min,k=function(){return C.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==_.call(t))return E;if(I(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=I(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(S,"");var i=j.test(e);return i||O.test(e)?x(e.slice(2),i?2:8):M.test(e)?E:+e}$=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(w);return I(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),function(e,t,n){var i,a,r,o,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError(w);function f(t){var n=i,r=a;return i=a=void 0,l=t,o=e.apply(r,n)}function p(e){var n=e-c,i=e-l;return void 0===c||n>=t||n<0||d&&i>=r}function v(){var e,n,i,a=k();if(p(a))return b(a);s=setTimeout(v,(e=a-c,n=a-l,i=t-e,d?W(i,r-n):i))}function b(e){return(s=void 0,g&&i)?f(e):(i=a=void 0,o)}function m(){var e,n=k(),r=p(n);if(i=arguments,a=this,c=n,r){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):o;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=N(t)||0,I(n)&&(u=!!n.leading,r=(d="maxWait"in n)?P(N(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),m.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=a=s=void 0},m.flush=function(){return void 0===s?o:b(k())},m}(e,t,{leading:i,maxWait:t,trailing:a})};const A=new a.default,D=document.querySelector(".category-list"),F=document.querySelector(".list-item"),R=document.querySelector(".filter-input"),U=document.querySelector(".area"),J=document.querySelector(".ingrediends"),z=document.querySelector(".time"),B=document.querySelector(".all-category-btn"),G=document.querySelector(".reset-filters");G.addEventListener("click",e=>{document.querySelector(".form-filters").reset(),A.setResetFilters(),Q()});for(let e=5;e<=120;e+=5){let t=document.createElement("option");t.value=e,t.innerHTML=e+" min",z.appendChild(t)}R.addEventListener("input",o(function(e){console.log(e.target.value.trim()),A.setSearchText(e.target.value.trim()),Q()},300)),J.addEventListener("change",function(e){console.log(e.target.value),A.setSearchIngredient(e.target.value),Q()}),U.addEventListener("change",function(e){console.log(e.target.selectedOptions[0].dataset.param),A.setSearchArea(e.target.selectedOptions[0].dataset.param),Q()}),D.addEventListener("click",function(e){console.log(e.target.dataset.recipeCategory),A.setCategory(e.target.dataset.recipeCategory),Q()}),z.addEventListener("change",function(e){console.log(e.target.value),A.setSearchTime(e.target.value),Q()}),B.addEventListener("click",function(){A.setCategory(""),Q()}),A.getCategories().then(e=>{e.forEach(e=>{D.innerHTML+=`<li class="category-item-list"><button class="category-btn" data-recipe-category="${e.name}">${e.name}</button></li>`})}),A.getAreas().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,U.appendChild(t)})}),A.getIngredients().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,J.appendChild(t)})}),window.onresize=$(function(){Q()},500),Q();const K=`
<div class="rating-recipe" id="rating-container">
    <span class="rating-number-recipe">4.5</span>
    <ul class="stars">
        <li>
            <svg class="star" data-rating="1" width="16" height="16">
                <use href="/src/img/sprite.svg#icon-Star-1"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="2" width="16" height="16">
                <use href="/src/img/sprite.svg#icon-Star-1"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="3" width="16" height="16">
                <use href="/src/img/sprite.svg#icon-Star-1"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="4" width="16" height="16">
                <use href="/src/img/sprite.svg#icon-Star-1"></use>
            </svg>
        </li>
        <li>
            <svg class="star" data-rating="5" width="16" height="16">
                <use href="/src/img/sprite.svg#icon-Star-1"></use>
            </svg>
        </li>
    </ul>
</div>
`;function Q(){window.innerWidth<768?A.setPerPage(6):window.innerWidth<1280?A.setPerPage(8):A.setPerPage(9);let e=(0,r.default).getLs();A.getRecipes().then(t=>{let n="";t.results.forEach(t=>{let i=t._id in e?"favorite":"unfavorite";n+=`    
            <li class="item-cards">
                <div class="shadow-on-img" data-recipe-id="${t._id}">
                    <img class="card-img" src="${t.preview}" />
                </div>
                ${K}
                <button class="add-fav-btn ${i}" data-recipe-id="${t._id}">
                    <svg class="heard-icon">
                        <use href="../img/sprite.svg#icon-heart1"></use>
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
            `}),F.innerHTML=n,F.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){console.log((0,r.default).togleFav(e.target.closest("button").dataset.recipeId))})}),F.querySelectorAll(".main-see-recipe").forEach(e=>{let t=i("6o7gM");e.addEventListener("click",e=>{t.default.open(e.target.dataset.recipeId)})});let a=document.querySelector(".pagination");(function(e,t,n,i){e=Number(e),t=Number(t);let a=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let i=e-a;i<=e+a;i++)i>0&&i<=t&&(i===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${i}">${i}</button>`:i===e+a||i===e-a?n.innerHTML+=`<button class="main-pag-btn" data-topage="${i}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${i}">${i}</button>`);e===t?(n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),A.setPage(Number(e.target.dataset.topage)),i()})})}})(t.page,t.totalPages,a,Q),console.log(t)})}
//# sourceMappingURL=index.4ebaa663.js.map
