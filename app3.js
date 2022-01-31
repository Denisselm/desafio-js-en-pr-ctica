let resultado = document.querySelector('.resultado')

let sumar = document.querySelector('#btn-sumar');
sumar.addEventListener('click', () => {
    let num1 = document.querySelector('#valor1').value;
    num1 = parseInt(num1);
    let num2 = document.querySelector('#valor2').value;
    num2 = parseInt(num2);

    let resultadoSuma = num1 + num2;

    console.log(resultadoSuma);

    if (resultadoSuma >= 0) {
        resultado.innerHTML = `${resultadoSuma}`
    } else {
        resultado.innerHTML = "0"
    }
});

let restar = document.querySelector('#btn-restar');
restar.addEventListener('click', () => {
    let num1 = document.querySelector('#valor1').value;
    num1 = parseInt(num1);
    let num2 = document.querySelector('#valor2').value;
    num2 = parseInt(num2);

    let resultadoResta = num1 - num2;

    console.log(resultadoResta);

    if (resultadoResta >= 0) {
        resultado.innerHTML = `${resultadoResta}`
    } else {
        resultado.innerHTML = "0"
    }
});