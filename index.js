function show1() {
    document.getElementById('id1').style.maxHeight = "60px";
    var images = document.querySelectorAll("#id1 img");
    for(var i = 0; i < images.length; i++)
    {
      images[i].src = images[i].getAttribute('data-src');
    }
  }

  function show2() {
    document.getElementById('id2').style.maxHeight = "60px";
    var images = document.querySelectorAll("#id2 img");
    for(var i = 0; i < images.length; i++)
    {
      images[i].src = images[i].getAttribute('data-src');
    }
  }

   function show3() {
    document.getElementById('id3').style.maxHeight = "60px";
    var images = document.querySelectorAll("#id3 img");
    for(var i = 0; i < images.length; i++)
    {
      images[i].src = images[i].getAttribute('data-src');
    }
  }