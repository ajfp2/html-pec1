
// const links = document.querySelectorAll('.menu-link');
// const contentUrl = document.getElementById("main-nav").getAttribute('data-url');

const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get("det");


import dataF from '../data/fiesta.json';
import dataG from '../data/gastronomia.json';
import dataC from '../data/cultura.json';
import dataR from '../data/ruchey.json';

let data = "";

switch(content){
    case "fiesta":         
        data = dataF;
    break;
    case "gastronomia": 
        data = dataG;
    break;
    case "cultura": 
        data = dataC;
    break;
    case "ruchey": 
        data = dataR;
    break;
}

document.addEventListener('DOMContentLoaded', () => {

    // Llenamos los datos del html
    const titulo = document.getElementById("title");
    const subtitulo = document.getElementById("subtitle");

    const fotoDestacada = document.getElementById("imgDestacada");

    // const card1 = document.getElementById("card_det_1");
    // const card2 = document.getElementById("card_det_2");
    // const card3 = document.getElementById("card_det_3");

    const fecha = document.getElementById("fecha");
    const facadeJS = document.getElementById("media");

    const tituloLista = document.getElementById("tituloLista");
    const lista = document.getElementById("lista");

    const parrafo1 = document.getElementById("parrafo1");
    const parrafo2 = document.getElementById("parrafo2");
    const parrafo3 = document.getElementById("parrafo3");    

    // METEMOS LOS DATOS EN EL DOM **********************************
    titulo.innerHTML = data.titulo;
    subtitulo.innerHTML = data.subtitulo;

  
    data.fotoDestacada.sources.forEach((sc, index) => {

        let url = null;
        switch(content){
            case "fiesta":         
                if(index == 0){ //480
                    url = new URL("../images/cards/mic_3x.jpg?as=webp", import.meta.url);
                } else if(index == 1) { //960
                    url = new URL("../images/cards/mic_2x.jpg?as=webp", import.meta.url);
                } else {//otras
                    url = new URL("../images/cards/mic.webp?height=750", import.meta.url);
                }
            break;
            case "gastronomia": 
                if(index == 0){ //480
                    url = new URL("../images/cards/minchos_2x.jpg?as=webp", import.meta.url);
                } else if(index == 1) { //960
                    url = new URL("../images/cards/minchos_2x.jpg?as=webp", import.meta.url);
                } else {//otras
                    url = new URL("../images/cards/minchos_3x.jpg", import.meta.url);
                }
            break;
            case "cultura": 
                if(index == 0){ //480
                    url = new URL("../images/cards/algar_3x.jpg", import.meta.url);
                } else if(index == 1) { //960
                    url = new URL("../images/cards/algar_2x.jpg", import.meta.url);
                } else {//otras
                    url = new URL("../images/cards/algar.jpg", import.meta.url);
                }
            break;
            case "ruchey": 
                if(index == 0){ //480
                    url = new URL("../images/cards/ruchey_3x.jpg?as=webp", import.meta.url);
                } else if(index == 1) { //960
                    url = new URL("../images/cards/ruchey_2x.jpg?as=webp", import.meta.url);
                } else {//otras
                    url = new URL("../images/cards/ruchey.jpg?width=1200&as=webp", import.meta.url);
                }
            break;
        }
        fotoDestacada.children[index].srcset = url;        
        fotoDestacada.children[index].type = sc.type;
        fotoDestacada.children[index].media = sc.media;
        if(index == 2){
            fotoDestacada.children[2].src = url;
            fotoDestacada.children[2].alt = sc.alt;
        }
    });

    
    data.fotos.forEach((ft, index) => {
        const card = document.getElementById(`card_det_${index + 1}`);
        console.log(card);
        let urlFoto = null;
        let figure = card.children[0];
        switch(content){
            case "fiesta":
                if(index == 0) urlFoto = new URL("../images/cards/mic.jpg?as=webp", import.meta.url);
                else if(index == 1) urlFoto = new URL("../images/cards/tiroteo.jpg?as=webp", import.meta.url);
                else urlFoto = new URL("../images/cards/mic_3x.jpg?as=webp", import.meta.url);
            break;
            case "gastronomia": 
                if(index == 0) urlFoto = new URL("../images/cards/crosta.jpg?as=webp", import.meta.url);
                else if(index == 1) urlFoto = new URL("../images/cards/arroz.jpg?as=webp", import.meta.url);
                else urlFoto = new URL("../images/cards/olleta.jpg?as=webp", import.meta.url);
            break;
            case "cultura": 
                if(index == 0) urlFoto = new URL("../images/cards/portal.jpg?as=webp", import.meta.url);
                else if(index == 1) urlFoto = new URL("../images/cards/fort.jpg?as=webp", import.meta.url);
                else urlFoto = new URL("../images/cards/algar.jpg?as=webp", import.meta.url);
            break;
            case "ruchey": 
                if(index == 0) urlFoto = new URL("../images/cards/aguacate.jpg?as=webp", import.meta.url);
                else if(index == 1) urlFoto = new URL("../images/cards/pitaya.avif", import.meta.url);
                else urlFoto = new URL("../images/cards/cerveza.jpg?as=webp", import.meta.url);
            break;
        }

        figure.children[0].src = urlFoto;
        figure.children[0].alt = ft.alt;
        let body = card.children[1];
        body.children[0].innerHTML = ft.alt;
        body.children[1].innerHTML = ft.desc;

    });




    fecha.innerHTML = data.fecha;

    if(facadeJS != null){
        facadeJS.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = data.media; // URL del contenido de terceros
            iframe.className = 'iframe-container';

            iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            facadeJS.innerHTML = '';
            facadeJS.appendChild(iframe);
        });
    }

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
