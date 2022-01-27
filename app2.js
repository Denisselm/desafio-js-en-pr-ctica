//variables de mi código
const caja = document.getElementById("caja");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

//elementos a los que le hare un cambio , en este caso dando click a boton 1 y 2 cambiare el color de la caja
btn1.addEventListener("click", () => {
    console.log("me diste click");
    caja.style.background = "#dd6b20";
});
btn2.addEventListener("click", () => {
    console.log("me diste click");
    caja.style.background = "#48bb78";
});