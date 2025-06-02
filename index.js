/* empty css                      */import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="50640550-6e86534d3ec4691f775b301fd",m="https://pixabay.com/api/";async function y(o,t=1,n=12){const s=`${m}?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}function g(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:f})=>`
    <a href="${n}" class="gallery__item">
      <img src="${t}" alt="${s}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${r}</p>
        <p><b>Comments:</b> ${i}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </a>
  `).join("")}function h(o){o.innerHTML=""}const b=document.querySelector("#search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let $=new d(".gallery a"),u=1;b.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Search query cannot be empty!"});return}u=1,h(l),c.style.display="block";try{const n=await y(t,u);if(c.style.display="none",n.hits.length===0){a.warning({title:"No Results",message:"Sorry, there are no images matching your search query."});return}l.innerHTML=g(n.hits),$.refresh()}catch{c.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=index.js.map
