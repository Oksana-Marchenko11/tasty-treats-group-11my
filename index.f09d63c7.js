var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire78be;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire78be=r);var a=r("6kfMw"),i={save:e=>{try{let t=JSON.stringify(e);localStorage.setItem("favorites",t)}catch(e){console.error("Set state error: ",e.message)}},load:()=>{try{let e=localStorage.getItem("favorites");return null===e?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},remove:()=>{try{localStorage.removeItem("favorites")}catch(e){console.error("Remove item error: ",e.message)}}},a=r("6kfMw");let o=new a.default;function s(){return i.load()||{}}var c={getLs:s,togleFav:function(e){console.log(e);let t=s();return e in t?(delete t[e],i.save(t),console.log("Remove from favorites"),0):(o.getRecipeById(e).then(n=>{console.log(n),t[e]=n,i.save(t),console.log("Add to favorites")}),console.log(t),1)}},l={},u=0/0,d=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,h=m||b||Function("return this")(),y=Object.prototype.toString,T=Math.max,S=Math.min,L=function(){return h.Date.now()};function w(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==y.call(t))return u;if(w(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var r=f.test(e);return r||p.test(e)?v(e.slice(2),r?2:8):g.test(e)?u:+e}l=function(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function p(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||d&&r>=i}function v(){var e,n,r,a=L();if(p(a))return m(a);s=setTimeout(v,(e=a-c,n=a-l,r=t-e,d?S(r,i-n):r))}function m(e){return(s=void 0,g&&r)?f(e):(r=a=void 0,o)}function b(){var e,n=L(),i=p(n);if(r=arguments,a=this,c=n,i){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):o;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=E(t)||0,w(n)&&(u=!!n.leading,i=(d="maxWait"in n)?T(E(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},b.flush=function(){return void 0===s?o:m(L())},b};var $={},M="Expected a function",O=0/0,j=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,q=/^0o[0-7]+$/i,_=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,I="object"==typeof self&&self&&self.Object===Object&&self,k=C||I||Function("return this")(),P=Object.prototype.toString,W=Math.max,N=Math.min,R=function(){return k.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==P.call(t))return O;if(A(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=A(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(j,"");var r=H.test(e);return r||q.test(e)?_(e.slice(2),r?2:8):x.test(e)?O:+e}$=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw TypeError(M);return A(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),function(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw TypeError(M);function f(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function p(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||d&&r>=i}function v(){var e,n,r,a=R();if(p(a))return m(a);s=setTimeout(v,(e=a-c,n=a-l,r=t-e,d?N(r,i-n):r))}function m(e){return(s=void 0,g&&r)?f(e):(r=a=void 0,o)}function b(){var e,n=R(),i=p(n);if(r=arguments,a=this,c=n,i){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):o;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=F(t)||0,A(n)&&(u=!!n.leading,i=(d="maxWait"in n)?W(F(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},b.flush=function(){return void 0===s?o:m(R())},b}(e,t,{leading:r,maxWait:t,trailing:a})};const D=new a.default,U=document.querySelector(".category-list"),J=document.querySelector(".list-item"),z=document.querySelector(".filter-input"),B=document.querySelector(".area"),G=document.querySelector(".ingrediends"),K=document.querySelector(".time"),Q=document.querySelector(".all-category-btn"),V=document.querySelector(".reset-filters");V.addEventListener("click",e=>{document.querySelector(".form-filters").reset(),D.setResetFilters(),Y()});for(let e=5;e<=120;e+=5){let t=document.createElement("option");t.value=e,t.innerHTML=e+" min",K.appendChild(t)}z.addEventListener("input",l(function(e){console.log(e.target.value.trim()),D.setSearchText(e.target.value.trim()),Y()},300)),G.addEventListener("change",function(e){console.log(e.target.value),D.setSearchIngredient(e.target.value),Y()}),B.addEventListener("change",function(e){console.log(e.target.selectedOptions[0].dataset.param),D.setSearchArea(e.target.selectedOptions[0].dataset.param),Y()}),U.addEventListener("click",function(e){console.log(e.target.dataset.recipeCategory),D.setCategory(e.target.dataset.recipeCategory),Y()}),K.addEventListener("change",function(e){console.log(e.target.value),D.setSearchTime(e.target.value),Y()}),Q.addEventListener("click",function(){D.setCategory(""),Y()}),D.getCategories().then(e=>{e.forEach(e=>{U.innerHTML+=`<li class="category-item-list"><button class="category-btn" data-recipe-category="${e.name}">${e.name}</button></li>`})}),D.getAreas().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,B.appendChild(t)})}),D.getIngredients().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,G.appendChild(t)})}),window.onresize=$(function(){Y()},500),Y();const X=`
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
`;function Y(){window.innerWidth<768?D.setPerPage(6):window.innerWidth<1280?D.setPerPage(8):D.setPerPage(9);let e=c.getLs();D.getRecipes().then(t=>{let n="";t.results.forEach(t=>{let r=t._id in e?"favorite":"unfavorite";n+=`    
            <li class="item-cards">
                <div class="shadow-on-img" data-recipe-id="${t._id}">
                    <img class="card-img" src="${t.preview}" />
                </div>
                ${X}
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
            `}),J.innerHTML=n,J.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){console.log(c.togleFav(e.target.closest("button").dataset.recipeId))})}),J.querySelectorAll(".main-see-recipe").forEach(e=>{e.addEventListener("click",Z)});let r=document.querySelector(".pagination");(function(e,t,n,r){e=Number(e),t=Number(t);let a=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let r=e-a;r<=e+a;r++)r>0&&r<=t&&(r===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${r}">_${r}_</button>`:r===e+a||r===e-a?n.innerHTML+=`<button class="main-pag-btn" data-topage="${r}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${r}">${r}</button>`);e===t?(n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),D.setPage(Number(e.target.dataset.topage)),r()})})}})(t.page,t.totalPages,r,Y),console.log(t)})}function Z(e){console.log(e.target.dataset.recipeId)}
//# sourceMappingURL=index.f09d63c7.js.map
