function aboutButton()
{
    var element = document.getElementById("main");
    var info = document.getElementById("Info");

    if (element.style.display==="block")
    {
        element.style.display="none"
        info.style.display="block"
        document.getElementById("about").style.display="block" 
    }

    else
    {
        info.style.display="block"
        element.style.display="none"
        document.getElementById("resume").style.display="none"
        document.getElementById("project").style.display="none"
        document.getElementById("contact").style.display="none"
        document.getElementById("about").style.display="block"
    }

}

function resumeButton()
{
    var element = document.getElementById("main");
    var info = document.getElementById("Info");

    if (element.style.display==="block")
    {
        element.style.display="none"
        info.style.display="block"
        document.getElementById("resume").style.display="block" 
    }

    else
    {
        info.style.display="block"
        element.style.display="none"
        document.getElementById("resume").style.display="block"
        document.getElementById("project").style.display="none"
        document.getElementById("contact").style.display="none"
        document.getElementById("about").style.display="none"
    }

}

function projectButton()
{
    var element = document.getElementById("main");
    var info = document.getElementById("Info");

    if (element.style.display==="block")
    {
        element.style.display="none"
        info.style.display="block"
        document.getElementById("project").style.display="block" 
    }

    else
    {
        info.style.display="block"
        element.style.display="none"
        document.getElementById("resume").style.display="none"
        document.getElementById("project").style.display="block"
        document.getElementById("contact").style.display="none"
        document.getElementById("about").style.display="none"
    }

}

function contactButton()
{
    var element = document.getElementById("main");
    var info = document.getElementById("Info");

    if (element.style.display==="block")
    {
        element.style.display="none"
        info.style.display="block"
        document.getElementById("contact").style.display="block" 
    }

    else
    {
        info.style.display="block"
        element.style.display="none"
        document.getElementById("resume").style.display="none"
        document.getElementById("project").style.display="none"
        document.getElementById("contact").style.display="block"
        document.getElementById("about").style.display="none"
    }

}


