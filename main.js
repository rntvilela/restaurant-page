(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div");n.textContent="Home",d.textContent="Menu",o.textContent="Contact",t.id="navbar",t.appendChild(n),t.appendChild(d),t.appendChild(o),e.appendChild(t),n.addEventListener("click",(()=>{const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.style.display="block",t.style.display="none",n.style.display="none"})),d.addEventListener("click",(()=>{const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.style.display="none",t.style.display="block",n.style.display="none"})),o.addEventListener("click",(()=>{const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.style.display="none",t.style.display="none",n.style.display="block"}))}(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="home",t.textContent="Home Page",e.appendChild(t)}(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="menu",t.textContent="Menu Page",t.style.display="none",e.appendChild(t)}(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="contact",t.textContent="Contact Page",t.style.display="none",e.appendChild(t)}()}))})();
//# sourceMappingURL=main.js.map