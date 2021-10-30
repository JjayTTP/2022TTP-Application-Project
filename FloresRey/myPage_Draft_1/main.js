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
        var sectionBottom = sectionTop + sectionContainers[i].clientHeight - 1;
        if((sectionTop >= scrollAmount && sectionTop < bottomView) || (sectionBottom > scrollAmount && sectionBottom < bottomView) || (sectionTop <= scrollAmount && bottomView <= sectionBottom)){
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

function gotoSkill(selectedSkill){
    var skillIndicator = document.getElementsByClassName("skillIndicator")[0];
    var skillIndicatorCont = document.getElementsByClassName("skillIndicatorCont")[0];
    var skillTitles = document.getElementsByClassName("skillTitleItem");
    var heightPerTitle = skillIndicatorCont.clientHeight / skillTitles.length;
    var translateAmount = heightPerTitle * selectedSkill;

    skillIndicator.style.transform = `translateY(${translateAmount}px)`;
    skillIndicator.style.transition = "all 0.2s linear";

    var currentSelectedSkill = function(){
        for(var i=0; i < skillTitles.length; i++){
            if(skillTitles[i].classList.contains("selectedSkillTitle")){
                return i;
            }
        }
        return -1;
    }();

    skillTitles[currentSelectedSkill].classList.remove("selectedSkillTitle");
    skillTitles[selectedSkill].classList.add("selectedSkillTitle");

    var skillInfoItems = document.getElementsByClassName("skillInfoItem");
    skillInfoItems[currentSelectedSkill].style.display = "none";
    skillInfoItems[selectedSkill].style.display = "block";
}

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

function submitMessage(){
    var messengerMessage = String(document.getElementsByClassName("userMessage")[0].value);

    window.location.href = `mailto:reyhector1234@gmail.com?subject=Saying Hello&body=${messengerMessage}%0D%0A%0D%0A`;
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
    updateSelectedSection();
    updateSlider();
});
