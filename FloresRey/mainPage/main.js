function loadName(){
    var profileImg = document.getElementsByClassName("myImg")[0];
    var container = document.getElementsByClassName("myName")[0];
    var windowWidth = window.innerWidth;
    var containerWidth = container.clientWidth;
    var documentWidth = document.body.clientWidth;
    console.log(containerWidth,windowWidth,documentWidth);

    var leftAmount = (containerWidth*0.335).toString()+"px";
    profileImg.style.right = leftAmount;
    profileImg.style.webkitTransform = 'rotate(-360deg)';
}

window.addEventListener("load",function(){

    loadName();

});