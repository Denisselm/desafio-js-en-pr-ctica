let myForm = document.getElementById('formulario');
myForm = addEventListener('submit', formValidate);

function formValidate() {
    event.preventDefault()
    cleanErrors();

    let formName = document.getElementById('nombre').value;
    let formSubject = document.getElementById('asunto').value;
    let formMessage = document.getElementById('mensaje').value;

    let result = validate(formName, formSubject, formMessage);

    if (result == true) {
        formSuccess();
    }
}

function formSuccess() {
    document.querySelector('.resultado').innerHTML = "Mensaje enviado con éxito"
}

function cleanErrors() {
    document.querySelector('.resultado').innerHTML = "";
    document.querySelector('.errorNombre').innerHTML = "";
    document.querySelector('.errorAsunto').innerHTML = "";
    document.querySelector('.errorMensaje').innerHTML = "";
}

function validate(formName, formSubject, formMessage) {
    let success = true;

    let validateName = /[a-zA-Z]/;
    if (validateName.test(formName) == false) {
        document.querySelector('.errorNombre').innerHTML = "El nombre es requerido.";
    }

    let validateSubject = /[a-zA-Z]/;
    if (validateSubject.test(formSubject) == false) {
        document.querySelector('.errorAsunto').innerHTML = "El asunto es requerido.";
    }

    let validateMessage = /[a-zA-Z]/;
    if (validateMessage.test(formMessage) == false) {
        document.querySelector('.errorMensaje').innerHTML = "Mensaje es requerido";
    }

    return success;
}