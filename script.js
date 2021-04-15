//al hacer click en un producto
function ver_img() {
    alert("Lupa");
}

//variable para las siguientes 2 funciones
var imgnum=1;
//botón siguiente del carrusel
function btnSiguiente() {
    imgnum++;
    if (imgnum>3)
        imgnum=1;
    var galeria_img=document.getElementById("galeria_img");
    galeria_img.src="imagenes/galeria_"+imgnum+".jpg";

    document.getElementById("carrusel").style.backgroundImage = "url('imagenes/galeria_"+imgnum+".jpg')";
}
//botón anterior del carrusel
function btnAnterior() {
    imgnum--;
    if (imgnum<1)
        imgnum=3;
    var galeria_img=document.getElementById("galeria_img");
    galeria_img.src="imagenes/galeria_"+imgnum+".jpg";

    document.getElementById("carrusel").style.backgroundImage = "url('imagenes/galeria_"+imgnum+".jpg')";
}