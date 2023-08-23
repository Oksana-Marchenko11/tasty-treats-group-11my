var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=e.parcelRequire78be;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequire78be=s);var a=s("fmRoT");const l=document.querySelector(".js-popular-recepies"),n=document.body;function r(){let e=document.querySelector(".js-modal.is-active");e&&(e.remove(),n.classList.remove("no-scroll"))}(async function(){try{let e=await (0,a.default).get("https://tasty-treats-backend.p.goit.global/api/recipes/popular");return e.data}catch(e){throw console.log(e),e}})().then(e=>{l.innerHTML=e.map(({preview:e,title:t,description:i,_id:s})=>`
      <li class="popular-recepies-item" data-id="${s}">
          <div class="thomb-popular-wrap">
            <div class="thomb-popular-img">
              <img src="${e}" alt="${t}">
            </div>
            <div class="thomb-popular-info">
              <h3 class="thomb-popular-title points-title">${t}</h3>
              <p class="popular-recepie-descr points-desc">${i}</p>
            </div>
          </div>
      </li>
       
  `).join(""),console.log(e)}).catch(e=>{console.log(e)}),l.addEventListener("click",function(e){e.preventDefault();let t=e.target.closest(".popular-recepies-item").dataset.id;!function(e){fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`).then(e=>e.json()).then(e=>{let{title:t,description:i,area:s,category:a,preview:l,rating:o,time:c,youtube:d,ingredients:{desc:p,id:u,measure:g,name:m},tags:v}=e;console.log(e),console.log(i),function({title:e,description:t,area:i,category:s,thumb:a,instructions:l,preview:n,rating:o,time:c,youtube:d,ingredients:{desc:p,id:u,measure:g,name:m},tags:v}){let b=document.createElement("div");b.classList.add("js-modal"),b.classList.add("is-active"),b.innerHTML=`
      <div class="modal-bg">
        <div class="modal-body">
            <div class="modal-close">
                <button type="button" class="modal-close-btn">x
                    <svg class="modal-close-icon" width="32" height="32">
                        <use href="./img/recet-x.svg"></use>
                     </svg>
                </button>
            </div>
            <div class="modal-content">
                <div class="oder-modal-title">
                    <h2 class="modal-recepi-title">${e}</h2>
                    <div class="recipe-video-content">
                        <div class="recepi-video-wrap">
                        <img src="${n}" alt="${e}" class="video-img"> 
                        </div>
                        <div class="youtube-btn">
                            <a href="${d}" class="youtube-link" target="_blank" rel="noopener noreferrer nofollow">
                                <svg class="youtube-icon" width="32" height="32">
                                    <use href="./img/youtube.svg"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="order"> 
                    <div class="recepi-rating-wrap">
                        <div class="rating-stars-wrap">
                            <label for="" class="recepi-rating-value">${o}</label>
                                <input type="radio" class="rating-start-item" value="1">
                                <input type="radio" class="rating-start-item" value="2">
                                <input type="radio" class="rating-start-item" value="3">
                                <input type="radio" class="rating-start-item" value="4">
                                <input type="radio" class="rating-start-item" value="5">
                        </div>
                        <p class="recepi-time-cook">${c} min</p>
                    </div>
                    <div class="recepi-ingredients-list list">
                        <li class="recepi-ingredients-item">
                            <p class="ingredient-name">Banana</p>
                            <p class="ingredient-mesure">1 large</p>
                        </li>
                        <li class="recepi-ingredients-item">
                            <p class="ingredient-name">Eggs</p>
                            <p class="ingredient-mesure">2 medium</p>
                        </li>
                        <li class="recepi-ingredients-item">
                            <p class="ingredient-name">Oil</p>
                            <p class="ingredient-mesure">1 tsp</p>
                        </li>
                        <li class="recepi-ingredients-item">
                            <p class="ingredient-name">Pecan nuts</p>
                            <p class="ingredient-mesure">25 tsp</p>
                        </li>
                        <li class="recepi-ingredients-item">
                            <p class="ingredient-name">Baking Powder</p>
                            <p class="ingredient-mesure">Pinch</p>
                        </li>
                    </div>
                    <ul class="recepi-tags-list list">
                        <li class="recepi-tags-item">
                            <button type="button" class="recepi-tags-btn">#Breakfast</button>
                        </li>
                        <li class="recepi-tags-item">
                            <button type="button" class="recepi-tags-btn">#Desert</button>
                        </li>
                        <li class="recepi-tags-item">
                            <button type="button" class="recepi-tags-btn">#Sweet</button>
                        </li>
                    </ul>
                </div>
                <p class="modal-recepi-description">${l}</p>
                <div class="modal-recepi-buttons">
                    <button type="button" class="add-favorit">Add to favorite</button>
                    <button type="button" class="give-rating">Give rating</button>
                </div>
            </div>
        </div>
    </div>
      `,document.body.appendChild(b);let y=b.querySelector(".modal-close-btn");y.addEventListener("click",r)}(e),n.classList.add("no-scroll")}).catch(e=>{console.log(e)})}(t)}),window.addEventListener("keydown",e=>{"Escape"===e.key&&r()}),window.addEventListener("click",e=>{(e.target.classList.contains("modal-close-btn")||e.target.classList.contains("modal-bg"))&&r()});
//# sourceMappingURL=index.8f096777.js.map
