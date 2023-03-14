function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let src = null;
  if (image) {
    src = `assets/images/${photographerId}/${image}`;
  } else {
    src = `assets/images/${photographerId}/${video}`;
  }

  function getUserCardDOM() {
    const article = document.createElement('article');
    let media = null;
    if (image) {
      media = document.createElement('img');
    } else {
      media = document.createElement('video');
    }

    media.src = src;
    media.setAttribute('alt', title);
    // media.setAttribute('type', 'video/mp4');
    media.onclick = function () {
      const div = document.getElementById('lightbox');
      div.style.display = 'block';
      const media = document.getElementById('lightboxMedia');
      media.src = src;
    };

    const h2 = document.createElement('h2');
    h2.textContent = title;
    const span = document.createElement('span');
    span.textContent = likes;

    article.appendChild(media);
    article.appendChild(h2);
    article.appendChild(span);

    return article;
  }
  return { title, media, getUserCardDOM };
}
