function likeClick(i) {
  const likes = i.previousSibling;
  const likesValue = Number.parseInt(likes.textContent, 10);
  const counterLikes = document.getElementById('counterLikes');
  const counterLikesValue = Number.parseInt(counterLikes.textContent, 10);

  if (i.classList.contains('isLiked')) {
    i.classList.remove('isLiked');
    likes.textContent = likesValue - 1;
    counterLikes.textContent = counterLikesValue - 1;
  } else {
    i.classList.add('isLiked');
    likes.textContent = likesValue + 1;
    counterLikes.textContent = counterLikesValue + 1;
  }
}
