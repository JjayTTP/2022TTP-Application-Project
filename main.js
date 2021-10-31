console.log("It works")

// Email Form JavaScript
$(document).ready(function () {
    $('.submit').click(function (event) {

        console.log('CLicked Button')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (name.length > 0) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Please enter your name</div>')
        }

        if (email.length >= 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Please enter your email</div>')
        }

        if (subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>No subject (optional)</div>')
        }

        if (message.length >= 10) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Please enter a message longer than 10 characters</div>')
        }
        setTimeout(function () {
            $(statusElm).empty()
        }, 3000)

    })
    
})

