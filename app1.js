//variables de mi codigo
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.querySelector("#Nombre");
const errorAsunto = document.querySelector("#Asunto");
const errorMensaje = document.querySelector("#Mensaje");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //reset

    errorNombre.innerHTML = ""


    //expresion regular Espacios y solo letras
    const regExpLetras = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;


    //condiciones, en este caso si no se cumple la condicion la consola mostrará los mensajes entre las comillas

    if (!nombre.value.trim()) {
        errorNombre.innerHTML = "mensaje en blanco";

        return;
    }
    if (!regExpLetras.test(nombre.value)) {
        errorNombre.innerHTML = "solo se permiten letras"
        console.log("El nombre es requerido");
        return;

    }
    if (!asunto.value.trim()) {
        errorAsunto.innerHTML = "asunto es requerido";
        console.log("El asunto es requerido");
        return;
    }
    if (!mensaje.value.trim()) {
        errorMensaje.innerHTML = "mensaje es requerido";
        console.log("El mensaje es requerido");
        return;
    }
    resultado.innerHTML = "El mensaje fue enviado con éxito"

});