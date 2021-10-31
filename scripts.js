var dark_mode = 0; //0 is light mode 1 is dark mode

//Styles we need to change between themes are stored in the javascript instead of css
const header_bar = document.querySelector('#header_bar');
const body = document.querySelector('body');
const button = document.querySelectorAll('button');
const a = document.querySelectorAll('a');
const theme_text = document.querySelector("#theme_text");
const tabs = document.querySelectorAll(".tabs");
const sections = document.querySelectorAll(".sections");
const bio = document.querySelector("#bio");
const skill_icons = document.querySelectorAll(".skill_icons");

const tab_color_dark = ['#732222', '#263191', '#337982', '#1f692c'];
const tab_color_dark_active = ['#a14c4c', '#4853b0', '#589aa3', '#3a8a48'];
const tab_color_light = ['#f99', '#99afff', '#99e0ff', '#99ffaf'];
const tab_color_light_active = ['#f74f4f', '#5779f7', '#55c3f2', '#4ef271']; 
const palette_color_dark = ['#20232b','#272930', '#3b3e47'];
const palette_color_light = ['white', '#d1d1d1', '#b3b3b3'];

window.onload = function(){
	ChangeTheme();//initialize to dark mode
	ChangeTab(0);//show about section on load
}

function ChangeTab(id){
	for (var i = 0; i < sections.length; i++){
		if (i == id){
			sections[i].style.display = 'initial';
			if(dark_mode == 1){
				tabs[i].style.backgroundColor = tab_color_dark_active[i];
			}else{
				tabs[i].style.backgroundColor = tab_color_light_active[i];
			}
		} else{
			sections[i].style.display = 'none';
			if(dark_mode == 1){
				tabs[i].style.backgroundColor = tab_color_dark[i];
			}else{
				tabs[i].style.backgroundColor = tab_color_light[i];
			}
		}
	}
}
function ChangeTheme(){
	if (dark_mode < 1){//enter dark mode
		body.style.color = 'white'; 
		body.style.backgroundColor = palette_color_dark[0]; 
		for (var i = 0; i < button.length; i++){
			button[i].style.color = 'white';
		}
		for (var i = 0; i < a.length; i++){
			a[i].style.color = 'white';
		}
		header_bar.style.backgroundColor = palette_color_dark[1]; 
		for (var i = 0; i < tabs.length; i++){
			tabs[i].style.backgroundColor = tab_color_dark[i];
		}
		bio.style.borderColor = palette_color_dark[2];
		for (var i = 0; i < skill_icons.length; i++){
			skill_icons[i].style.borderColor = palette_color_dark[2];
		}
		theme_text.style.backgroundColor = '#451d85';
		theme_text.innerHTML = 'Dark Mode';
		dark_mode = 1;
	}
	else{//enter light mode
		body.style.color = 'black';
		body.style.backgroundColor = palette_color_light[0]; 
		for (i = 0; i < button.length; i++){
			button[i].style.color = 'black';
		}
		for (i = 0; i < a.length; i++){
			a[i].style.color = 'black';
		}
		header_bar.style.backgroundColor = palette_color_light[1];
		for (var i = 0; i < tabs.length; i++){
			tabs[i].style.backgroundColor = tab_color_light[i];
		}
		bio.style.borderColor = palette_color_light[2];
		for (var i = 0; i < skill_icons.length; i++){
			skill_icons[i].style.borderColor = palette_color_light[1];
		}
		theme_text.style.backgroundColor = '#eff5b5';
		theme_text.innerHTML = 'Light Mode';
		dark_mode = 0;
	}
}
