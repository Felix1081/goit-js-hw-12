/* empty css                      */import{a as d,S as f,i}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function g(a,s){try{return(await d.get("https://pixabay.com/api/",{params:{key:"51870132-66db1267a2a3823963ca5e362",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:`${s}`}})).data}catch(e){throw console.log("ERROR"),e}}let p=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.on("show.simplelightbox",function(){});const u=document.querySelector(".gallery");function y(a){const s=a.map(e=>`<li class="gallery-item">
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
        </li>`).join("");u.innerHTML=s,p.refresh()}function h(){u.innerHTML=""}const m=document.querySelector(".loader");function L(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const s=a.currentTarget.elements["search-text"].value.trim().toLowerCase();h(),L(),g(s).then(e=>{if(l(),!e.hits||e.hits.length===0){i.error({title:"Error!!!",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits)}).catch(e=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again later."})}),c.reset()});
//# sourceMappingURL=index.js.map
