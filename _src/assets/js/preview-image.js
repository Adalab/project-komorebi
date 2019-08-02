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
