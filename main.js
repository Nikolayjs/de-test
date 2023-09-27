const btn = document.getElementById('modal-trigger');
const modal = document.querySelector('.modal-wrapper');
const submitBtn = document.querySelector('.modal__submit-btn');
const body = document.querySelector('body');
const submitForm = document.querySelector('.modal__form-section');
let form = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
};
const popup = document.querySelector('.popup');

const validateScheme = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector('.modal').addEventListener('keyup', () => {
  form = { ...form, email: document.getElementById('email').value };
  if (form.email.match(validateScheme)) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }
});

btn.addEventListener('click', () => {
  body.classList.add('scroll-remove');
  modal.classList.remove('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'modal-wrapper') {
    modal.classList.add('hidden');
    submitForm.reset();
    body.classList.remove('scroll-remove');
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitForm.reset();
  body.classList.remove('scroll-remove');
  modal.classList.add('hidden');
  form = { ...form, email: '' };
  submitBtn.setAttribute('disabled', 'disabled');
  popup.classList.remove('hidden');
  setTimeout(() => {
    popup.classList.add('hidden');
  }, 5000);
});
