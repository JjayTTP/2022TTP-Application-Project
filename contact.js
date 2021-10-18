window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");
    var status = document.getElementById ("status");

    //Success and Error Functions for after submission

    function success()
    {
        form.reset();
        status.classList.add('success');
        status.innerHTML= "Thanks!"
    }

    function error()
    {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem.";
    }

    // Handle the form submission event
    
    form.addEventListener("submit",function(ev) 
    {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// Helper function for sending an AJAX Request

function ajax(method, url, data, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Accept", "application.json");
    xhr.onreadystatechange = function () 
    {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status == 200)
        {
            success(xhr.response, xhr.responseType);
        }
        else
        {
            error(xhr.status, xhr.responseType);
        }
    };
    xhr.send(data);
}
