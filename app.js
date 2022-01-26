const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");
const resultado = document.querySelector(".resultado");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    //reset
    errorNombre.innerHTML = ""

    const regExpLetras = /[a-zA-Z ]\w+/gi;

    if (!nombre.value.trim()) {
        errorNombre.innerHTML = "mensaje en blanco";
        return;
    }
    if (!regExpLetras.test(nombre.value)) {
        errorNombre.innerHTML = "solo se permiten letras"
        return;

    }
    if (!asunto.value.trim()) {
        errorAsunto.innerHTML = "asunto es requerido";
        return;
    }
    if (!asunto.value.trim()) {
        errorMensaje.innerHTML = "mensaje es requerido";
        return;
    }
    resultado.innerHTML = "El mensaje fue enviado con éxito"

});