const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");
const logo = document.querySelector(".logo");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
