const fadeIn = document.querySelectorAll('.container2');

const appearOptions = {
    threshold: .50,
    rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},appearOptions);

fadeIn.forEach(fade => {
    appearOnScroll.observe(fade);
});

function openNavbutton() {
  document.getElementById("sideNavBar").style.width = "250px";
}

function closeNavbutton() {
  document.getElementById("sideNavBar").style.width = "0";
}