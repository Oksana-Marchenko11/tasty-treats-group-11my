var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire78be;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire78be=a);var o=a("eMXxl");const i=document.querySelector(".category-list-favorites"),r=document.querySelector(".favorites-list"),l=document.querySelector("#pagination"),s=document.querySelector(".favorites-text");let c=[],d=0,u=3,p="";// functions
function g(e){e||=1,e=Number(e);let t=a("2JNBJ").default,n=t.getLs(),o=[];c=[],d=0,u=window.innerWidth<768?2:3;let b=0;Object.keys(n).forEach(e=>{let t=n[e];//console.log(id, recipe);
d++,c.includes(t.category)||c.push(t.category)}),p=c.includes(p)?p:"",Object.keys(n).forEach(t=>{let a=n[t],i=1===e?0:(e-1)*u,r=1===e?u:e*u;(p&&a.category===p||!p)&&(b++,o.length<u&&b>i&&b<=r&&o.push(`<li class="item-cards">
                      <img class="card-img" data-recipe-id="${a._id}" src="${a.preview}"/>
                      <button class="add-fav-btn" data-recipe-id="${a._id}">love</button>
                      <span class="span-title">${a.title.toUpperCase()}</span>
                      <span class="span-descr">${a.description}</span>
                      <button class="main-see-recipe" data-recipe-id="${a._id}">See recipe</button>
                    </li>`))});let f=c.sort().map(e=>`<li class="favourites-list-btn"><button class="category-btn" data-recipe-category="${e}">${e}</button></li>`).join("");i.innerHTML=f,i.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",e=>{p=e.target.dataset.recipeCategory,console.log(e.target.dataset.recipeCategory),// renew favors
g()})}),document.querySelector(".all-tags").addEventListener("click",()=>{console.log("categories reset",p=""),// renew favors
g()}),o.length?(r.innerHTML=o.join(""),r.querySelectorAll(".add-fav-btn").forEach(n=>{n.addEventListener("click",function(n){n.preventDefault(),t.togleFav(n.target.dataset.recipeId),// console.log(res);
g(e);// if (res) togle class  'favorite' : 'unfavorite'
})}),r.querySelectorAll(".main-see-recipe").forEach(e=>{let t=a("6o7gM");e.addEventListener("click",e=>{console.log(e.target.dataset),t.default.open(e.target.dataset.recipeId)})}),b>u?// pagination
function(e,t,n,a){e=Number(e),t=Number(t);let o=window.innerWidth<768?2:3;if(console.log(e,t),t>1){n.innerHTML="",1===e?(// inactive prev b
n.innerHTML+='<button class="main-pag-btn" disabled><<</button>',n.innerHTML+='<button class="main-pag-btn" disabled><</button>'):(// active prev b
n.innerHTML+='<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>',n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e-1}"><</button>`);for(let a=e-o;a<=e+o;a++)a>0&&a<=t&&(a===e?n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green active"  data-topage="${a}">${a}</button>`:a===e+o||a===e-o?n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">...</button>`:n.innerHTML+=`<button class="main-pag-btn" data-topage="${a}">${a}</button>`);e===t?(// inactive forward b
n.innerHTML+='<button class="main-pag-btn" disabled>></button>',n.innerHTML+='<button class="main-pag-btn" disabled>>></button>'):(// active forward b
n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${e+1}">></button>`,n.innerHTML+=`<button class="main-pag-btn main-pag-btn-green" data-topage="${t}">>></button>`),n.querySelectorAll("[data-topage]").forEach(e=>{/* console.log(btn.dataset.topage) */e.addEventListener("click",function(e){e.preventDefault(),a(Number(e.target.dataset.topage))})})}}//# sourceMappingURL=favorites.2cdeb0a3.js.map
(e,Math.ceil(b/u),l,g):l.innerHTML="",s.style.display="none",document.querySelector(".favorites-tags").style.display="flex"):(s.style.display="flex",document.querySelector(".favorites-tags").style.display="none")}window.onresize=o(function(){g()},500),g();
//# sourceMappingURL=favorites.2cdeb0a3.js.map
