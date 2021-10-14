const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");
const logo = document.querySelector(".logo");

// form-contact
const form = document.querySelector(".form-contact-form");
const mgSent = document.querySelector(".MgSent");

form.addEventListener("submit", (e) => {
  mgSent.innerHTML = "Message Sent !!!!";
  e.preventDefault();
});

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
