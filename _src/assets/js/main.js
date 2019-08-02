"use strict";

//debugger;

//recogemos el radio para poder saber cual está seleccionado
const colorCheck = document.querySelectorAll(".form__item");

//recogemos los distintos radios segun su Id para que se ejecute la funcion cuando les hagamos clik a cada uno de ellos
const colorCheck1 = document.getElementById("design1");
const colorCheck2 = document.getElementById("design2");
const colorCheck3 = document.getElementById("design3");
const colorCheck4 = document.getElementById("design4");
const colorCheck5 = document.getElementById("design5");
const colorCheck6 = document.getElementById("design6");

//recogemos del html los elementos que queremos cambiar de color (nombre, profession, linea)
const nameCheck = document.querySelector(".viewer__image-name");
const professionCheck = document.querySelector(".viewer__image-profession");
const lineCheck = document.querySelector(".viewer__image-line");

//recogemos todo los elementos con clase '.viewer__icon-style' (son los iconos de las redes sociales que tb hay que cambiar de color) => se crea un array con los distintos div (porque todos los iconos tiene la misma clase)
const iconsCheck = document.querySelectorAll(".viewer__icon-style");

let resultado = ""; //variable para almacenar si los radios están checkeados

function changeColor() {
  // Recorremos todos los valores del radio button para encontrar el seleccionado y lo almacenamos en la variable 'resultado'
  for (let i = 0; i < colorCheck.length; i++) {
    if (colorCheck[i].checked) resultado = colorCheck[i].value;

    //borramos todas las clases
    nameCheck.classList.remove(
      "viewer__image-name",
      "viewer__image-name-color2",
      "viewer__image-name-color3",
      "viewer__image-name-color4",
      "viewer__image-name-color5",
      "viewer__image-name-color6"
    );
    professionCheck.classList.remove(
      "viewer__image-profession",
      "viewer__image-profession-color2",
      "viewer__image-profession-color3",
      "viewer__image-profession-color4",
      "viewer__image-profession-color5",
      "viewer__image-profession-color6"
    );
    lineCheck.classList.remove(
      "viewer__image-line",
      "viewer__image-line-color2",
      "viewer__image-line-color3",
      "viewer__image-line-color4",
      "viewer__image-line-color5",
      "viewer__image-line-color6"
    );
    //Recorremos todos los divs de los iconos y a cada uno le quitamos las clases
    for (let a = 0; a < iconsCheck.length; a++) {
      iconsCheck[a].classList.remove(
        "viewer__icon-style",
        "viewer__icon-style-color2",
        "viewer__icon-style-color3",
        "viewer__icon-style-color4",
        "viewer__icon-style-color5",
        "viewer__icon-style-color6"
      );
    }
    //segun el resultado del check radio, añadimos las clases correspondientes al color elegido
    if (resultado === "color1") {
      nameCheck.classList.add("viewer__image-name");
      professionCheck.classList.add("viewer__image-profession");
      lineCheck.classList.add("viewer__image-line");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style");
      }
    } else if (resultado === "color2") {
      nameCheck.classList.add("viewer__image-name-color2");
      professionCheck.classList.add("viewer__image-profession-color2");
      lineCheck.classList.add("viewer__image-line-color2");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color2");
      }
    } else if (resultado === "color3") {
      nameCheck.classList.add("viewer__image-name-color3");
      professionCheck.classList.add("viewer__image-profession-color3");
      lineCheck.classList.add("viewer__image-line-color3");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color3");
      }
    } else if (resultado === "color4") {
      nameCheck.classList.add("viewer__image-name-color4");
      professionCheck.classList.add("viewer__image-profession-color4");
      lineCheck.classList.add("viewer__image-line-color4");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color4");
      }
    } else if (resultado === "color5") {
      nameCheck.classList.add("viewer__image-name-color5");
      professionCheck.classList.add("viewer__image-profession-color5");
      lineCheck.classList.add("viewer__image-line-color5");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color5");
      }
    } else if (resultado === "color6") {
      nameCheck.classList.add("viewer__image-name-color6");
      professionCheck.classList.add("viewer__image-profession-color6");
      lineCheck.classList.add("viewer__image-line-color6");
      for (let a = 0; a < iconsCheck.length; a++) {
        iconsCheck[a].classList.add("viewer__icon-style-color6");
      }
    }
  }
}

//eventos para cada radio, escuchamos el click y ejecutamos la funcion 'changeColor'
colorCheck1.addEventListener("click", changeColor);
colorCheck2.addEventListener("click", changeColor);
colorCheck3.addEventListener("click", changeColor);
colorCheck4.addEventListener("click", changeColor);
colorCheck5.addEventListener("click", changeColor);
colorCheck6.addEventListener("click", changeColor);

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

    image.src = reader.result; //modificamos la ruta de la imagen con la ruta del archivo subido

    //cambiamos el html del div para poner la imagen pero con la nueva ruta
    preview.innerHTML = `<img src="${
      image.src
    }" alt="image user" class="folded__form__input2--image" />`;

    //lo mismo, pero para el div de la foto grande
    userPreview.innerHTML = `<img src="${
      image.src
    }" alt="image user" class="viewer__profile-picture-image" />`;
  };
}
//evento del boton añadir imagen, que al hacer "change", ejecuta la funcion previewImage
imagePreview.addEventListener("change", previewImage);

//actualizar textos del form al visor

//recogemos los campos del formulario cuyo contenido vamos a actualizar en el visor
const fullName = document.querySelector(".inputName");
const job = document.querySelector(".inputJob");
const mail = document.querySelector(".mail");
const tel = document.querySelector(".tel");
const linkedin = document.querySelector(".linkedin");
const Github = document.querySelector(".Github");

//recogemos los campos del visor que queremos actualizar
const viewerName = document.querySelector(".js-Name");
const viewerJob = document.querySelector(".js-Job");

function upgradeName(event) {
  const fullName = event.currentTarget;
  viewerName.innerHTML = `${fullName.value}`;
}

function upgradeJob(event) {
  const job = event.currentTarget;
  viewerJob.innerHTML = `${job.value}`;
}

function upgradeTel(event) {
  const mail = event.currentTarget;
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[0].innerHTML = `<a href="tel:${
    mail.value
  }" target="_blank"><i class="fas fa-mobile-alt"></i></a>`;
}

function upgradeMail(event) {
  const mail = event.currentTarget;
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[1].innerHTML = `<a href="mailto:${
    mail.value
  }" target="_blank"><i class="far fa-envelope"></i></a>`;
}

function upgradeLinkedin(event) {
  const mail = event.currentTarget;
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[2].innerHTML = `<a href="https://www.${
    mail.value
  }" target="_blank"><i class="fab fa-linkedin-in"></i></a>`;
}

function upgradeGithubn(event) {
  const mail = event.currentTarget;
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[3].innerHTML = `<a href="https://github.com/${
    mail.value
  }" target="_blank"><i class="fab fa-github-alt"></i></a>`;
}

//para cada input, cuando occurra su evento, se ejecuta la función que modificará su contenido en el visor
fullName.addEventListener("keyup", upgradeName);
job.addEventListener("keyup", upgradeJob);
mail.addEventListener("keyup", upgradeMail);
tel.addEventListener("keyup", upgradeTel);
linkedin.addEventListener("keyup", upgradeLinkedin);
Github.addEventListener("keyup", upgradeGithubn);

//-----------------COLLAPSABLES-----------------------

const collapsable = document.querySelectorAll(".collapsable");
const arrow = document.querySelectorAll(".js-arrow");

function openArrow(ev) {
  const currentStatus = ev.currentTarget.classList.contains("open");
  if (currentStatus === true) {
    ev.currentTarget.classList.remove("open");
  } else {
    ev.currentTarget.classList.add("open");
  }
}

function openCollapsable0() {
  for (let i = 0; i < collapsable.length; i++) {
    collapsable[0].classList.toggle("open");
    collapsable[1].classList.remove("open");
    collapsable[2].classList.remove("open");
  }
}

function openCollapsable1() {
  for (let i = 0; i < collapsable.length; i++) {
    collapsable[0].classList.remove("open");
    collapsable[1].classList.toggle("open");
    collapsable[2].classList.remove("open");
  }
}

function openCollapsable2() {
  for (let i = 0; i < collapsable.length; i++) {
    collapsable[0].classList.remove("open");
    collapsable[1].classList.remove("open");
    collapsable[2].classList.toggle("open");
  }
}

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", openArrow);

  if (i === 0) {
    arrow[0].addEventListener("click", openCollapsable0);
  } else if (i === 1) {
    arrow[1].addEventListener("click", openCollapsable1);
  } else if (i === 2) {
    arrow[2].addEventListener("click", openCollapsable2);
  }
}
