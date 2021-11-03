const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");
const logo = document.querySelector(".logo");
var myButton = document.getElementById("button");

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

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scroll > 100 || document.body.scrollTop < 100) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function showAndHideVideo() {
  var video = document.getElementById("danceVideo");
  if ((video.style.display = "none")) {
    video.style.display = "block";
  } else {
    video.style.display = "none";
  }
}
