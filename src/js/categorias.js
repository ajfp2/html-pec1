document.addEventListener('DOMContentLoaded', () => {
    console.log("LINKS");
    fetch('data/fiesta.json')
        .then(response => response.text())
        .then(data => {
            console.log("DATA JOSN", data);
            
            // document.getElementById('app-main').innerHTML = data;
        })
        .catch(error => console.error('Error cargando el contenido:', error));

});