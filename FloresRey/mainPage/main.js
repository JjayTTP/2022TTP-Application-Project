function loadProfileImg(){
    var profileImg = document.getElementById("profileImg");
    profileImg.style.right = "3%";
    profileImg.style.transform = "rotate(-360deg)";
    profileImg.style.transition = "right 1s, transform 1s";
}

window.addEventListener("load",function(){

    // loadProfileImg();

});