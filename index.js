/* empty css                      */import{a as m,S as f,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();let g=15,y=1;async function h(s){try{const r=new URLSearchParams({key:"51870132-66db1267a2a3823963ca5e362",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${g}`,page:`${y}`});return(await m.get(`https://pixabay.com/api/?${r}`)).data}catch(r){throw console.log("ERROR"),r}}let p=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.on("show.simplelightbox",function(){});const n=document.querySelector(".gallery");function L(s){const r=s.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="images-info">
          <p class = "images-txt">Likes: <span>${e.likes}</span></p>
          <p class = "images-txt">Views: <span>${e.views}</span></p>
          <p class = "images-txt">Comments: <span>${e.comments}</span></p>
          <p class = "images-txt">Downloads: <span>${e.downloads}</span></p>
        </div>
        </li>`).join("");n.insertAdjacentHTML("beforeend",r),n.innerHTML=r,p.refresh()}function w(){n.innerHTML=""}const u=document.querySelector(".loader");function b(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const $=document.querySelector(".loadmore-btn");function S(){$.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim().toLowerCase();w(),b(),S();try{const e=await h(r);if(c(),!e.hits||e.hits.length===0){l.error({title:"Error!!!",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(e.hits)}catch(e){c(),l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}d.reset()});
//# sourceMappingURL=index.js.map
