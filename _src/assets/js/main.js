"use strict";

//debugger;

const colorCheck = document.querySelectorAll(".form__item");

const colorCheck1 = document.getElementById("design1");
const colorCheck2 = document.getElementById("design2");

const nameCheck = document.querySelector(".viewer__image-name");
const professionCheck = document.querySelector(".viewer__image-profession");
const lineCheck = document.querySelector(".viewer__image-line");
const iconsCheck = document.querySelectorAll(".viewer__icon-style");

let resultado = "";

function capturar() {
  // Recorremos todos los valores del radio button para encontrar el seleccionado
  for (let i = 0; i < colorCheck.length; i++) {
    if (colorCheck[i].checked) resultado = colorCheck[i].value;

    if (resultado === "color2") {
      nameCheck.classList.remove("viewer__image-name"),
        nameCheck.classList.add("viewer__image-name-color2");
      professionCheck.classList.remove("viewer__image-profession"),
        professionCheck.classList.add("viewer__image-profession-color2");
      lineCheck.classList.remove("viewer__image-line"),
        lineCheck.classList.add("viewer__image-line-color2");

      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.remove("viewer__icon-style"),
          iconsCheck[a].classList.add("viewer__icon-style-color2");
      }
    } else if (resultado === "color1") {
      nameCheck.classList.remove("viewer__image-name-color2"),
        nameCheck.classList.add("viewer__image-name");
      professionCheck.classList.remove("viewer__image-profession-color2"),
        professionCheck.classList.add("viewer__image-profession");
      lineCheck.classList.remove("viewer__image-line-color2"),
        lineCheck.classList.add("viewer__image-line");

      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.remove("viewer__icon-style-color2"),
          iconsCheck[a].classList.add("viewer__icon-style");
      }
    }
  }
}

colorCheck1.addEventListener("click", capturar);
colorCheck2.addEventListener("click", capturar);

//previsualizar imagen de input type file

const imagePreview = document.querySelector(".folded__form__inputFile");
const preview = document.querySelector(".folded__form__input2");
const userPreview = document.querySelector(".viewer__profile-picture");

function previewImage(ev) {
  // Creamos el objeto de la clase FileReader
  let reader = new FileReader();

  // Leemos el archivo subido y se lo pasamos a nuestro fileReader
  reader.readAsDataURL(ev.target.files[0]);

  // Le decimos que cuando este listo ejecute el código interno
  reader.onload = function() {
    let image = document.createElement("img");

    image.src = reader.result;

    preview.innerHTML = `<img src="${
      image.src
    }" alt="image user" class="folded__form__input2--image" />`;

    userPreview.innerHTML = `<img src="${
      image.src
    }" alt="image user" class="viewer__profile-picture-image" />`;
  };
}

imagePreview.addEventListener("change", previewImage);

//actualizar textos

const fullName = document.querySelector(".inputName");
const viewerName = document.querySelector(".js-Name");

const job = document.querySelector(".inputJob");
const viewerJob = document.querySelector(".js-Job");

function upgradeName(event) {
  const fullName = event.currentTarget;
  viewerName.innerHTML = `${fullName.value}`;
}

function upgradeJob(event) {
  const job = event.currentTarget;
  viewerJob.innerHTML = `${job.value}`;
}

fullName.addEventListener("keyup", upgradeName);
job.addEventListener("keyup", upgradeJob);
