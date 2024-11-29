console.log("Iniciando carga de contenido"),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".submenu").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=new URL(window.location.href),n=e.getAttribute("data-url");window.location=`${o.protocol}//${o.host}/detalle.html?det=${n}`})})});
//# sourceMappingURL=index.69a0b189.js.map
