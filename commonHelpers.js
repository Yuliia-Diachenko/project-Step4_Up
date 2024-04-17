import{A as p,S as u,K as f,M as w}from"./assets/vendor-1267bea4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function m(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Not found");return e.json()}).then(e=>e).catch(e=>{throw console.error(e),e})}const v=document.querySelector(".accordeon-list");new p(v,{duration:600,showMultiple:!0,openOnInit:[0]});const y=document.querySelectorAll(".accordeon-title");y.forEach(e=>{e.addEventListener("click",function(){const o=e.querySelector(".title-icon"),s=e.nextElementSibling;console.log(s),o.classList.toggle("is-active"),s.classList.toggle("visually-hidden")})});const h=document.querySelector(".swiper-next"),d=new u(".about-me-skills",{modules:[f,w],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});h.addEventListener("click",()=>{d.slideNext()});document.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?d.slideNext():d.slidePrev()});function g(e){const o=document.querySelector(".reviews-gallery");if(o.innerHTML="",!e||e.length===0){o.textContent="Not found";return}const s=e.map(n=>`<div class="swiper-slide reviews-list"><img class="reviews-image" src="${n.avatar_url}" alt="user photo" width=48px
  height=48px border-radius=10px/>
  <h3 class="reviews-author">${n.author}</h3>
  <p class="reviews-text">${n.review}</p></div>`).join("");o.insertAdjacentHTML("beforeend",s)}document.addEventListener("DOMContentLoaded",async()=>{try{const e=await m();g(e);const o=new u(".swiper-reviews",{breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchRatio:1,keyboard:{enabled:!0},loop:!1,on:{init:function(){a(this)},slideChange:function(){a(this)}}})}catch(e){console.error(e)}});function a(e){const o=document.querySelector(".section-reviews .swiper-button-prev"),s=document.querySelector(".section-reviews .swiper-button-next");e.isBeginning?o.classList.add("disabled"):o.classList.remove("disabled"),e.isEnd?s.classList.add("disabled"):s.classList.remove("disabled")}const c=document.querySelector(".modal-window"),b=document.querySelector(".modal-close");function L(){return c.classList.remove("is-open")}b.addEventListener("click",L);document.addEventListener("keydown",e=>{if(e.key==="Escape")return c.classList.remove("is-open")});c.addEventListener("click",e=>{if(e.target===c)return c.classList.remove("is-open")});const E=document.querySelectorAll(".faq-card");E.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("active")}));let S=document.querySelector(":root"),i=document.querySelector("button");i.addEventListener("click",()=>{S.classList.toggle("light-theme"),console.log(i.textContent),i.textContent==="SUN"?i.textContent="NIGHT":i.textContent="SUN"});
//# sourceMappingURL=commonHelpers.js.map
