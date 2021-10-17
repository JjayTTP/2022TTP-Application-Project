
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

function moveSliderDown(){
    var navSlider = document.getElementById("sideNav_Slider");
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var pixelsPerStep = pageHeight/100;
    var scrollAmount = contentPage.scrollTop;
    var slideSteps = 1000/100;

    if(navSlider.value < 1000){
        navSlider.value = parseInt(navSlider.value) + slideSteps;
        
        contentPage.scrollTo(0, scrollAmount + pixelsPerStep);
    }
}

function moveSliderUp(){
    var navSlider = document.getElementById("sideNav_Slider");
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var pixelsPerStep = pageHeight/100;
    var scrollAmount = contentPage.scrollTop;
    var slideSteps = 1000/100;

    if(navSlider.value > 0){
        navSlider.value = parseInt(navSlider.value) - slideSteps;

        contentPage.scrollTo(0, scrollAmount - pixelsPerStep);
    }
}

function moveSlider(event){
    if(event.deltaY > 0){
        moveSliderDown();
    }else{
        moveSliderUp();
    }
}

window.addEventListener("load",()=>{
    setTimeout(()=>{
        showProfileImg();
    },4000)
});
