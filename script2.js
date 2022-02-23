'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    // Removing hidden class on modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
} */

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

/* btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log(e);
  console.log(e.key);

  if (e.key === 'Escape') {
    /* If the pressed key is escape */

    // console.log('esc was pressed');
    // if(modal.classList.contains('hidden')) {
    /* If modal.classname contains the hidden class it means that the modal is currently hidden In this condition we don't want to do anything we only want to close the modal if it does not contain the hidden class
    }*/

    if (!modal.classList.contains('hidden')) {
      /* If the modal does not contain the hidden class, then close the modal, by calling closeModal function */
      closeModal();
    }
  }
});
