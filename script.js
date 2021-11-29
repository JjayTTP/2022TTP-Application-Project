var one = document.querySelector('#btn-1')
console.log(one)

var question1 = document.querySelector('#card1')
console.log(question1)

one.onclick = function yellow () {
   console.log('clicked!!!')
  question1.innerHTML = `<h4 class="q-color">
             What does HTML stand for?
            </h4>

            <button id="btn-1-1">
            hypertext markup language
            </button>
            <button id="btn-1-2">
           highertext markup language
            </button>`

        var yellowButton = document.querySelector('#btn-1-1')
        console.log(yellowButton)

        var blueButton = document.querySelector('#btn-1-2')
        console.log(blueButton)

        var questionOne = document.querySelector('#card1')


        yellowButton.onclick = function yellow () {
          console.log('clicked!!!')
          questionOne.style.backgroundImage = "url('https://cdn.glitch.com/722fc7df-a9c4-45b2-a2f7-28de4f9a1c19%2Fimage_1_1.jpeg?v=1565964722829')"
          questionOne.innerHTML = ``
        }

        blueButton.onclick = function blue () {
          console.log('clicked!!!')
          questionOne.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/c064cb81580911.5d03901d4c263.jpg')"
          questionOne.innerHTML = `<h1> SORRY, WRONG ANSWER</>`
        }

}

// CARD TWO STARTS HERE===================================================

var two = document.querySelector('#btn-2')
console.log(two)

var question2 = document.querySelector('#card2')
console.log(question2)

two.onclick = function yellow () {
   console.log('clicked!!!')
  question2.innerHTML = `<h4 id="q3" class="q-color">
     Which of the following is the correct CSS syntax
            </h4>

            <button id="btn-2-1">
            Body(color;black:)
            </button>
            <button id="btn-2-2">
            Body(color:black;)
            </button>`

        var yellowButton = document.querySelector('#btn-2-1')
        console.log(yellowButton)

        var blueButton = document.querySelector('#btn-2-2')
        console.log(blueButton)


        var questionTwo = document.querySelector('#card2')

        blueButton.onclick = function yellow () {
          console.log('clicked!!!')
          questionTwo.style.backgroundImage = "url('https://cdn.glitch.com/722fc7df-a9c4-45b2-a2f7-28de4f9a1c19%2Fimage_1_2.jpeg?v=1565964727929')"
          questionTwo.innerHTML = ``
        }

        yellowButton.onclick = function blue () {
          console.log('clicked!!!')
          questionTwo.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/c064cb81580911.5d03901d4c263.jpg')"
          questionTwo.innerHTML = `<h1> SORRY, WRONG ANSWER</>`
        }

}


// CARD THREE STARTS HERE===================================================


var three = document.querySelector('#btn-3')
console.log(three)

var question3 = document.querySelector('#card3')
console.log(question3)

three.onclick = function yellow () {
   console.log('clicked!!!')
  question3.innerHTML = `<h4 id="q3" class="q-color">

If we want define style for an unique element, then which css selector will we use ?
            </h4>

            <button id="btn-3-1">
            ID
            </button>
            <button id="btn-3-2">
            Class
            </button>`

        var yellowButton = document.querySelector('#btn-3-1')
        console.log(yellowButton)

        var blueButton = document.querySelector('#btn-3-2')
        console.log(blueButton)


        var questionThree = document.querySelector('#card3')

        yellowButton.onclick = function pink () {
          console.log('clicked!!!')
          questionThree.style.backgroundImage = "url('https://cdn.glitch.com/722fc7df-a9c4-45b2-a2f7-28de4f9a1c19%2Fimage_2_1.jpeg?v=1565964733939')"
          questionThree.innerHTML = ``
        }

        blueButton.onclick = function green () {
          console.log('clicked!!!')
          questionThree.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/c064cb81580911.5d03901d4c263.jpg')"
          questionThree.innerHTML = `<h1> SORRY, WRONG ANSWER</>`
        }

}


// CARD FOUR STARTS HERE===================================================


var four = document.querySelector('#btn-4')
console.log(four)

var question4 = document.querySelector('#card4')
console.log(question4)

four.onclick = function red () {
   console.log('clicked!!!')
  question4.innerHTML = `<h4 class="q-color">
             The external JavaScript file must contain script tag. True or False?
            </h4>

            <button id="btn-4-1">
             True
            </button>
            <button id="btn-4-2">
             False
            </button>`

        var yellowButton = document.querySelector('#btn-4-1')
        console.log(yellowButton)

        var blueButton = document.querySelector('#btn-4-2')
        console.log(blueButton)


        var questionFour = document.querySelector('#card4')

        yellowButton.onclick = function orange () {
          console.log('clicked!!!')
          questionFour.style.backgroundImage = "url('https://cdn.glitch.com/722fc7df-a9c4-45b2-a2f7-28de4f9a1c19%2Fimage_2_2.jpeg?v=1565964739320')"
          questionFour.innerHTML = ``
        }

        blueButton.onclick = function gray () {
          console.log('clicked!!!')
          questionFour.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/c064cb81580911.5d03901d4c263.jpg')"
          questionFour.innerHTML = `<h1> SORRY, WRONG ANSWER</>`
        }

}




//
