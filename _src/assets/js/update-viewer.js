//actualizar textos del form al visor
"use strict";
//recogemos los campos del formulario cuyo contenido vamos a actualizar en el visor
const fullName = document.querySelector(".inputName");
const job = document.querySelector(".inputJob");
const mail = document.querySelector(".mail");
const tel = document.querySelector(".tel");
const linkedin = document.querySelector(".linkedin");
const github = document.querySelector(".Github");

//recogemos los campos del visor que queremos actualizar
const viewerName = document.querySelector(".js-Name");
const viewerJob = document.querySelector(".js-Job");

// vamos a recoger los datos del form en localStore
const formData = document.querySelector(".js-form");

// esta función hace que al borrar el input vuelva a estar relleno con los datos de ejemplo
// para decir que un imput esta vacio se escribe asi === ''
function upgradeName() {
  viewerName.innerHTML = `${fullName.value}`;
  if (fullName.value === "") {
    viewerName.innerHTML = "Nombre Apellido";
  }
}

// esta función hace que al borrar el input vuelva a estar relleno con los datos de ejemplo
function upgradeJob() {
  //const job = event.currentTarget;
  viewerJob.innerHTML = `${job.value}`;
  if (job.value === "") {
    viewerJob.innerHTML = "Front-end developer";
  }
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

//Creamos una función para almacenar los datos introducidos en el localStorage.
const handleFormData = () => {
  const data = {
    name: fullName.value,
    job: job.value,
    mail: mail.value,
    tel: tel.value,
    linkedin: linkedin.value,
    github: github.value
  };

  localStorage.setItem("userData", JSON.stringify(data));
};

//Creamos una función para recuperar los últimos datos almacenados en el localStorage.
const getLocalStorage = () => {
  const getData = JSON.parse(localStorage.getItem("userData"));
  fullName.value = getData.name;
  job.value = getData.job;
  mail.value = getData.mail;
  tel.value = getData.tel;
  linkedin.value = getData.linkedin;
  github.value = getData.github;
};

//para cada input, cuando occurra su evento, se ejecuta la función que modificará su contenido en el visor
fullName.addEventListener("keyup", upgradeName);
job.addEventListener("keyup", upgradeJob);
mail.addEventListener("keyup", upgradeMail);
tel.addEventListener("keyup", upgradeTel);
linkedin.addEventListener("keyup", upgradeLinkedin);
github.addEventListener("keyup", upgradeGithubn);
formData.addEventListener("keyup", handleFormData);
getLocalStorage();
