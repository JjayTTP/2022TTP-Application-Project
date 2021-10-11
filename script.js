


function goSocialMedia(a)
{
    soclaMedia = ["linkedIn", "instagram","github"];
    var r = confirm("Do you want to leave and go to " + a);
    if(a ==soclaMedia[0] && r == true)
    {
        window.location.href = 'https://www.linkedin.com/in/ankit-kafle-816364198';
    }
    if(a==soclaMedia[1] && r == true)
    {
        window.location.href = 'https://www.instagram.com/ankit_kafle47/';
    }
    if(a==soclaMedia[2] && r == true)
    {
        window.location.href = 'https://github.com/ankitkafle1';
    }
    else
    {
        return 0;
    }
}


function formValidation()
{
    var name = document.emailForm.name.value;
    var message = document.emailForm.message.value;
    if(name=="" || name ==null)
    {
        alert("Please enter your Name to send me an Email");
        return false;
    }
    if(message =="")
    {
        alert("Please enter a message to send me an Email");
        return false;
    }
    else
        {
            return true;
        }
}