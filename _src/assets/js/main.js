"use strict";

//debugger;

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
