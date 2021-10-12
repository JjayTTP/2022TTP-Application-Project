const button = document.getElementById('button')
const navlist =document.getElementById('nav-list')

function toggleButton(){
  navlist.classList.toggle('show')
}
button.addEventListener('click',toggleButton)
