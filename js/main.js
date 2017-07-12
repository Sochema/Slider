var restart = 0;
superSlider()

    function superSlider() {
      setInterval(superSlider, 3000);
      var images = getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        restart ++;
        if(restart>images.length){
          restart = 1
        }
        images[restart-1].style.display = "block";
    }
