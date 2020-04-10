const buttonShop = document.querySelector("#button-shop");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

toggleModal = () => {
    modal.classList.toggle("modal-open");
}

buttonShop.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

new WOW().init();
