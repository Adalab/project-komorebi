"use strict";

const colorCheck = document.getElementById("design");
const nameCheck = document.querySelector(".viewer__image-name");
let resultado = "";

const colores = document.querySelector(".design__subtitle");

function capturar() {
  // Recorremos todos los valores del radio button para encontrar el seleccionado
  for (let i = 0; i < colorCheck.length; i++) {
    if (colorCheck[i].checked) resultado = colorCheck[i].value;
  }

  console.log(resultado);
}

/*function changeColor() {
    if ()
  console.log("hola");
}

function getRadioButtonSelectedValue(ctrl) {
  for (i = 0; i < ctrl.length; i++) if (ctrl[i].checked) return ctrl[i].value;
}
*/

colores.addEventListener("click", capturar);
