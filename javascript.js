let imagenes = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")];
let dropZonas = [document.getElementById("zona1"), document.getElementById("zona2"), document.getElementById("zona3")];
let nodoTxt = document.getElementsByClassName("rompTxt");


const arrastre = (event) => {
    const idImagen = event.target.id;
    event.dataTransfer.setData("idImagen", idImagen);
};

const prevent = (event) => {
    event.preventDefault();
};

const soltarElemento = (event) => {
    const idImagen = event.dataTransfer.getData("idImagen");
    const imagen = document.getElementById(idImagen);
    event.target.appendChild(imagen);
    const contenedor = event.target;
    const nodosTxt = contenedor.getElementsByClassName("rompTxt");
    for (let nodoTxt of nodosTxt) {
        nodoTxt.style.display = "none";
    }
};

for (let imagen of imagenes) {
    imagen.addEventListener("dragstart", arrastre);
}

for (let dropZona of dropZonas) {
    dropZona.addEventListener("dragover", prevent);
    dropZona.addEventListener("drop", soltarElemento);
}

document.getElementById("rompBut").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.reload(); 
});

