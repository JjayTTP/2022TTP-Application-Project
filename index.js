function revealMessage1(){
    document.getElementById("a1").style.display = 'block';
}
function revealMessage2(){
    document.getElementById("a2").style.display = 'block';
}
function revealMessage3(){
    document.getElementById("a3").style.display = 'block';
}

function show() {
    document.getElementById('id1').style.maxHeight = "60px";
    var images = document.querySelectorAll("#id1 img");
    for(var i = 0; i < images.length; i++)
    {
      images[i].src = images[i].getAttribute('data-src');
    }
  }