function hideTopNav(){
    var topNav = document.getElementsByClassName("topNav")[0];
    var topName = document.getElementsByClassName("topNav_name")[0];
    var topSelection = document.getElementsByClassName("topNav_options")[0];

    topNav.style.height = "0";
    topName.style.top = "-60px";
    topSelection.style.top = "-60px";
}
function showTopNav(){
    var topNav = document.getElementsByClassName("topNav")[0];
    var topName = document.getElementsByClassName("topNav_name")[0];
    var topSelection = document.getElementsByClassName("topNav_options")[0];

    topNav.style.height = "60px";
    topName.style.top = "0";
    topSelection.style.top = "0";
}

function loadProfileImg(){
    var profileImg = document.getElementById("profileImg");
    profileImg.style.right = "1.3%";
    profileImg.style.transform = "rotate(-360deg)";
    profileImg.style.transition = "right 1.3s ease, transform 1.3s ease";
}

function loadName(){
    var nameContainer = document.getElementsByClassName("myName")[0];
    var nameText = nameContainer.getElementsByTagName("h1")[0];
    var imgContainer = nameContainer.getElementsByClassName("myImgContainer")[0];
    var letterO = imgContainer.getElementsByTagName("h1")[0];
    var profileImg = document.getElementById("profileImg");

    nameText.style.opacity = "1";
    letterO.style.opacity = "1";

    nameContainer.style.top = "0";
    nameContainer.style.transition = "top 1.5s ease";

    nameText.style.fontSize = "13.5vw";

    nameText.style.transition = "opacity 1.5s ease, font-size 1s ease";

    setTimeout(function(){
        nameText.style.transition = "font-size 0s";
        letterO.style.transition = "font-size 0s";
    },1000);

    loadAboutMe();

    setTimeout(loadProfileImg,1500);
}

function loadAboutMe(){
    var aboutMeText = document.getElementsByClassName("aboutMe")[0].getElementsByTagName("h2")[0];

    aboutMeText.style.top = "0";
    aboutMeText.style.transition = "top 1.8s ease";
}

window.addEventListener("load", function(){
        loadName();

});

window.addEventListener("scroll",function(){
    var scrollAmount = window.scrollY;
    if(scrollAmount > 60){
        showTopNav();
    }else{
        hideTopNav();
    }
});