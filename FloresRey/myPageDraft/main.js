
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

// function sideNavSectionHeight(){
//     var contentPage = document.getElementsByClassName("mainContent")[0];
//     var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
//     var pageSections = document.getElementsByClassName("mainSection");
    // var sideBarSectionCont = document.getElementsByClassName("pageSection")[0];
    // var sideBarHeight = sideBarSectionCont.clientHeight;
//     var sectionImages = ["home.png","skills.png","project.png","experience.png","education.png","certificate.png","email.png"];
//     var sectionTitles = ["Home","Skills","Projects","Experience","Education","Awards","Contact"];
//     for(var i=0; i < pageSections.length; i++){
//         var sectionItem = document.createElement("div");
//         sectionItem.classList.add("sectionItem");
//         sectionItem.setAttribute("onclick",`gotoSection(${i})`);

//         if(i == 0){
//             sectionItem.classList.add("selectedSectionItem");
//         }

//         var sectionImg = document.createElement("img");
//         sectionImg.setAttribute("src","../Images/sideNav/"+sectionImages[i]);
//         sectionItem.appendChild(sectionImg);

//         var sectionTextCont = document.createElement("div");
//         sectionTextCont.classList.add("sectionItemText");
//         var sectionPointer = document.createElement("div");
//         sectionPointer.classList.add("sectionPointer");
//         var sectionTextDiv = document.createElement("div");
//         sectionTextDiv.classList.add("sectionTextDiv");
//         sectionTextCont.appendChild(sectionPointer);
//         sectionTextCont.appendChild(sectionTextDiv);
//         sectionText = document.createElement("h1");
//         sectionText.textContent = sectionTitles[i];
//         sectionTextDiv.appendChild(sectionText);

//         sectionItem.appendChild(sectionTextCont);

//         var sectionPageHeight = pageSections[i].clientHeight/pageHeight;
//         var sectionSideBarHeight = sectionPageHeight * sideBarHeight;

//         sectionItem.style.height = sectionSideBarHeight+"px";

//         sideBarSectionCont.appendChild(sectionItem);
//     }
// }

function sideNavSectionHeight(){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageSections = document.getElementsByClassName("mainSection");
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var sideBarSectionCont = document.getElementsByClassName("pageSection")[0];
    var sideBarHeight = sideBarSectionCont.clientHeight;
    var sideBarSections = document.getElementsByClassName("sectionItem");

    for(var i=0; i < 7; i++){
        var sectionPageHeight = pageSections[i].clientHeight/pageHeight;
        var sectionSideBarHeight = sectionPageHeight * sideBarHeight;
    
        sideBarSections[i].style.height = sectionSideBarHeight + "px";
    }
}

function adjustSideNavSectHeight(){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var pageSections = document.getElementsByClassName("mainSection");
    var sideBarSectionCont = document.getElementsByClassName("pageSection")[0];
    var sideBarHeight = sideBarSectionCont.clientHeight;
    var sideBarSections = document.getElementsByClassName("sectionItem");

    for(var i=0; i < pageSections.length; i++){
        var sectionPageHeight = pageSections[i].clientHeight/pageHeight;
        var sectionSideBarHeight = sectionPageHeight * sideBarHeight;
        sideBarSections[i].style.height = sectionSideBarHeight+"px";

    }
}

function gotoSection(sectionNum){
    var sideBarSections = document.getElementsByClassName("sectionItem");

    var pageSections = document.getElementsByClassName("mainSection");
    pageSections[sectionNum].scrollIntoView({behavior: "smooth"});
}

function updateSelectedSection(){
    var mainContent = document.getElementsByClassName("mainContent")[0];
    var mainSections = document.getElementsByClassName("mainSection");
    var sideBarSections = document.getElementsByClassName("sectionItem");
    
    for(var i=0; i < mainSections.length; i++){
        var scrollAmount = mainContent.scrollTop;
        var sectionHeight = mainSections[i].clientHeight;
        var minScroll = function(){
            var sumHeight = 0;
            for(var j=i-1; j >=0; j--){
                sumHeight += mainSections[j].clientHeight;
            }
            return sumHeight;
        }();
        var maxScroll = minScroll + sectionHeight;
        if(scrollAmount >= minScroll && scrollAmount < maxScroll){
            if(i != 5){
                if(i > 0){
                    sideBarSections[i-1].classList.remove("selectedSectionItem");
                }
                if(i < mainSections.length -1){
                    sideBarSections[i+1].classList.remove("selectedSectionItem");
                }
                sideBarSections[i].classList.add("selectedSectionItem");
                break;
            }else{
                if(mainContent.scrollTop != (mainContent.scrollHeight - mainContent.clientHeight)){
                    sideBarSections[4].classList.remove("selectedSectionItem");
                    sideBarSections[5].classList.add("selectedSectionItem");
                    sideBarSections[6].classList.remove("selectedSectionItem");
                }else{
                    sideBarSections[5].classList.remove("selectedSectionItem");
                    sideBarSections[6].classList.add("selectedSectionItem");
                }
            }
        }
    }
}

document.getElementsByClassName("mainContent")[0].addEventListener("scroll", function(){
    updateSlider();
    updateSelectedSection();
});

window.addEventListener("load",()=>{
    // sideNavSectionHeight();
    setTimeout(()=>{
        showProfileImg();
    },4000)
});

window.addEventListener("resize", ()=>{
    adjustSideNavSectHeight();
});
