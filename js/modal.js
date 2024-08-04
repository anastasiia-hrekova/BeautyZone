
const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.button-open');
const modalBtnClose = document.querySelector('.button-close');

const toggleModal = () => modal.classList.toggle('backdrop_is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);