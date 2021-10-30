const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
/*
 past this point is skill slider code
 */

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
    prevWrapper.classList.add("selectedSkillTitle");

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
    allSkillCont[skillInfoIndex-1].classList.add("selectedSkillInfo");
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
    nextWrapper.classList.add("selectedSkillTitle");
    
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
    allSkillCont[skillInfoIndex+1].classList.add("selectedSkillInfo");
}