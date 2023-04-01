function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let src = null;
  if (image) {
    src = `assets/images/${photographerId}/${image}`;
  } else {
    src = `assets/images/${photographerId}/${video}`;
  }

  function getUserCardDOM(index) {
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
      mediaIndex = index;
      const div = document.getElementById('lightbox');
      div.style.display = 'block';
      let media;
      if (image) {
        media = document.getElementById('lightboxImage');
        document.getElementById('lightboxVideo').style.display = 'none';
        document.getElementById('lightboxImage').style.display = 'inline';
      } else {
        media = document.getElementById('lightboxVideo');
        document.getElementById('lightboxImage').style.display = 'none';
        document.getElementById('lightboxVideo').style.display = 'inline';
      }

      media.src = src;

      // lightbox media title
      document.getElementById('lightboxTitle').textContent = title;
    };

    const h2 = document.createElement('h2');
    h2.textContent = title;
    // number of likes per picture
    const span = document.createElement('span');
    span.textContent = likes;
    span.setAttribute('class', 'number-of-likes');
    // button "like" - heart icon
    const i = document.createElement('i');
    i.setAttribute('class', 'fa-solid fa-heart heart-icon');
    i.setAttribute('aria-label', 'likes');
    i.setAttribute('onclick', 'likeClick(this)');

    article.appendChild(media);
    article.appendChild(h2);
    article.appendChild(span);
    article.appendChild(i);

    return article;
  }
  return { title, media, getUserCardDOM };
}
