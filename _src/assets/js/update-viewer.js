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
