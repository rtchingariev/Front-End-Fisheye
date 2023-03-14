async function getPhotographers() {
  // Récupération des données photographes depuis le fichier JSON
  const response = await fetch('./data/photographers.json');
  const data = await response.json();
  // console.log('photographers', photographers);

  // retour le tableau photographers une fois récupéré
  return data.photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
