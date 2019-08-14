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
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[0].innerHTML = `<a href="tel:${
    tel.value
  }" target="_blank"><i class="fas fa-mobile-alt"></i></a>`;
}

function upgradeMail() {
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[1].innerHTML = `<a href="mailto:${
    mail.value
  }" target="_blank"><i class="far fa-envelope"></i></a>`;
}

function upgradeLinkedin() {
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[2].innerHTML = `<a href="https://www.linkedin.com/in/${
    linkedin.value
  }" target="_blank"><i class="fab fa-linkedin-in"></i></a>`;
}

function upgradeGithub() {
  for (let a = 0; a < iconsCheck.length; a++) {}
  iconsCheck[3].innerHTML = `<a href="https://github.com/${
    github.value
  }" target="_blank"><i class="fab fa-github-alt"></i></a>`;
}

let srcPhoto;
let src;
function upgradeImage() {
  if (srcPhoto === undefined) {
    profileImage.style.backgroundImage = `url(./assets/images/natalie-portman.jpg)`;
  } else {
    profilePreview.style.backgroundImage = `url(${srcPhoto})`;
    profileImage.style.backgroundImage = `url(${srcPhoto})`;
  }
}

//Creamos una función para almacenar los datos introducidos en el localStorage.
const handleFormData = () => {
  console.log(palette);
  const data = {
    palette: palette,
    name: fullName.value,
    job: job.value,
    mail: mail.value,
    phone: tel.value,
    linkedin: linkedin.value,
    github: github.value,
    photo: srcPhoto
  };

  localStorage.setItem("userData", JSON.stringify(data));
};

//Creamos una función para recuperar los últimos datos almacenados en el localStorage.
const getLocalStorage = () => {
  const getData = JSON.parse(localStorage.getItem("userData"));
  if (getData) {
    fullName.value = getData.name;
    job.value = getData.job;
    mail.value = getData.mail;
    tel.value = getData.phone;
    linkedin.value = getData.linkedin;
    github.value = getData.github;
    srcPhoto = getData.photo;

    if (getData.palette === "1") {
      colorCheck1.checked = true;
    } else if (getData.palette === "2") {
      colorCheck2.checked = true;
    } else if (getData.palette === "3") {
      colorCheck3.checked = true;
    } else if (getData.palette === "4") {
      colorCheck4.checked = true;
    } else if (getData.palette === "5") {
      colorCheck5.checked = true;
    } else if (getData.palette === "6") {
      colorCheck6.checked = true;
    }
    upgradeDataViewer();
  }
};

const upgradeDataViewer = () => {
  upgradeName();
  upgradeJob();
  upgradeMail();
  upgradeTel();
  upgradeLinkedin();
  upgradeGithub();
  changeColor();
  upgradeImage();
};

//para cada input, cuando occurra su evento, se ejecuta la función que modificará su contenido en el visor
fullName.addEventListener("keyup", upgradeDataViewer);
job.addEventListener("keyup", upgradeDataViewer);
mail.addEventListener("keyup", upgradeDataViewer);
tel.addEventListener("keyup", upgradeDataViewer);
linkedin.addEventListener("keyup", upgradeDataViewer);
github.addEventListener("keyup", upgradeDataViewer);
formData.addEventListener("keyup", handleFormData);
getLocalStorage();

for (let i = 0; i < colorCheck.length; i++) {
  colorCheck[i].addEventListener("click", handleFormData);
}

//------------ COMPARTE --------------------

const shareBtn = document.querySelector(".js-shareBtn");
const shareLink = document.querySelector(".js-shareLink");
const twitterLink = document.querySelector(".js-twitterLink");
const shareMessage = document.querySelector(".js-shareMessage");

function createCard(ev) {
  debugger;
  ev.preventDefault();
  const userData = {
    palette: palette,
    name: fullName.value,
    job: job.value,
    email: mail.value,
    phone: tel.value,
    linkedin: linkedin.value,
    github: github.value,
    photo: srcPhoto
  };
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      console.log(data.cardURL);

      shareLink.innerHTML = `${data.cardURL}`;
      shareLink.setAttribute("href", `${data.cardURL}`);
      twitterLink.setAttribute(
        "href",
        `https://twitter.com/intent/tweet?text=${data.cardURL}`
      );
      shareMessage.classList.remove("hidden");
    });
}

shareBtn.addEventListener("click", createCard);
