const trigger = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-body");
const closeButton = document.querySelector(".close-modal");
const homeButton = document.querySelector(".home-button-header");

let toggleModal;

toggleModal = () => {
    modal.classList.toggle("show-modal");
    homeButton.classList.toggle("hide");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);