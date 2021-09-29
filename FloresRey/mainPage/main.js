function loadName(){
    var profileImg = document.getElementById("profileImg");
    profileImg.style.right = "3%";
    profileImg.style.transition = "right 1s";
}

window.addEventListener("load",function(){

    loadName();

});