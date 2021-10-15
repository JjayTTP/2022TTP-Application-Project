function showProfileImg(){
    var profileImg = document.getElementById("profileImg");

    profileImg.style.left = "3%";
    profileImg.style.transform = "rotate(-360deg)";
    profileImg.style.transition = "left 1.3s ease, transform 1.3s ease";
}

function hideTopNav(){
    var topNav = document.getElementsByClassName("topNav")[0];
    var topName_Container = document.getElementsByClassName("topNav_name")[0];
    var topName_Text = topName_Container.getElementsByTagName("h1")[0];
    var topSelection = document.getElementsByClassName("topNav_options")[0];

    topNav.style.height = "0";
    topName_Container.style.top = "-60px";
    topSelection.style.top = "-60px";

    topName_Text.style.animation = "undoTyping";
}
function showTopNav(){
    var topNav = document.getElementsByClassName("topNav")[0];
    var topName_Container = document.getElementsByClassName("topNav_name")[0];
    var topName_Text = topName_Container.getElementsByTagName("h1")[0];
    var topSelection = document.getElementsByClassName("topNav_options")[0];

    topNav.style.height = "60px";
    topName_Container.style.top = "0";
    topSelection.style.top = "0";

    topName_Text.style.animation = "typing 1.2s steps(60, end), blink-caret-mini 1s step-end infinite";
}

window.addEventListener("load",()=>{
    setTimeout(()=>{
        showProfileImg();
    },4000)
});

window.addEventListener("scroll",()=>{
    var scrollAmount = window.scrollY;
    if(scrollAmount > 220){
        showTopNav();
    }else{
        hideTopNav();
    }
});