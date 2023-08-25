var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire78be;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire78be=a);var i=a("eMXxl");const r=document.querySelector(".category-list-favorites"),o=document.querySelector(".favorites-list"),l=document.querySelector("#pagination"),s=document.querySelector(".favorites-text");let c=[],d=0,u=3,p="";window.onresize=i(function(){b()},500);const g=`
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
</svg>`;// functions
function b(e){e||=1,e=Number(e);let t=a("2JNBJ").default,n=t.getLs(),i=[];c=[],d=0,u=window.innerWidth<768?2:3;let m=0;Object.keys(n).forEach(e=>{let t=n[e];//console.log(id, recipe);
d++,c.includes(t.category)||c.push(t.category)}),p=c.includes(p)?p:"",Object.keys(n).forEach(t=>{let a=n[t],r=1===e?0:(e-1)*u,l=1===e?u:e*u;if((p&&a.category===p||!p)&&(m++,i.length<u&&m>r&&m<=l)){let e=document.createElement("li");e.className="item-cards",e.innerHTML=`
                    <div class="shadow-on-img" data-recipe-id="${a._id}">
                        <img class="card-img" src="${a.preview}" />
                    </div>
                    <button class="add-fav-btn"
                            data-recipe-id="${a._id}">
                        ${g}
                    </button>
                    <span class="span-title" data-recipe-id="${a._id}">
                        ${a.title.toUpperCase()}
                    </span>
                    <span class="span-descr" data-recipe-id="${a._id}">
                        ${a.description}
                    </span>
                    <button class="main-see-recipe" data-recipe-id="${a._id}">
                        See recipe
                    </button>
                `,e.appendChild(function(e){let t=`
        <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
    `,n=document.createElement("div"),a=(Math.round(10*e)/10).toFixed(1);n.className="rating-recipe",n.innerHTML=`<span class="rating-number-recipe">${a}</span>`;let i=document.createElement("ul");i.className="stars";for(let n=1;n<=5;n++){let a=document.createElement("li");n<=e?a.innerHTML=`
                <svg class="star star-filled" viewBox="0 0 34 32" data-rating="${n}" width="16" height="16">
                    ${t}
                </svg>            
            `:a.innerHTML=`
                <svg class="star" viewBox="0 0 34 32" data-rating="${n}" width="16" height="16">
                    ${t}
                </svg>            
            `,i.appendChild(a)}return n.appendChild(i),n}(a.rating)),o.appendChild(e)}});let f=c.sort().map(e=>`<li class="favourites-list-btn"><button class="category-btn" data-recipe-category="${e}">${e}</button></li>`).join("");r.innerHTML=f,r.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",e=>{p=e.target.dataset.recipeCategory,console.log(e.target.dataset.recipeCategory),// renew favors
b()})}),document.querySelector(".all-tags").addEventListener("click",()=>{console.log("categories reset",p=""),// renew favors
b()}),o.querySelectorAll(".item-cards").length?(o.querySelectorAll(".add-fav-btn").forEach(n=>{n.addEventListener("click",function(n){n.preventDefault(),t.togleFav(n.target.dataset.recipeId),// console.log(res);
b(e);// if (res) togle class  'favorite' : 'unfavorite'
})}),o.querySelectorAll(".main-see-recipe").forEach(e=>{let t=a("6o7gM");e.addEventListener("click",e=>{console.log(e.target.dataset),t.default.open(e.target.dataset.recipeId)})}),m>u?// pagination
function(e,t,n,a){e=Number(e),t=Number(t);let i=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(// inactive prev b
n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(// active prev b
n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let a=e-i;a<=e+i;a++)a>0&&a<=t&&(a===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${a}">${a}</button>`:a===e+i||a===e-i?n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">${a}</button>`);e===t?(// inactive forward b
n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(// active forward b
n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{/* console.log(btn.dataset.topage) */e.addEventListener("click",function(e){e.preventDefault(),a(Number(e.target.dataset.topage))})})}}//# sourceMappingURL=favorites.721c45de.js.map
(e,Math.ceil(m/u),l,b):l.innerHTML="",s.style.display="none",document.querySelector(".favorites-tags").style.display="flex"):(s.style.display="flex",document.querySelector(".favorites-tags").style.display="none")}b();
//# sourceMappingURL=favorites.721c45de.js.map
