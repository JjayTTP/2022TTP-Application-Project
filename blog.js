function color(){
  document.getElementById("rect").style.width="52%";
  document.getElementById("rect").style.height="52%";
  document.getElementById("rect").style.borderRadius="0%";
}
function color2(){
  document.getElementById("rect2").style.width="52%";
  document.getElementById("rect2").style.height="52%";
  document.getElementById("rect2").style.borderRadius="0%";
}
function picfade(){
  setTimeout(function () {
        $("#pic").fadeIn();
    }, 3000);
}