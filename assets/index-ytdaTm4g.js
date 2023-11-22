(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="/city-gpt/logo.svg";document.querySelector("#app").innerHTML=`
  <div>
    <img src="${c}" class="logo"/>

    <iframe style="height:100vh;width:100vw"
            frameBorder="0" 
            src="https://widget.writesonic.com/CDN/index.html?service-base-url=https://api.botsonic.ai&token=664210e6-01e9-4149-a8ff-b9779841e546&base-origin=https://bot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https://bot.writesonic.com/4370752f-5062-4f22-b51f-2ba0ca96c902?t=share&workspace_id=32d2169b-bb41-4888-b4df-eaf31b381890" >
    </iframe>
  </div>
`;
