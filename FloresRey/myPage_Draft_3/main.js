storageLocal = window.localStorage;

function scrollPage(slideAmount){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var pixelsPerScroller = pageHeight/1000;
    var scrollAmount = pixelsPerScroller * slideAmount;

    contentPage.scrollTo(0,scrollAmount);
}

function updateSlider(){

    var contentPage = document.getElementsByClassName("mainContent")[0];
    var navSlider = document.getElementById("sideNav_Slider");
    var scrollLimit = contentPage.scrollHeight - contentPage.clientHeight;
    var scrollAmount = contentPage.scrollTop;

    var scrollCover = scrollAmount / scrollLimit;
    var slideAmount = 1000 * scrollCover;
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

function gotoSection(sectionNum){
    var sideBarSections = document.getElementsByClassName("sectionItem");

    var pageSections = document.getElementsByClassName("sectionContainer");
    pageSections[sectionNum].scrollIntoView({behavior: "smooth"});
}

function loadtoSection(sectionNum){
    var sideBarSections = document.getElementsByClassName("sectionItem");
    sideBarSections[0].classList.remove("selectedSectionItem");
    
    var pageSections = document.getElementsByClassName("sectionContainer");
    pageSections[sectionNum].scrollIntoView({behavior: "instant"});
}
console.log(localStorage.getItem("lastSection"))
function updateSelectedSection(){
    var mainContent = document.getElementsByClassName("mainContent")[0];
    var sectionContainers = document.getElementsByClassName("sectionContainer");
    var sideBarSections = document.getElementsByClassName("sectionItem");

    var scrollAmount = mainContent.scrollTop;
    var bottomView = scrollAmount + mainContent.clientHeight;

    var initialSection;

    for(var i=0; i < sectionContainers.length; i++){
        var sectionTop = function(){
            var sumHeight = 0;
            for(var j=i-1; j >=0; j--){
                sumHeight += sectionContainers[j].clientHeight;
            }
            return sumHeight;
        }();
        var sectionBottom = sectionTop + sectionContainers[i].clientHeight;
        if((sectionTop >= scrollAmount && sectionTop < bottomView) || (sectionBottom > scrollAmount && sectionBottom <= bottomView) || (sectionTop <= scrollAmount && bottomView <= sectionBottom)){
            sideBarSections[i].classList.add("selectedSectionItem");
            if(initialSection === undefined || i < initialSection){
                initialSection = i;
            }
        }else{
            sideBarSections[i].classList.remove("selectedSectionItem");
        }
    }
    if(localStorage.getItem('lastSection') != initialSection){
        localStorage.setItem('lastSection',initialSection);
    }
    
    // for(var i=0; i < sectionContainers.length; i++){
    //     var scrollAmount = mainContent.scrollTop;
    //     var sectionHeight = sectionContainers[i].clientHeight;
        // var minScroll = function(){
        //     var sumHeight = 0;
        //     for(var j=i-1; j >=0; j--){
        //         sumHeight += sectionContainers[j].clientHeight;
        //     }
        //     return sumHeight;
        // }();
    //     var maxScroll = minScroll + sectionHeight;
    //     if(scrollAmount >= minScroll && scrollAmount < maxScroll){
    //         if(i != 4){
    //             if(i > 0){
    //                 sideBarSections[i-1].classList.remove("selectedSectionItem");
    //             }
    //             if(i < sectionContainers.length -1){
    //                 sideBarSections[i+1].classList.remove("selectedSectionItem");
    //             }
    //             sideBarSections[i].classList.add("selectedSectionItem");
                // if(localStorage.getItem('lastSection') != i){
                //     localStorage.setItem('lastSection',i);
                // }
    //             break;
    //         }else{
    //             if(mainContent.scrollTop != (mainContent.scrollHeight - mainContent.clientHeight)){
    //                 sideBarSections[3].classList.remove("selectedSectionItem");
    //                 sideBarSections[4].classList.add("selectedSectionItem");
    //                 sideBarSections[5].classList.remove("selectedSectionItem");
    //             }else{
    //                 sideBarSections[4].classList.remove("selectedSectionItem");
    //                 sideBarSections[5].classList.add("selectedSectionItem");
    //             }
    //         }
    //     }
    // }

}

function adjustSideNavSectHeight(){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var pageSections = document.getElementsByClassName("sectionContainer");
    var sideBarSectionCont = document.getElementsByClassName("pageSection")[0];
    var sideBarHeight = sideBarSectionCont.clientHeight;
    var sideBarSections = document.getElementsByClassName("sectionItem");

    for(var i=0; i < pageSections.length; i++){
        var sectionPageHeight = pageSections[i].clientHeight/pageHeight;
        var sectionSideBarHeight = sectionPageHeight * sideBarHeight;
        sideBarSections[i].style.height = sectionSideBarHeight+"px";

    }

    var style = document.querySelector('[data="sideSlider"]');
    var sliderHeight = (window.innerHeight / contentPage.scrollHeight) * sideBarHeight;
    style.innerHTML = `.slider::-webkit-slider-thumb {width: ${sliderHeight}px;}`;
}


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    if(this.toRotate[i] == this.toRotate[this.toRotate.length-1] && this.isDeleting){
        return;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

function showName(){
    var elements = document.getElementsByClassName('myName');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
}

var allowSkillChange = true;
var allTitles = ["Front End Development", "Back End Development", "Database Management", "Software Development", "Analytics"];
var allInfo = ["frontEndSkill","backEndSkill", "DBArchitectureSkill","softwareEngineeringSkill","analyticsSkill"];
function prevSkill(){
    var titleCont = document.getElementsByClassName("skillTitleCont")[0];
    var currentTitleElem = document.getElementsByClassName("skillTitleWrapper")[0];
    var currentTitleText = currentTitleElem.getElementsByTagName("h1")[0];
    var allSkillCont = document.getElementsByClassName("skillWrapper");
    var skillContentDisplay = document.getElementsByClassName("skillDisplay")[0];

    if(!allowSkillChange){
        return;
    }

    var currentSkillIndex = (function(){
        for(var i=0; i < allTitles.length; i++){
            if(allTitles[i] === currentTitleText.innerHTML){
                return i;
            }
        }
        return -1;
    })();

    var prevSkillIndex = (function(){
        if(currentSkillIndex !== 0){
            return currentSkillIndex - 1;
        }else{
            return allSkillCont.length - 1;
        }
    })();

    var prevWrapper = document.createElement("div");
    prevWrapper.classList.add("skillTitleWrapper");
    
    var prevElem = document.createElement("h1");
    prevElem.classList.add("skillTitle");
    prevElem.innerHTML = allTitles[prevSkillIndex];


    prevWrapper.appendChild(prevElem);
    titleCont.prepend(prevWrapper);

    currentTitleElem.classList.remove("selectedSkillTitle");
    currentTitleElem.classList.remove("fade");
    prevWrapper.classList.add("selectedSkillTitle");
    prevWrapper.classList.add("fade");

    setTimeout(function(){
        currentTitleElem.remove();
    },300)
    
    allowSkillChange = false;
    setTimeout(function(){
        allowSkillChange = true;
    },350);

    var skillInfoIndex = (()=>{
        for(var i=0; i < allSkillCont.length; i++){
            if(allSkillCont[i].getAttribute("id") === allInfo[currentSkillIndex]){
                return i;
            }
        }
        return -1;
    })();

    if(skillInfoIndex === 0){
        var lastElement = allSkillCont[allSkillCont.length - 1];
        skillContentDisplay.removeChild(allSkillCont[allSkillCont.length - 1]);
        skillContentDisplay.prepend(lastElement);
        skillInfoIndex++;
    }
    allSkillCont[skillInfoIndex].classList.remove("selectedSkillInfo");
    allSkillCont[skillInfoIndex].classList.remove("fade");
    allSkillCont[skillInfoIndex-1].classList.add("selectedSkillInfo");
    allSkillCont[skillInfoIndex-1].classList.add("fade");
}

function nextSkill(){
    var titleCont = document.getElementsByClassName("skillTitleCont")[0];
    var currentTitleElem = document.getElementsByClassName("skillTitleWrapper")[0];
    var currentTitleText = currentTitleElem.getElementsByTagName("h1")[0];
    var allSkillCont = document.getElementsByClassName("skillWrapper");
    var skillContentDisplay = document.getElementsByClassName("skillDisplay")[0];

    if(!allowSkillChange){
        return;
    }

    var currentSkillIndex = (function(){
        for(var i=0; i < allTitles.length; i++){
            if(allTitles[i] === currentTitleText.innerHTML){
                return i;
            }
        }
        return -1;
    })();

    var nextSkillIndex = (function(){
        if(currentSkillIndex !== allTitles.length - 1){
            return currentSkillIndex + 1;
        }else{
            return 0;
        }
    })();

    var nextWrapper = document.createElement("div");
    nextWrapper.classList.add("skillTitleWrapper");
    
    var nextElem = document.createElement("h1");
    nextElem.classList.add("skillTitle");
    nextElem.innerHTML = allTitles[nextSkillIndex];

    nextWrapper.appendChild(nextElem);
    titleCont.appendChild(nextWrapper);

    currentTitleElem.classList.remove("selectedSkillTitle");
    currentTitleElem.classList.remove("fade");
    nextWrapper.classList.add("selectedSkillTitle");
    nextWrapper.classList.add("fade");
    
    setTimeout(function(){
        currentTitleElem.remove();
    },300)
    
    allowSkillChange = false;
    setTimeout(function(){
        allowSkillChange = true;
    },350);

    var skillInfoIndex = (()=>{
        for(var i=0; i < allSkillCont.length; i++){
            if(allSkillCont[i].getAttribute("id") === allInfo[currentSkillIndex]){
                return i;
            }
        }
        return -1;
    })();

    if(skillInfoIndex === allSkillCont.length - 1){
        var firstElement = allSkillCont[0];
        skillContentDisplay.removeChild(allSkillCont[0]);
        skillContentDisplay.appendChild(firstElement);
        skillInfoIndex--;
    }
    allSkillCont[skillInfoIndex].classList.remove("selectedSkillInfo");
    allSkillCont[skillInfoIndex].classList.remove("fade");
    allSkillCont[skillInfoIndex+1].classList.add("selectedSkillInfo");
    allSkillCont[skillInfoIndex+1].classList.add("fade");
}

window.onload = function() {
    showName();

};

document.getElementsByClassName("mainContent")[0].addEventListener("scroll", function(){
    updateSlider();
    updateSelectedSection();
});

window.addEventListener("load",()=>{
    if(storageLocal.getItem('lastSection') != null && storageLocal.getItem('lastSection') != 0){
        loadtoSection(storageLocal.getItem('lastSection'));
    }
    adjustSideNavSectHeight();
});

window.addEventListener("resize", ()=>{
    adjustSideNavSectHeight();
});
