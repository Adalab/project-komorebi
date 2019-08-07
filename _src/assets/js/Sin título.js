/*'use strict';

// Definimos variables//
const buttonShare = document.querySelector('.share_button_img');
const responseURL = document.querySelector('.completed_content_url');

const fullName = document.querySelector('#full_name');
const jobTitle = document.querySelector('#job');
//const imagePhoto = document.querySelector('.js__profile-image');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');

//const twitterBtn = document.querySelector('.completed_content_button');
const twitterUrl = document.querySelector('.completed_content_button_twitter');
const tweet = 'https://twitter.com/intent/tweet?text=My awesome profile card: ';

// Función que recoge la información del usuario y llama a la api externa (cards) para que nos genere la tarjeta de visita. //
function writeURL() {
  const userInfo = {
    palette: document.querySelector('.form_item:checked').value,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone.value,
    email: email.value,
    linkedin: linkedin.value,
    github: github.value,
    // eslint-disable-next-line no-undef
    photo: fr.result
  };
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(userInfo => showURL(userInfo))
    .catch(function(error) {
      // eslint-disable-next-line no-console
      console.log(error);
    });
}

// Función showURL //
function showURL(userInfo) {
  if (userInfo.success) {
    responseURL.innerHTML =
      '<a href=' + userInfo.cardURL + '>' + userInfo.cardURL + '</a>';
    twitterUrl.href = tweet + userInfo.cardURL;
  } else {
    responseURL.innerHTML = 'ERROR:' + userInfo.error;
  }
}

// Añadimos evento Listener al hacer click en el botón y nos pinte la función writeURL //
buttonShare.addEventListener('click', writeURL);
*/
