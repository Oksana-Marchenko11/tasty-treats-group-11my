document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".mobile-menu"),t=document.getElementById("hamburger"),o=document.getElementById("js-close-menu"),i=document.querySelector("#desktop-switch"),l=document.querySelector("#mobile-switch"),s=document.body;t.addEventListener("click",d),o.addEventListener("click",d),i.addEventListener("click",()=>r(i,l)),l.addEventListener("click",()=>r(i,l));let a=!1,c="true"===localStorage.getItem("isDarkMode");function d(){a?(e.classList.remove("visible"),e.style.transform="translateX(100%)",setTimeout(()=>{e.style.visibility="hidden"},300),document.body.classList.remove("no-scroll"),a=!1):(e.style.visibility="visible",e.classList.add("visible"),e.style.transform="translateX(0%)",document.body.classList.add("no-scroll"),a=!0)}function r(e,t){c=!c,localStorage.setItem("isDarkMode",c),n(e,c),n(t,c),u(c),y()}function n(e,t){let o=e.querySelector("#switch-circle-desktop")||e.querySelector("#switch-circle-mobile"),i=e.querySelector("#switch-rect-desktop")||e.querySelector("#switch-rect-mobile");t?(m(o,"cx",18,44,300),i.setAttribute("fill",`url(#paint0_linear_${"desktop-switch"===e.id?"desktop":"mobile"})`),s.classList.add("dark-mode")):(m(o,"cx",44,18,300),i.setAttribute("fill","#CECDCD"),s.classList.remove("dark-mode"))}function m(e,t,o,i,l){let s=performance.now();requestAnimationFrame(function a(c){let d=Math.min((c-s)/l,1);e.setAttribute(t,o+(i-o)*d),d<1&&requestAnimationFrame(a)})}function u(t){t?e.style.backgroundColor="var(--dark-modal-bg)":e.style.backgroundColor="var(--primary-brend)"}function y(){let e=document.getElementById("mobile-home-link"),t=document.getElementById("mobile-favorites-link");"home-page"===document.body.id?(e.classList.add("active-page"),e.style.fontWeight="500",e.style.color=c?"var(--primary-brend)":"var(--dark-title-color)",t.classList.remove("active-page"),t.style.fontWeight="normal",t.style.color="#F8F8F8"):"favorites-page"===document.body.id&&(t.classList.add("active-page"),t.style.fontWeight="500",t.style.color=c?"var(--primary-brend)":"var(--dark-title-color)",e.classList.remove("active-page"),e.style.fontWeight="normal",e.style.color="#F8F8F8")}n(i,c),n(l,c),u(c),y(),"home-page"===document.body.id?(document.getElementById("home-link").classList.add("active-page"),document.getElementById("mobile-home-link").classList.add("active-page")):"favorites-page"===document.body.id&&(document.getElementById("favorites-link").classList.add("active-page"),document.getElementById("mobile-favorites-link").classList.add("active-page"))});
//# sourceMappingURL=index.7c17bda2.js.map
