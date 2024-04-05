var e=globalThis,r={},o={},t=e.parcelRequire78be;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},e.parcelRequire78be=t),t.register;var a=t("fmRoT");const i=document.querySelector(".js-popular-recepies");(async function(){try{return(await (0,a.default).get("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).data}catch(e){throw console.log(e),e}})().then(e=>{i.innerHTML=e.map(({preview:e,title:r,description:o,popularity:t,_id:a})=>`
      <li class="popular-recepies-item">
        <a href="" class="popular-recepies-link link">
          <div class="thomb-popular-wrap">
            <div class="thomb-popular-img">
              <img src="${e}" alt="${r}">
            </div>
            <div class="thomb-popular-info">
              <h3 class="thomb-popular-title">${r}</h3>
              <p class="popular-recepie-descr">${o}</p>
            </div>
          </div>
          
        </a> 
      </li>
       
  `).join(""),console.log(e)}).catch(e=>{console.log(e)});
//# sourceMappingURL=index.5f514fbb.js.map
