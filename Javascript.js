
function resize() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

function myFunction(){
  var x = document.getElementById("csskills")
  var y = document.getElementById("lifeskills")
  if(x.style.display == "grid"){
    x.style.display = "none";
    y.style.display = "grid";
  } 
  else {
    x.style.display = "grid";
    y.style.display = "none";
  }
}