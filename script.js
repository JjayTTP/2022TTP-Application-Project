
//A fucnton to make a border among different section when called
function makeBorder(a) {
    document.getElementById(a).style.border = "#ff9999 2px solid";
}

//A function to remove the border when called
function removeBorder(a) {
    document.getElementById(a).style.border = "";
}

// A fucntion which asks user if user want to leave the current page and go to social media account using 
//confirm function

function goSocialMedia(a) {
    soclaMedia = ["linkedIn", "instagram", "github"];
    var r = confirm("Do you want to leave and go to " + a);
    if (a == soclaMedia[0] && r == true) {
        window.location.href = 'https://www.linkedin.com/in/ankit-kafle-816364198';
    }
    if (a == soclaMedia[1] && r == true) {
        window.location.href = 'https://www.instagram.com/ankit_kafle47/';
    }
    if (a == soclaMedia[2] && r == true) {
        window.location.href = 'https://github.com/ankitkafle1';
    }
    else {
        return 0;
    }
}


//A fucction to check the Name and Presence of message on email form using an alert system
function formValidation() {
    var name = document.emailForm.name.value;
    var message = document.emailForm.message.value;
    if (name == "" || name == null) {
        alert("Please enter your Name to send me an Email");
        return false;
    }
    if (message == "") {
        alert("Please enter a message to send me an Email");
        return false;
    }
    else {
        return true;
    }
}

//A function to add HTML element on screen using JavaScript functions.
//This function accepts one arguemnt and use switch to add desirable html in selected html tag by 
//implementing switch.

function presentStory(a) {
    switch (a) {
        case "zero":
            document.getElementById(a).innerHTML = "The statue next to me is named as a fearless girl. The statue is infront of New York Stock Exchange building. I remember many people statred taking photos like I did once other saw me; doing something in New York City is also about trend setting as there are many tourists and they generally follow the trends.";
            break;
        case "one":
            document.getElementById(a).innerHTML = "I was treeking in Annapurna Base Camp in Nepal. The mountain in the background is Mount Fish Tail. One potter who sang Nepali Hip-Hop song very well captured this pic for me; I wish I had remembered his name.";
            break;
        case "two":
            document.getElementById(a).innerHTML = "This was the first time I visited Washington DC.";
            break;
        case "three":
            document.getElementById(a).innerHTML = "I feel like I should, at least once, grow a long hair, which I did once. I might grow hair again, but, even if don't do it again, I have this picture to look at.";
            break;
        case "four":
            document.getElementById(a).innerHTML = "This picture is taken in Far Western region in Nepal. I am on a bridge which joins entire far-western region of Nepal to other parts of Nepal";
            break;
        case "five":
            document.getElementById(a).innerHTML = "Aren't these roses beautiful?";
            break;
        case "six":
            document.getElementById(a).innerHTML = "This is the tallest build I ever been to. I took this picture when my sister and her husband come in New York city to visit.";
            break;
        default:
            break;
    }
}

//A function to hide HTML contents using JavaScripts. This function accepts html element id as an arguments 
function hideStory(a) {
    document.getElementById(a).innerHTML = "";
}