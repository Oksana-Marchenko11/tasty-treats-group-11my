var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire78be;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire78be=r);var i=r("6kfMw"),a={save:(e,t)=>{try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Remove item error: ",e.message)}}},i=r("6kfMw");let o=new i.default;const s="favorites";function c(){return a.load(s)||{}}var l={getLs:c,checkFav:function(e){return(console.log(e),e in c())?(console.log(`Id ${e} in Favorites`),!0):(console.log(`Id ${e} not in Favorites`),!1)},togleFav:function(e){console.log(e);let t=c();return e in t?(delete t[e],a.save(s,t),console.log("Remove from favorites"),0):(o.getRecipeById(e).then(n=>{console.log(n),t[e]=n,a.save(s,t),console.log("Add to favorites")}),console.log(t),1)}},u={},d=0/0,g=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,y=b||h||Function("return this")(),T=Object.prototype.toString,S=Math.max,L=Math.min,w=function(){return y.Date.now()};function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==T.call(t))return d;if($(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=$(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(g,"");var r=p.test(e);return r||v.test(e)?m(e.slice(2),r?2:8):f.test(e)?d:+e}u=function(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function p(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||d&&r>=a}function v(){var e,n,r,i=w();if(p(i))return m(i);s=setTimeout(v,(e=i-c,n=i-l,r=t-e,d?L(r,a-n):r))}function m(e){return(s=void 0,g&&r)?f(e):(r=i=void 0,o)}function b(){var e,n=w(),a=p(n);if(r=arguments,i=this,c=n,a){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):o;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=E(t)||0,$(n)&&(u=!!n.leading,a=(d="maxWait"in n)?S(E(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=i=s=void 0},b.flush=function(){return void 0===s?o:m(w())},b};var M={},O="Expected a function",j=0/0,x=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,I=/^0o[0-7]+$/i,_=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,k="object"==typeof self&&self&&self.Object===Object&&self,F=C||k||Function("return this")(),P=Object.prototype.toString,W=Math.max,N=Math.min,R=function(){return F.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==P.call(t))return j;if(A(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=A(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(x,"");var r=q.test(e);return r||I.test(e)?_(e.slice(2),r?2:8):H.test(e)?j:+e}M=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(O);return A(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),function(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError(O);function f(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function p(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||d&&r>=a}function v(){var e,n,r,i=R();if(p(i))return m(i);s=setTimeout(v,(e=i-c,n=i-l,r=t-e,d?N(r,a-n):r))}function m(e){return(s=void 0,g&&r)?f(e):(r=i=void 0,o)}function b(){var e,n=R(),a=p(n);if(r=arguments,i=this,c=n,a){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):o;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=D(t)||0,A(n)&&(u=!!n.leading,a=(d="maxWait"in n)?W(D(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=i=s=void 0},b.flush=function(){return void 0===s?o:m(R())},b}(e,t,{leading:r,maxWait:t,trailing:i})};const U=new i.default,J=document.querySelector(".category-list"),z=document.querySelector(".list-item"),B=document.querySelector(".filter-input"),G=document.querySelector(".area"),K=document.querySelector(".ingrediends"),Q=document.querySelector(".time"),V=document.querySelector(".all-category-btn"),X=document.querySelector(".reset-filters");X.addEventListener("click",e=>{document.querySelector(".form-filters").reset(),U.setResetFilters(),Z()});for(let e=5;e<=120;e+=5){let t=document.createElement("option");t.value=e,t.innerHTML=e+" min",Q.appendChild(t)}B.addEventListener("input",u(function(e){console.log(e.target.value.trim()),U.setSearchText(e.target.value.trim()),Z()},300)),K.addEventListener("change",function(e){console.log(e.target.value),U.setSearchIngredient(e.target.value),Z()}),G.addEventListener("change",function(e){console.log(e.target.selectedOptions[0].dataset.param),U.setSearchArea(e.target.selectedOptions[0].dataset.param),Z()}),J.addEventListener("click",function(e){console.log(e.target.dataset.recipeCategory),U.setCategory(e.target.dataset.recipeCategory),Z()}),Q.addEventListener("change",function(e){console.log(e.target.value),U.setSearchTime(e.target.value),Z()}),V.addEventListener("click",function(){U.setCategory(""),Z()}),U.getCategories().then(e=>{e.forEach(e=>{J.innerHTML+=`<li class="category-item-list"><button class="category-btn" data-recipe-category="${e.name}">${e.name}</button></li>`})}),U.getAreas().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,G.appendChild(t)})}),U.getIngredients().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,K.appendChild(t)})}),window.onresize=M(function(){Z()},500),Z();const Y=`
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
`;function Z(){window.innerWidth<768?U.setPerPage(6):window.innerWidth<1280?U.setPerPage(8):U.setPerPage(9);let e=l.getLs();U.getRecipes().then(t=>{let n="";t.results.forEach(t=>{let r=t._id in e?"favorite":"unfavorite";n+=`    
            <li class="item-cards">
                <div class="shadow-on-img" data-recipe-id="${t._id}">
                    <img class="card-img" src="${t.preview}" />
                </div>
                ${Y}
                <button class="add-fav-btn ${r}">
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
            `}),z.innerHTML=n,z.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){console.log(l.togleFav(e.target.closest("button").dataset.recipeId))})}),z.querySelectorAll(".main-see-recipe").forEach(e=>{e.addEventListener("click",ee)});let r=document.querySelector(".pagination");(function(e,t,n,r){e=Number(e),t=Number(t);let i=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let r=e-i;r<=e+i;r++)r>0&&r<=t&&(r===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${r}">_${r}_</button>`:r===e+i||r===e-i?n.innerHTML+=`<button class="main-pag-btn" data-topage="${r}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${r}">${r}</button>`);e===t?(n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),U.setPage(Number(e.target.dataset.topage)),r()})})}})(t.page,t.totalPages,r,Z),console.log(t)})}function ee(e){console.log(e.target.dataset.recipeId)}
//# sourceMappingURL=index.28a73082.js.map
