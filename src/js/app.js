console.log('Iniciando carga de contenido');

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-link');
    
    links.forEach(link => {
        
                
        link.addEventListener('click', event => {
            console.log("click en", link);
            event.preventDefault();
            
            links.forEach((link) => {link.classList.remove('active');});

            const contentUrl = event.target.getAttribute('href');
            const href = link.getAttribute('href');
            if(contentUrl == href){
                link.classList.add('active');
            }
            
        });
    });
});

/*
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.load-content');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const contentUrl = event.target.getAttribute('data-content');

            fetch(contentUrl)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('app').innerHTML = data;
                })
                .catch(error => console.error('Error cargando el contenido:', error));
        });
    });
});
*/