import{A as y,S as v,K as h,M as g,i as b}from"./assets/vendor-b30fa0f2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();document.addEventListener("click",function(){const e=document.querySelector(".mobile-menu-burger-btn"),t=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".mobile-menu-wrapper");document.querySelector(".mobile-menu-container").addEventListener("click",r=>{s.classList.remove("is-open")}),e&&t&&s&&(e.addEventListener("click",function(){o()}),t.addEventListener("click",function(){s.classList.remove("is-open")}));function o(){s.classList.contains("is-open")?s.classList.remove("is-open"):s.classList.add("is-open")}});document.addEventListener("click",function(e){const t=document.querySelector(".title-menu"),s=document.querySelector(".tablet-menu-wrapper");e.target===t||e.target.closest(".tablet-menu-link")?s.classList.toggle("is-open"):s.classList.remove("is-open"),document.querySelectorAll(".tablet-menu-link").forEach(function(r){r.addEventListener("click",function(){s.classList.add("visually-hidden")})}),document.querySelectorAll(".tablet-menu-item").forEach(function(r){r.addEventListener("click",function(){s.classList.remove("is-open")})})});function E(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Not found");return e.json()}).then(e=>e).catch(e=>{throw console.error(e),e})}const S=document.querySelector(".accordeon-list");new y(S,{duration:600,showMultiple:!0,openOnInit:[0]});const q=document.querySelectorAll(".accordeon-title");document.querySelector(".ac");q.forEach(e=>{e.addEventListener("click",function(){const t=e.querySelector(".title-icon"),s=e.nextElementSibling;t.classList.toggle("active"),s.classList.toggle("visually-hidden")})});const k=document.querySelector(".swiper-next"),C=document.querySelector(".about-me-swiper-container"),d=new v(".about-me-skills",{modules:[h,g],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});k.addEventListener("click",()=>{d.slideNext()});C.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?d.slideNext():d.slidePrev()});function x(e){const t=document.querySelector(".reviews-gallery");if(t.innerHTML="",!e||e.length===0){t.textContent="Not found";return}const s=e.map(n=>`<div class="swiper-slide reviews-list"><img class="reviews-image" src="${n.avatar_url}" alt="user photo" width=48px
  height=48px border-radius=10px/>
  <h3 class="reviews-author">${n.author}</h3>
  <p class="reviews-text">${n.review}</p></div>`).join("");t.insertAdjacentHTML("beforeend",s)}document.addEventListener("DOMContentLoaded",async()=>{try{const e=await E();x(e);const t=new v(".swiper-reviews",{breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchRatio:1,keyboard:{enabled:!0},loop:!1,on:{init:function(){f(this)},slideChange:function(){f(this)}}})}catch(e){console.error(e)}});function f(e){const t=document.querySelector(".section-reviews .swiper-button-prev"),s=document.querySelector(".section-reviews .swiper-button-next");e.isBeginning?t.classList.add("disabled"):t.classList.remove("disabled"),e.isEnd?s.classList.add("disabled"):s.classList.remove("disabled")}const i=document.querySelector(".modal-window"),M=document.querySelector(".modal-close");function T(){return i.classList.add("is-open")}function N(){return i.classList.remove("is-open")}M.addEventListener("click",N);document.addEventListener("keydown",e=>{if(e.key==="Escape")return i.classList.remove("is-open")});i.addEventListener("click",e=>{if(e.target===i)return i.classList.remove("is-open")});async function O(e){try{const t=await fetch("https://portfolio-js.b.goit.study/api/requests",e);if(!t.ok)throw new Error("Not found");return t.json()}catch(t){throw t}}const P=document.querySelector(".footer-form-order"),m=document.querySelector(".email"),a=document.querySelector(".message");m.addEventListener("change",function(){A(m)});function L(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.toLowerCase())}function A(e){w(e);const t=e.value,s=L(t),n=document.querySelector("label");s?(e.classList.remove("error-label"),e.classList.add("success-label"),p(e,"Success!","success"),n&&(n.classList.remove("error-label"),n.classList.add("success-label"))):(e.classList.remove("success-label"),e.classList.add("error-label"),p(e,"Invalid email, try again","error"),n&&(n.classList.remove("success-label"),n.classList.add("error-label")))}const u=document.createElement("label");function p(e,t,s){u.textContent=t,u.classList.add(s+"-label"),e.parentNode.children[0].after(u)}function w(e){const t=document.querySelector("label.success-label"),s=document.querySelector("label.error-label");t&&(t.innerHTML=""),s&&(s.innerHTML=""),e.classList.remove("error-label"),e.classList.remove("success-label")}a.addEventListener("change",I);function I(){a.value,a.value=R(a,20)}function R(e,t){const s=e.value;return s.length<=t?s:s.slice(0,t)+"..."}function V(){b.show({color:"red",message:"ERROR SERVER",position:"topCenter"})}P.addEventListener("submit",z);function z(e){e.preventDefault();const t=e.currentTarget.elements,s=t.email.value,n=t.comments.value;let o=L(s);const r={email:s.trim(),comment:n.trim()},c={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{o===!0&&n!=""?(O(c),T(),e.currentTarget.reset()):b.show({color:"red",message:"All form fields must be filled in",position:"topCenter"})}catch{V()}w(m)}const j=document.querySelectorAll(".faq-card");j.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("active")}));let B=document.querySelector(":root"),l=document.querySelector("button");l.addEventListener("click",()=>{B.classList.toggle("light-theme"),l.textContent==="SUN"?l.textContent="NIGHT":l.textContent="SUN"});
//# sourceMappingURL=commonHelpers.js.map
