var images = document.getElementsByTagName('img');
var previous = document.getElementById('previous');
var next = document.getElementById('next');


for (var i = 0; i < images.length; i++) {
    images[i] = superSlider(images[i]);
  }


function superSlider(slide){
    var id = setInterval(reverse, 50);

    function reverse(slide) {
        var taille = 0;
        if (taille == 640) {
            clearInterval(id);
        } else {
            taille++;
            slide.style.width = taille + "px";
        }
    }
}


// next.addEventListener("click", function(){
//   images[i++].innerHTML;
// })
//
// previous.addEventListener("click", function(){
//   images[i--]...
//
//
// })
