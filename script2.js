'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

/* 
Limitation of query selector method , whenever we use query selector with a selector, which matches with multiple elements, only the first one will get selected
So we need to use querySelectorALL 
*/

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

// Keypress events
/* 
Keyboard events are so-called global events because they don't happen on one specific element. 
For global events like Keyboard events we list them on the whole document.
There are 3 types of events for the keyboards
Keydown
keypress
keyup - Only happens when we lift our fingers off the key
*/

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
