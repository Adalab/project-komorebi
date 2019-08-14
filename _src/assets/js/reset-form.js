//-----------RESET FORM----------------------

const resetBtn = document.getElementById("reset");
const form = document.getElementById("form");

function resetViewer() {
  viewerName.innerHTML = `Nombre Apellido`;
  viewerJob.innerHTML = `Front-end developer`;
  profileImage.style.backgroundImage = `url(./assets/images/natalie-portman.jpg)`;
  profilePreview.style.backgroundImage = `url()`;
  for (let a = 0; a < iconsCheck.length; a++) {
    iconsCheck[0].innerHTML = `<i class="fas fa-mobile-alt"></i></a>`;
    iconsCheck[1].innerHTML = `<i class="far fa-envelope"></i></a>`;
    iconsCheck[2].innerHTML = `<i class="fab fa-linkedin-in"></i></a>`;
    iconsCheck[3].innerHTML = `<i class="fab fa-github-alt"></i></a>`;
  }
}

function resetColor() {
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

    nameCheck.classList.add("viewer__image-name");
    professionCheck.classList.add("viewer__image-profession");
    lineCheck.classList.add("viewer__image-line");
    for (let a = 0; a < iconsCheck.length; a++) {
      iconsCheck[a].classList.add("viewer__icon-style");
    }
  }
}

function resetForm() {
  form.reset();
  resetViewer();
  resetColor();
  localStorage.removeItem("userData");
  location.reload(true);
}
resetBtn.addEventListener("click", resetForm);
