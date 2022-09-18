const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("main-menu")[0];
const hero = document.getElementsByClassName("hero")[0];
toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hero.classList.toggle("active");
});
