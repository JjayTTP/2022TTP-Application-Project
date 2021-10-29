var dark_mode = 0; //0 is light mode 1 is dark mode

//Styles we need to change between themes are stored in the javascript instead of css
const header_bar = document.querySelector('#header_bar');
const body = document.querySelector('body');
const button = document.querySelectorAll('button');
const a = document.querySelectorAll('a');
const theme_text = document.querySelector("#theme_text");
const tab_1 = document.querySelector("#tab_1");
const tab_2 = document.querySelector("#tab_2");
const tab_3 = document.querySelector("#tab_3");
const tab_4 = document.querySelector("#tab_4");
const sections = document.querySelectorAll(".sections");


window.onload = function(){
	ChangeTheme();//initialize to dark mode
	ChangeTab(2);//show about section on load
}
function ChangeTab(id){
	for (var i = 0; i < sections.length; i++){
		if (i == id){
			sections[i].style.display = 'initial';
		} else{
			sections[i].style.display = 'none';
		}
}
}
function ChangeTheme(){
	if (dark_mode < 1){//enter dark mode
		body.style.color = 'white';
		body.style.backgroundColor = '#20232b';
		for (var i = 0; i < button.length; i++){
			button[i].style.color = 'white';
		}
		for (var i = 0; i < a.length; i++){
			a[i].style.color = 'white';
		}
		header_bar.style.backgroundColor = '#272930';
		tab_1.style.backgroundColor = '#732222';
		tab_2.style.backgroundColor = '#263191';
		tab_3.style.backgroundColor = '#337982';
		tab_4.style.backgroundColor = '#1f692c';
		theme_text.style.backgroundColor = '#451d85';
		theme_text.innerHTML = 'Dark Mode';
		dark_mode = 1;
	}
	else{//enter light mode
		body.style.color = 'black';
		body.style.backgroundColor = 'white'; 
		for (i = 0; i < button.length; i++){
			button[i].style.color = 'black';
		}
		for (i = 0; i < a.length; i++){
			a[i].style.color = 'black';
		}
		header_bar.style.backgroundColor = '#d1d1d1';
		tab_1.style.backgroundColor = '#f99';
		tab_2.style.backgroundColor = '#99afff';
		tab_3.style.backgroundColor = '#99e0ff';
		tab_4.style.backgroundColor = '#99ffaf';
		theme_text.style.backgroundColor = '#eff5b5';
		theme_text.innerHTML = 'Light Mode';
		dark_mode = 0;
	}
}
