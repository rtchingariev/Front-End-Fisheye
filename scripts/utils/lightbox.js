function closeLightbox() {
  const modal = document.getElementById('lightbox');
  modal.style.display = 'none';
}

// lightbox keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.code.toLocaleLowerCase() === 'escape') {
    closeLightbox();
  }
  if (event.code.toLocaleLowerCase() === 'arrowleft') {
    previousMedia();
  }
  if (event.code.toLocaleLowerCase() === 'arrowright') {
    nextMedia();
  }
});

var mediaIndex = 0;

function previousMedia() {
  mediaIndex = (mediaIndex + media.length - 1) % media.length;
  const currentMedia = media[mediaIndex];
  const div = document.getElementById('lightbox');
  div.style.display = 'block';
  let src = null;
  var _media;
  if (currentMedia.image) {
    src = currentMedia.image;
    _media = document.getElementById('lightboxImage');
    document.getElementById('lightboxVideo').style.display = 'none';
    document.getElementById('lightboxImage').style.display = 'inline';
  } else {
    src = currentMedia.video;
    _media = document.getElementById('lightboxVideo');
    document.getElementById('lightboxImage').style.display = 'none';
    document.getElementById('lightboxVideo').style.display = 'inline';
  }
  _media.src = `./assets/images/${photographerId}/${src}`;
}

function nextMedia() {
  mediaIndex = (mediaIndex + 1) % media.length;
  const currentMedia = media[mediaIndex];
  const div = document.getElementById('lightbox');
  div.style.display = 'block';
  let src = null;
  var _media;
  if (currentMedia.image) {
    src = currentMedia.image;
    _media = document.getElementById('lightboxImage');
    document.getElementById('lightboxVideo').style.display = 'none';
    document.getElementById('lightboxImage').style.display = 'inline';
  } else {
    src = currentMedia.video;
    _media = document.getElementById('lightboxVideo');
    document.getElementById('lightboxImage').style.display = 'none';
    document.getElementById('lightboxVideo').style.display = 'inline';
  }
  _media.src = `./assets/images/${photographerId}/${src}`;
  // lightbox media title
  document.getElementById('lightboxTitle').textContent = currentMedia.title;
}
