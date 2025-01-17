
console.log('Iniciando carga de contenido');


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');

    mobileMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const facade = document.getElementById('iframe-facade');
    
    if(facade != null){
        facade.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/j93yo_Zr_bs?si=xxJXTO66c9E7RfK6'; // URL del contenido de terceros
            iframe.className = 'iframe-container';
            iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            facade.innerHTML = '';
            facade.appendChild(iframe);
        });
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.submenu');
    
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();            
            const url = new URL(window.location.href);
            // console.log('url', url.protocol);
            const contentUrl = link.getAttribute('data-url');
            // console.log("URL", contentUrl);
            window.location = `${ url.protocol }//${ url.host }/detalle.html?det=${contentUrl}`;
        });
    });
});

