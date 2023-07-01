const modalMenu = document.querySelector('.modal-1');
const btnHamburger = document.querySelector('.hamburger-img');
const btnClose = document.querySelector('.close-1');

const links = document.querySelectorAll('.lnks a');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    modalMenu.close();
  });
}

btnHamburger.addEventListener('click', () => {
  modalMenu.show();
});

btnClose.addEventListener('click', () => {
  modalMenu.close();
});

