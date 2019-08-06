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
  viewerJob.innerHTML = `${job.value}`;
  if (job.value === "") {
    viewerJob.innerHTML = "Front-end developer";
  }
}

function upgradeTel() {
  for (let a = 0; a < iconsCheck.length; a++) { }
  iconsCheck[0].innerHTML = `<a href="tel:${
    mail.value
    }" target="_blank"><i class="fas fa-mobile-alt"></i></a>`;
}

function upgradeMail() {
  for (let a = 0; a < iconsCheck.length; a++) { }
  iconsCheck[1].innerHTML = `<a href="mailto:${
    mail.value
    }" target="_blank"><i class="far fa-envelope"></i></a>`;
}

function upgradeLinkedin() {
  for (let a = 0; a < iconsCheck.length; a++) { }
  iconsCheck[2].innerHTML = `<a href="https://www.${
    mail.value
    }" target="_blank"><i class="fab fa-linkedin-in"></i></a>`;
}

function upgradeGithub() {
  for (let a = 0; a < iconsCheck.length; a++) { }
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
  upgradeDataViewer();
};

const upgradeDataViewer = () => {
  upgradeName();
  upgradeJob();
  upgradeMail();
  upgradeTel();
  upgradeLinkedin();
  upgradeGithub();
};
//para cada input, cuando occurra su o, se ejecuta la función que modificará su contenido en el visor
fullName.addEventListener("keyup", upgradeDataViewer);
job.addEventListener("keyup", upgradeDataViewer);
mail.addEventListener("keyup", upgradeDataViewer);
tel.addEventListener("keyup", upgradeDataViewer);
linkedin.addEventListener("keyup", upgradeDataViewer);
github.addEventListener("keyup", upgradeDataViewer);
formData.addEventListener("keyup", handleFormData);
getLocalStorage();


//API

const shareButton = document.querySelector('.js-shareButton');



const data = {
  "palette": 1,
  "name": fullName.value,
  "job": job.value,
  "phone": tel.value,
  "email": mail.value,
  "linkedin": linkedin.value,
  "github": github.value,
  "photo": "data:image/png;base64,2342ba..."
}

function conectApi() {
  console.log(data)
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then()
}



shareButton.addEventListener('click', conectApi);