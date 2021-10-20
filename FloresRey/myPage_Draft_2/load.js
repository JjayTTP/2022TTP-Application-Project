function sideNavSectionHeight(){
    var contentPage = document.getElementsByClassName("mainContent")[0];
    var pageSections = document.getElementsByClassName("sectionContainer");
    var pageHeight = contentPage.scrollHeight - contentPage.clientHeight;
    var sideBarSectionCont = document.getElementsByClassName("pageSection")[0];
    var sideBarHeight = sideBarSectionCont.clientHeight;
    var sideBarSections = document.getElementsByClassName("sectionItem");

    for(var i=0; i < 7; i++){
        var sectionPageHeight = pageSections[i].clientHeight/pageHeight;
        var sectionSideBarHeight = sectionPageHeight * sideBarHeight;
    
        sideBarSections[i].style.height = sectionSideBarHeight + "px";
    }
    
    var style = document.querySelector('[data="sideSlider"]');
    var sliderHeight = (window.innerHeight / contentPage.scrollHeight) * sideBarHeight - 1;
    style.innerHTML = `.slider::-webkit-slider-thumb {width: ${sliderHeight}px;}`;
}
