/* empty css                      */import{a as b,S as v,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();async function p(o,e){try{const t=new URLSearchParams({key:"51870132-66db1267a2a3823963ca5e362",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await b.get(`https://pixabay.com/api/?${t}`)).data}catch(t){throw console.log("ERROR"),t}}let f=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});f.on("show.simplelightbox",function(){});const d=document.querySelector(".gallery");function y(o){const e=o.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
        </a>
        <div class="images-info">
          <p class = "images-txt">Likes: <span>${t.likes}</span></p>
          <p class = "images-txt">Views: <span>${t.views}</span></p>
          <p class = "images-txt">Comments: <span>${t.comments}</span></p>
          <p class = "images-txt">Downloads: <span>${t.downloads}</span></p>
        </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",e),f.refresh()}function S(){d.innerHTML=""}const g=document.querySelector(".loader");function h(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}const u=document.querySelector(".loadmore-btn");function x(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const m=document.querySelector(".form");let s=1,c="";m.addEventListener("submit",async o=>{o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim().toLowerCase(),s=1,S(),h(),w();try{const e=await p(c,s);if(L(),!e.hits||e.hits.length===0){n.error({title:"Error!!!",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),e.totalHits>15&&x()}catch(e){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}m.reset()});u.addEventListener("click",async()=>{s+=1,h();try{const o=await p(c,s);y(o.hits);const e=d.querySelector("li");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}o.totalHits<=s*15&&(w(),n.info({title:"Sorry",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Failed to load more images."})}finally{L()}});
//# sourceMappingURL=index.js.map
