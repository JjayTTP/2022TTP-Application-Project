
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

function gotoSection(sectionNum){
    var sideBarSections = document.getElementsByClassName("sectionItem");

    var pageSections = document.getElementsByClassName("sectionContainer");
    pageSections[sectionNum].scrollIntoView({behavior: "smooth"});
}

function updateSelectedSection(){
    var mainContent = document.getElementsByClassName("mainContent")[0];
    var sectionContainers = document.getElementsByClassName("sectionContainer");
    var sideBarSections = document.getElementsByClassName("sectionItem");
    
    for(var i=0; i < sectionContainers.length; i++){
        var scrollAmount = mainContent.scrollTop;
        var sectionHeight = sectionContainers[i].clientHeight;
        var minScroll = function(){
            var sumHeight = 0;
            for(var j=i-1; j >=0; j--){
                sumHeight += sectionContainers[j].clientHeight;
            }
            return sumHeight;
        }();
        var maxScroll = minScroll + sectionHeight;
        if(scrollAmount >= minScroll && scrollAmount < maxScroll){
            if(i != 5){
                if(i > 0){
                    sideBarSections[i-1].classList.remove("selectedSectionItem");
                }
                if(i < sectionContainers.length -1){
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

window.onload = function() {
    var elements = document.getElementsByClassName('myName');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

};



document.getElementsByClassName("mainContent")[0].addEventListener("scroll", function(){
    updateSlider();
    updateSelectedSection();
});

window.addEventListener("load",()=>{

});

window.addEventListener("resize", ()=>{
    adjustSideNavSectHeight();
});
