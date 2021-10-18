var homeContainer = document.getElementById("homeContainer");
var contactContainer= document.getElementById("contactContainer");
function showContact(){
    homeContainer.style.display = "none";
    contactContainer.style.display = "block";
 
}

function showHome(){
    homeContainer.style.display = "block";
    contactContainer.style.display = "none";

}

