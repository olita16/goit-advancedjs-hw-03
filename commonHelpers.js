import{a as f,i as y}from"./assets/vendor-8cce9181.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const S="https://api.thecatapi.com/v1/breeds",L="live_99SRprGcBXfKYNGHvvn3sqvYRx2GdYXKq7upUqiL81KLtOn9e6otrBDcmh4HWOiQ";f.defaults.headers.common["x-api-key"]=L;function v(){return f.get(S).then(o=>o.data)}function b(o){const c="https://api.thecatapi.com/v1/images/search";return f.get(c,{params:{breed_ids:o}}).then(i=>i.data)}document.addEventListener("DOMContentLoaded",function(){const o={breedSelect:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader")},c=new SlimSelect({select:o.breedSelect,placeholder:"Select a breed",showSearch:!0,searchText:"No matches found",searchPlaceholder:"Search...",searchHighlight:!0,searchFocus:!0,allowDeselect:!1,onChange:a});function i(e){o.catInfo.innerHTML=s(e)}function a(){const e=c.selected();o.catInfo.innerHTML="",e&&d(),b(e).then(n=>{n&&n.length>0?i(n):u("Oops! Something went wrong! Try reloading the page!")}).catch(n=>m(n)).finally(()=>{e&&(h(),p())})}function t(){return d(),v().then(e=>{e&&e.length>0?r(e):u("No cat breeds received or empty array!")}).catch(e=>m(e)).finally(()=>{h(),p()})}function r(e){c.setData(e.map(n=>({text:n.name,value:n.id})))}function s(e){return e.map(({url:n,breeds:g})=>{const[l]=g;return`
          <img src="${n}" alt="${l.name}" width="300">
          <div>
            <h3>${l.name}</h3>
            <p><strong>Description:</strong> ${l.description}</p>
            <p><strong>Temperament:</strong> ${l.temperament}</p>
          </div>
        `}).join("")}function d(){o.loader.style.display="block"}function h(){o.loader.style.display="none"}function p(){c.slim.container.style.display="block"}function m(e){console.error("Error:",e),u("Oops! Something went wrong! Try reloading the page!")}function u(e){y.error({title:"Error",message:e,position:"topRight"})}d(),t()});
//# sourceMappingURL=commonHelpers.js.map
