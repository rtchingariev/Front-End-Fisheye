function closeLightbox() {
  const modal = document.getElementById('lightbox');
  modal.style.display = 'none';
}

var mediaIndex = 0;

function previousMedia() {}

function nextMedia() {
  mediaIndex = mediaIndex + 1;
  const currentMedia = media[mediaIndex];

  const div = document.getElementById('lightbox');
  div.style.display = 'block';

  let _media;
  if (currentMedia.image) {
    _media = document.getElementById('lightboxImage');
    document.getElementById('lightboxVideo').style.display = 'none';
    document.getElementById('lightboxImage').style.display = 'inline';
  } else {
    _media = document.getElementById('lightboxVideo');
    document.getElementById('lightboxImage').style.display = 'none';
    document.getElementById('lightboxVideo').style.display = 'inline';
  }

  _media.src = currentMedia.src;

  // lightbox media title
  document.getElementById('lightboxTitle').textContent = currentMedia.title;
}
