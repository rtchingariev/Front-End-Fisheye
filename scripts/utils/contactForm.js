function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

function inputConsoleLog(event) {
  event.preventDefault();
  let firstname = document.getElementById('firstname');
  console.log(firstname.value);

  let lastname = document.getElementById('lastname');
  console.log(lastname.value);

  let email = document.getElementById('email');
  console.log(email.value);

  let message = document.getElementById('message');
  console.log(message.value);
}
