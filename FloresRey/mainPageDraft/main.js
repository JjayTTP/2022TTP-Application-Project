
function showMainInfo(){
    var profileImg = document.getElementsByClassName("myImg")[0];
    var container = document.getElementsByClassName("myInfo")[0];
    var leftAmount = container.offsetWidth-310;

    profileImg.style.right = leftAmount+"px";
    profileImg.style.webkitTransform = 'rotate(-360deg)';
    // profileImg.classList.add("rotateImg");
}


window.addEventListener("load", ()=>{
    setTimeout(showMainInfo,1000);
});