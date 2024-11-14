

const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get("det");


import dataF from '../data/fiesta.json';
import dataG from '../data/gastronomia.json';
import dataC from '../data/cultura.json';
import dataR from '../data/ruchey.json';

let data = "";

switch(content){
    case "fiesta": data = dataF; break;
    case "gastronomia": data = dataG; break;
    case "cultura": data = dataC; break;
    case "ruchey": data = dataR; break;
}
document.addEventListener('DOMContentLoaded', () => {

    // Llenamos los datos del html
    const titulo = document.getElementById("title");
    const subtitulo = document.getElementById("subtitle");

    const fecha = document.getElementById("fecha");
    const media = document.getElementById("media");

    const tituloLista = document.getElementById("tituloLista");
    const lista = document.getElementById("lista");

    const parrafo1 = document.getElementById("parrafo1");
    const parrafo2 = document.getElementById("parrafo2");
    const parrafo3 = document.getElementById("parrafo3");

    

    titulo.innerHTML = data.titulo;
    subtitulo.innerHTML = data.subtitulo;

    fecha.innerHTML = data.fecha;
    media.src = data.media;
    tituloLista.innerHTML = data.tituloLista;

    let items = "";
    data.lista.forEach(li => {
        items += `<li>${li.acto} ${li.dia}</li>`;
    });
    lista.innerHTML = items;

    parrafo1.innerHTML = data.parrafo1;
    parrafo2.innerHTML = data.parrafo2;
    parrafo3.innerHTML = data.parrafo3;
});
