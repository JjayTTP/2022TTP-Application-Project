
function showProfileImg(){
    var profileImg = document.getElementById("profileImg");

    profileImg.style.left = "0";
    profileImg.style.transform = "rotate(-360deg)";
    profileImg.style.transition = "left 1.3s ease, transform 1.3s ease";
}

function scrollPage(slideAmount){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var pixelsPerScroller = pageHeight/1000;
    var scrollAmount = pixelsPerScroller * slideAmount;

    console.log(pageHeight);
    contentPage.scrollTo(0,scrollAmount);
}

function updateSlider(){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var navSlider = document.getElementById("sideNav_Slider");
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var scrollAmount = contentPage.scrollTop;
    var scrollerPerPixel = 1000/pageHeight;
    var slideAmount = scrollerPerPixel * scrollAmount;

    navSlider.value = slideAmount;
}


window.addEventListener("load",()=>{
    setTimeout(()=>{
        showProfileImg();
    },4000)
});
