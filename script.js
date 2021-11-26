
document.querySelector("#button").addEventListener("click", changeRule);

function changeRule() {
    let stylesheet = document.styleSheets[0];
    stylesheet.insertRule("div { color: blue; }");
}


let p = document.querySelector(".about");
p.style = "color: maroon";





