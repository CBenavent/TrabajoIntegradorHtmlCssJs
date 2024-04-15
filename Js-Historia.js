let nodoPlay= document.getElementById("bPlay");
let nodoPause= document.getElementById("bPause");
let videoNodo= document.querySelector("video");
let textoDur= document.getElementById("videoTxt");

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

nodoPlay.addEventListener("click", reproducir);
nodoPause.addEventListener("click", pausar);
window.addEventListener("load", duracion);