/* empty css                      */import{a as d,S as f,i}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function g(a){return d.get("https://pixabay.com/api/",{params:{key:"51870132-66db1267a2a3823963ca5e362",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.log("ERROR"),r})}let u=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});u.on("show.simplelightbox",function(){});const p=document.querySelector(".gallery");function h(a){const r=a.map(e=>`<li class="gallery-item">
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
        </li>`).join("");p.innerHTML=r,u.refresh()}function y(){p.innerHTML=""}const m=document.querySelector(".loader");function L(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim().toLowerCase();y(),L(),g(r).then(e=>{if(l(),!e.hits||e.hits.length===0){i.error({title:"Error!!!",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e.hits)}).catch(e=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again later."})}),c.reset()});
//# sourceMappingURL=index.js.map
