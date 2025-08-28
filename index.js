/* empty css                      */import{a as b,S as v,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function m(a,e){try{const r=new URLSearchParams({key:"51870132-66db1267a2a3823963ca5e362",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await b.get(`https://pixabay.com/api/?${r}`)).data}catch(r){throw console.log("ERROR"),r}}let p=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.on("show.simplelightbox",function(){});const f=document.querySelector(".gallery");function y(a){const e=a.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="images-info">
          <p class = "images-txt">Likes: <span>${r.likes}</span></p>
          <p class = "images-txt">Views: <span>${r.views}</span></p>
          <p class = "images-txt">Comments: <span>${r.comments}</span></p>
          <p class = "images-txt">Downloads: <span>${r.downloads}</span></p>
        </div>
        </li>`).join("");f.insertAdjacentHTML("beforeend",e),p.refresh()}function S(){f.innerHTML=""}const g=document.querySelector(".loader");function h(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}const d=document.querySelector(".loadmore-btn");function x(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const u=document.querySelector(".form");let s=1,c="";u.addEventListener("submit",async a=>{a.preventDefault(),c=a.currentTarget.elements["search-text"].value.trim().toLowerCase(),s=1,S(),h(),w();try{const e=await m(c,s);if(L(),!e.hits||e.hits.length===0){n.error({title:"Error!!!",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),e.totalHits>15&&x()}catch(e){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}u.reset()});d.addEventListener("click",async()=>{s+=1,h();try{const a=await m(c,s);y(a.hits);const e=document.querySelector(".");a.totalHits<=s*15&&(w(),n.info({title:"Sorry",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Failed to load more images."})}finally{L()}});
//# sourceMappingURL=index.js.map
