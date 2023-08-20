var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},l={},r=e.parcelRequire78be;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in l){var r=l[e];delete l[e];var i={id:e,exports:{}};return o[e]=i,r.call(i.exports,i,i.exports),i.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,o){l[e]=o},e.parcelRequire78be=r);var i=r("fmRoT");const t=document.querySelector(".js-popular-recepies");(async function(){try{let e=await (0,i.default).get("https://tasty-treats-backend.p.goit.global/api/recipes/popular");return e.data}catch(e){throw console.log(e),e}})().then(e=>{t.innerHTML=e.map(({preview:e,title:o,description:l,popularity:r,_id:i})=>`
      <li class="popular-recepies-item">
        <a href="" class="popular-recepies-link link">
          <div class="thomb-popular-wrap">
            <div class="thomb-popular-img">
              <img src="${e}" alt="${o}">
            </div>
            <div class="thomb-popular-info">
              <h3 class="thomb-popular-title">${o}</h3>
              <p class="popular-recepie-descr">${l}</p>
            </div>
          </div>
          
        </a> 
      </li>
       
  `).join(""),console.log(e)}).catch(e=>{console.log(e)});
//# sourceMappingURL=index.c4fedff1.js.map
