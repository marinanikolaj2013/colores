

var numIntgerval;

function cambioDeColor() {
    numIntgerval = setInterval
        (flashTexto, 1200);
}
function flashTexto() {
    var miElemento = document.
        getElementById("mi_mensaje");
    console.log(miElemento)
    miElemento.style.color = miElemento.style.color == 'red' ? '#6c5ce7' : 'red';
}
function detenerCambioDeColor() {
    console.log(numIntgerval)
    clearInterval(numIntgerval)
}

