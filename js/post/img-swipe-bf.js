(()=>{const t=document.querySelectorAll(".markdown-body img"),e=Array.prototype.map.call(t,(t=>new Promise(((e,o)=>{const r=t.getAttribute("src"),a=new Image;a.onload=function(){const o=document.createElement("a");o.href=r,o.target="_blank",o.setAttribute("data-pswp-src",r),o.setAttribute("data-pswp-width",a.width),o.setAttribute("data-pswp-height",a.height);const n=t.parentNode;n.removeChild(t),o.appendChild(t),n.appendChild(o),e()},a.onerror=function(){o()},a.src=r}))));Promise.allSettled(e).then((()=>{new PhotoSwipeLightbox({gallery:"#board",children:"a[data-pswp-src]",pswpModule:()=>PhotoSwipe,wheelToZoom:!0}).init()}))})();