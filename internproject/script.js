const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-item")[0];

document.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
