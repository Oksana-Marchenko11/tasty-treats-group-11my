var e=globalThis,t={},n={},r=e.parcelRequire78be;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire78be=r),r.register;var i=r("6kfMw"),o={},a=0/0,c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,g=d||p||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return g.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return a;if(h(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var r=l.test(e);return r||f.test(e)?s(e.slice(2),r?2:8):u.test(e)?a:+e}o=function(e,t,n){var r,i,o,a,c,u,l=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function g(e){var n=e-u,r=e-l;return void 0===u||n>=t||n<0||s&&r>=o}function v(){var e,n,r,i=b();if(g(i))return j(i);c=setTimeout(v,(e=i-u,n=i-l,r=t-e,s?y(r,o-n):r))}function j(e){return(c=void 0,d&&r)?p(e):(r=i=void 0,a)}function E(){var e,n=b(),o=g(n);if(r=arguments,i=this,u=n,o){if(void 0===c)return l=e=u,c=setTimeout(v,t),f?p(e):a;if(s)return c=setTimeout(v,t),p(u)}return void 0===c&&(c=setTimeout(v,t)),a}return t=T(t)||0,h(n)&&(f=!!n.leading,o=(s="maxWait"in n)?m(T(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=i=c=void 0},E.flush=function(){return void 0===c?a:j(b())},E};var j={},E="Expected a function",O=0/0,x=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,L=/^0o[0-7]+$/i,M=parseInt,$="object"==typeof e&&e&&e.Object===Object&&e,q="object"==typeof self&&self&&self.Object===Object&&self,C=$||q||Function("return this")(),W=Object.prototype.toString,P=Math.max,H=Math.min,D=function(){return C.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==W.call(t))return O;if(I(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=I(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(x,"");var r=S.test(e);return r||L.test(e)?M(e.slice(2),r?2:8):w.test(e)?O:+e}j=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(E);return I(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),function(e,t,n){var r,i,o,a,c,u,l=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw TypeError(E);function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function g(e){var n=e-u,r=e-l;return void 0===u||n>=t||n<0||s&&r>=o}function v(){var e,n,r,i=D();if(g(i))return m(i);c=setTimeout(v,(e=i-u,n=i-l,r=t-e,s?H(r,o-n):r))}function m(e){return(c=void 0,d&&r)?p(e):(r=i=void 0,a)}function y(){var e,n=D(),o=g(n);if(r=arguments,i=this,u=n,o){if(void 0===c)return l=e=u,c=setTimeout(v,t),f?p(e):a;if(s)return c=setTimeout(v,t),p(u)}return void 0===c&&(c=setTimeout(v,t)),a}return t=_(t)||0,I(n)&&(f=!!n.leading,o=(s="maxWait"in n)?P(_(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=i=c=void 0},y.flush=function(){return void 0===c?a:m(D())},y}(e,t,{leading:r,maxWait:t,trailing:i})};const k=new i.default,F=document.querySelector(".category-list"),R=document.querySelector(".list-item"),A=document.querySelector(".filter-input"),N=document.querySelector(".area"),U=document.querySelector(".ingrediends"),z=document.querySelector(".time"),B=document.querySelector(".all-category-btn");for(let e=5;e<=120;e+=5){let t=document.createElement("option");t.value=e,t.innerHTML=e+" min",z.appendChild(t)}function G(){window.innerWidth<768?k.setPerPage(6):window.innerWidth<1280?k.setPerPage(8):k.setPerPage(9)}function J(){k.getRecipes().then(e=>{let t="";e.results.forEach(e=>{t+=`<li class="item-cards"><img class="card-img" src="${e.preview}"/></li>`}),R.innerHTML=t,console.log(e)})}A.addEventListener("input",o(function(e){console.log(e.target.value.trim()),k.setSearchText(e.target.value.trim()),J()},300)),U.addEventListener("change",function(e){console.log(e.target.value),k.setSearchIngredient(e.target.value),J()}),N.addEventListener("change",function(e){console.log(e.target.selectedOptions[0].dataset.param),k.setSearchArea(e.target.selectedOptions[0].dataset.param),J()}),F.addEventListener("click",function(e){console.log(e.target.dataset.recipeCategory),k.setCategory(e.target.dataset.recipeCategory),J()}),z.addEventListener("change",function(e){console.log(e.target.value),k.setSearchTime(e.target.value),J()}),B.addEventListener("click",function(){k.setCategory(""),J()}),k.getCategories().then(e=>{e.forEach(e=>{F.innerHTML+=`<li class="category-item-list"><button class="category-btn" data-recipe-category="${e.name}">${e.name}</button></li>`})}),k.getAreas().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,N.appendChild(t)})}),k.getIngredients().then(e=>{e.forEach(e=>{let t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,U.appendChild(t)})}),window.onresize=j(function(){G(),J()},500),G(),J();
//# sourceMappingURL=index.35ae1589.js.map
