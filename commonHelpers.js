import{A as m,S as a,K as p,M as f}from"./assets/vendor-895db5b5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();document.addEventListener("click",function(){const e=document.querySelector(".mobile-menu-burger-btn"),n=document.querySelector(".mobile-menu-close-btn"),t=document.querySelector(".mobile-menu-wrapper");document.querySelector(".mobile-menu-container").addEventListener("click",s=>{t.classList.remove("is-open")}),e&&n&&t&&(e.addEventListener("click",function(){o()}),n.addEventListener("click",function(){t.classList.remove("is-open")}));function o(){t.classList.contains("is-open")?t.classList.remove("is-open"):t.classList.add("is-open")}});document.addEventListener("click",function(e){const n=document.querySelector(".title-menu"),t=document.querySelector(".tablet-menu-wrapper");e.target===n||e.target.closest(".tablet-menu-link")?t.classList.toggle("is-open"):t.classList.remove("is-open"),document.querySelectorAll(".tablet-menu-link").forEach(function(s){s.addEventListener("click",function(){t.classList.add("visually-hidden")})}),document.querySelectorAll(".tablet-menu-item").forEach(function(s){s.addEventListener("click",function(){t.classList.remove("is-open")})})});function v(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Not found");return e.json()}).then(e=>e).catch(e=>{throw console.error(e),e})}const w=document.querySelector(".accordeon-list");new m(w,{duration:600,showMultiple:!0,openOnInit:[0]});const y=document.querySelectorAll(".accordeon-title");document.querySelector(".ac");y.forEach(e=>{e.addEventListener("click",function(){const n=e.querySelector(".title-icon"),t=e.nextElementSibling;n.classList.toggle("active"),t.classList.toggle("visually-hidden")})});const L=document.querySelector(".swiper-next"),b=document.querySelector(".about-me-swiper-container"),u=new a(".about-me-skills",{modules:[p,f],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});L.addEventListener("click",()=>{u.slideNext()});b.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?u.slideNext():u.slidePrev()});function h(e){const n=document.querySelector(".reviews-gallery");if(n.innerHTML="",!e||e.length===0){n.textContent="Not found";return}const t=e.map(r=>`<div class="swiper-slide reviews-list"><img class="reviews-image" src="${r.avatar_url}" alt="user photo" width=48px
  height=48px border-radius=10px/>
  <h3 class="reviews-author">${r.author}</h3>
  <p class="reviews-text">${r.review}</p></div>`).join("");n.insertAdjacentHTML("beforeend",t)}document.addEventListener("DOMContentLoaded",async()=>{try{const e=await v();h(e);const n=new a(".swiper-reviews",{breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchRatio:1,keyboard:{enabled:!0},loop:!1,on:{init:function(){d(this)},slideChange:function(){d(this)}}})}catch(e){console.error(e)}});function d(e){const n=document.querySelector(".section-reviews .swiper-button-prev"),t=document.querySelector(".section-reviews .swiper-button-next");e.isBeginning?n.classList.add("disabled"):n.classList.remove("disabled"),e.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}const c=document.querySelector(".modal-window"),g=document.querySelector(".modal-close");function E(){return c.classList.remove("is-open")}g.addEventListener("click",E);document.addEventListener("keydown",e=>{if(e.key==="Escape")return c.classList.remove("is-open")});c.addEventListener("click",e=>{if(e.target===c)return c.classList.remove("is-open")});const S=document.querySelectorAll(".faq-card");S.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("active")}));let k=document.querySelector(":root"),i=document.querySelector("button");i.addEventListener("click",()=>{k.classList.toggle("light-theme"),console.log(i.textContent),i.textContent==="SUN"?i.textContent="NIGHT":i.textContent="SUN"});
//# sourceMappingURL=commonHelpers.js.map
