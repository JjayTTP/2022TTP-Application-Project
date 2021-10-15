function showProfileImg(){
    var profileImg = document.getElementById("profileImg");

    profileImg.style.left = "3%";
    profileImg.style.transform = "rotate(-360deg)";
    profileImg.style.transition = "left 1.3s ease, transform 1.3s ease";
}

window.addEventListener("load",()=>{
    setTimeout(()=>{
        showProfileImg();
    },4000)
});