let nodoPlay= document.getElementById("bPlay");
let nodoPause= document.getElementById("bPause");
let videoNodo= document.querySelector("video");
let textoDur= document.getElementById("videoTxt");
let imagen1= document.getElementById("img1");
let imagen2= document.getElementById("img2");
let imagen3= document.getElementById("img3");
let dropZone1= document.getElementById("zona1");
let dropZone2= document.getElementById("zona2");
let dropZone3= document.getElementById("zona3");
let nodoTxt= document.getElementsByClassName("rompTxt");



const duracion=()=>{
    let tiempo= videoNodo.duration;
    let minutos= Math.floor(tiempo/60);
    let segundos= Math.floor(tiempo%60);
    textoDur.textContent= "Duración del video "+minutos+":"+segundos;
};

const reproducir=()=>{
    videoNodo.play();
};

const pausar=()=>{
    videoNodo.pause();
};

const arrastre=(event)=>{
    const idImagen = event.target.id;
    event.dataTransfer.setData("idImagen", idImagen);
};

const prevent=(event)=>{
event.preventDefault();
};

const soltarElemento=(event)=>{
    const idImagen = event.dataTransfer.getData("idImagen");
    const imagen = document.getElementById(idImagen);
    event.target.appendChild(imagen);
    const contenedor = event.target;
    const nodosTxt = contenedor.getElementsByClassName("rompTxt");
    for (let nodoTxt of nodosTxt) {
        nodoTxt.style.display = "none";
    }

};


nodoPlay.addEventListener("click", reproducir);
nodoPause.addEventListener("click", pausar);
window.addEventListener("load", duracion);
imagen1.addEventListener("dragstart",arrastre);
imagen2.addEventListener("dragstart",arrastre);
imagen3.addEventListener("dragstart",arrastre);
dropZone1.addEventListener("dragover",prevent);
dropZone2.addEventListener("dragover",prevent);
dropZone3.addEventListener("dragover",prevent);
dropZone1.addEventListener("drop",soltarElemento);
dropZone2.addEventListener("drop",soltarElemento);
dropZone3.addEventListener("drop",soltarElemento);



/* Hola profe, me surgió una duda mientras hacía el trabajo:
 Al cargar el sitio me figura un error en la consola en la siguiente línea de código: 
nodoPlay.addEventListener("click", reproducir);. 
Dicho error es el siguiente: Uncaught TypeError: Cannot read properties of null (reading 'addEventListener').
Al clickear el botón para reproducir el video el error desaparece.
Algo que me llama la atención es que anteriormente en la consola no aparecía ese error o al menos no lo vi, hasta que empecé a hacer la parte de Drag & Drop y accedí a otros datos por medio del DOM. Querría saber a qué se puede deber esto para evitar que suceda.
Creo que este mismo problema hace que no funcione la sección del rompecabezas porque cuando escribí ese código lo hice en un nuevo archivo a parte y sí funcionaba. 
Por otro lado noto que podría haberme ahorrado varías líneas de código utilizando bucles por ejemplo. Desde ya muchas gracias!*/ 
