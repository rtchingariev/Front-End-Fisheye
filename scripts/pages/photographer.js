let photographerId = null;
let photographer = null;
let media = [];

async function getData() {
  // Récupération profil photographe depuis le fichier JSON
  const response = await fetch('./data/photographers.json');
  const data = await response.json();

  photographer = data.photographers.find((item) => {
    return item.id == photographerId;
  });

  if (!photographer) {
    window.location.href = 'index.html';
  }

  media = data.media.filter((item) => {
    return item.photographerId == photographerId;
  });
}

function displayMedia() {
  const mediaPage = document.querySelector('.media_page');

  media.forEach((item) => {
    const mediaProfil = mediaFactory(item);
    const userCardDOM = mediaProfil.getUserCardDOM();
    mediaPage.appendChild(userCardDOM);
  });
}

function displayPhotographer() {
  document.getElementById('photographerName').textContent = photographer.name;
  document.getElementById('photographerCity').textContent = photographer.city;
  document.getElementById('photographerCountry').textContent =
    photographer.country;

  document.getElementById('photographerTagline').textContent =
    photographer.tagline;

  document.getElementById(
    'photographerPicture'
  ).src = `assets/photographers/${photographer.portrait}`;

  document.getElementById('photographerPicture').alt = photographer.name;

  // nom de photographe - modale
  document.getElementById('contactName').textContent = photographer.name;

  // counter likes & price
  document.getElementById('counterLikes').textContent = media.reduce(
    (accumulator, currentValue) => accumulator + currentValue.likes,
    0
  );

  document.getElementById('counterPrice').textContent =
    photographer.price + ' € / jour';
}

async function init() {
  // Récupère les datas des photographes
  await getData();
  displayPhotographer();
  displayMedia();
}

window.onload = function () {
  const searchParams = new URLSearchParams(window.location.search);
  photographerId = searchParams.get('id');
  init();
};
