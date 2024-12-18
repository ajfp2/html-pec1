
console.log('Iniciando carga de contenido');


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');

    mobileMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
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

