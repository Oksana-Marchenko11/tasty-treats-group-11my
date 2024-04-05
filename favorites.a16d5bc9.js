var e=globalThis,t={},n={},a=e.parcelRequire78be;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire78be=a),(0,a.register)("eMXxl",function(t,n){var a="Expected a function",i=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),g=Object.prototype.toString,f=Math.max,b=Math.min,v=function(){return p.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return i;if(m(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=l.test(e);return a||c.test(e)?s(e.slice(2),a?2:8):o.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(a);return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,o,l,c,s,d=0,u=!1,p=!1,g=!0;if("function"!=typeof e)throw TypeError(a);function y(t){var n=i,a=r;return i=r=void 0,d=t,l=e.apply(a,n)}function w(e){var n=e-s,a=e-d;return void 0===s||n>=t||n<0||p&&a>=o}function M(){var e,n,a,i=v();if(w(i))return L(i);c=setTimeout(M,(e=i-s,n=i-d,a=t-e,p?b(a,o-n):a))}function L(e){return(c=void 0,g&&i)?y(e):(i=r=void 0,l)}function T(){var e,n=v(),a=w(n);if(i=arguments,r=this,s=n,a){if(void 0===c)return d=e=s,c=setTimeout(M,t),u?y(e):l;if(p)return c=setTimeout(M,t),y(s)}return void 0===c&&(c=setTimeout(M,t)),l}return t=h(t)||0,m(n)&&(u=!!n.leading,o=(p="maxWait"in n)?f(h(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==c&&clearTimeout(c),d=0,i=s=r=c=void 0},T.flush=function(){return void 0===c?l:L(v())},T}(e,t,{leading:i,maxWait:t,trailing:r})}});const i=`
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
</svg>`;var o=a("eMXxl");const l=document.querySelector(".category-list-favorites"),c=document.querySelector(".favorites-list"),s=document.querySelector("#pagination"),d=document.querySelector(".favorites-wrap"),u=document.querySelector(".categories-box-favorites");var p=a("2JNBJ").default;let g=9,f=[],b="";function v(e){var t,n;let o,m;e||=1,e=Number(e);let h=p.getLs(),y=Object.values(h);f=[],h.length,c.innerHTML="",m=12,window.innerWidth<768&&(m=9),g=m,y.forEach(e=>{f.includes(e.category)||f.push(e.category)}),f.includes(b)||(b="");let w=(t=e,n=[],o=0,y.forEach(e=>{let a=1===t?0:(t-1)*g,i=1===t?g:t*g;if(!(b&&e.category===b||!b)||(o++,!(n.length<g&&o>a&&o<=i)))return;let l=document.createElement("li");l.className="item-cards",l.innerHTML=`
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
            `,i.appendChild(a)}return n.appendChild(i),n}(e.rating)),c.appendChild(l)}),o);l.innerHTML=f.sort().map(e=>`<li class="favourites-list-btn"><button class="category-btn all-tags" data-recipe-category="${e}">${e}</button></li>`).join(""),l.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",e=>{b=e.target.dataset.recipeCategory,console.log(e.target.dataset.recipeCategory),v()})}),document.querySelector(".all-tags").addEventListener("click",()=>{console.log("categories reset",b=""),v()}),u.addEventListener("scroll",e=>{u.scrollLeft;let t=u.clientWidth;u.scrollWidth<=t?u.style.overflowX="hidden":u.style.overflowX="scroll"}),c.querySelectorAll(".item-cards").length>0?(c.querySelectorAll(".add-fav-btn").forEach(e=>{e.addEventListener("click",function(e){let t=e.target.closest("button"),n=p.togleFav(t.getAttribute("data-recipe-id"));console.log("Result: "+n),n?t.innerHTML=r:t.innerHTML=i,v()})}),c.querySelectorAll(".main-see-recipe").forEach(e=>{let t=a("6o7gM");e.addEventListener("click",e=>{console.log(e.target.dataset),t.default.open(e.target.dataset.recipeId)})}),w>g?function(e,t,n,a){e=Number(e),t=Number(t);let i=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let a=e-i;a<=e+i;a++)a>0&&a<=t&&(a===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${a}">${a}</button>`:a===e+i||a===e-i?n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">${a}</button>`);e===t?(n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),a(Number(e.target.dataset.topage))})})}}(e,Math.ceil(w/g),s,v):s.innerHTML="",d.style.display="none",document.querySelector(".tags-container").style.display="flex"):(d.style.display="flex",document.querySelector(".tags-container").style.display="none")}window.onresize=o(function(){v()},500),v();
//# sourceMappingURL=favorites.a16d5bc9.js.map
