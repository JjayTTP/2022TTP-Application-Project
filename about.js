window.onscroll = function() {myFunction2()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset-8 >= sticky) {
    navbar.classList.add("sticky")
    document.getElementById("nameNav").style.display="inline-flex";
    document.getElementById("logo").style.display="none";

  } else {
    navbar.classList.remove("sticky");

    document.getElementById("logo").style.display="inline-flex";
    document.getElementById("nameNav").style.display="none";
  }
}
function relocate45(){
  window.open("https://www.linkedin.com/in/nikhil-prajith-7484981b1");
}