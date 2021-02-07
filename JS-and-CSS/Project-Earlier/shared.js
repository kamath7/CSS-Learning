let backdrop = document.querySelector(".backdrop"); //all styles in js style are inline styles
let planButton = document.querySelectorAll(".plan button");
let modal = document.querySelector(".modal");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let modalNoButton = document.querySelector(".modal__action--negative");

//alternative syntax backdrop.style['background-image'] instead of backdrop.style.backgroundImage
for (let i = 0; i < planButton.length; i++) {
  planButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open' //Overwrites class
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
}
toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
