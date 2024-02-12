const botPlay= document.getElementById("bPlay");
const botPause= document.getElementById("bPause");
const videoNodo= document.querySelector("video");
const textoDur= document.getElementById("videoTxt");
const nodoImgR= document.getElementsByClassName("imgRompe");
const dropZone= document.getElementsByClassName("rompRecuadro");

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

botPlay.addEventListener("click", reproducir);
botPause.addEventListener("click", pausar);
window.addEventListener("load", duracion);
