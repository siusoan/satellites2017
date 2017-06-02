function main() {
      //Parallax effect
      $('.parallax-container').parallax();
      var flick = new Flickity( '.carousel', {
         accessibility: true,
         cellAlign: 'center',
         wrapAround: true
      });
      //Artwork squares
      /*
      function hoverEffect() {
        var artworkTitle = document.getElementsByClassName("artwork-link");
        for(k=0; k < artworkTitle.length; k++) {

        }
      }
      var squares = document.getElementsByClassName("artwork-square");
      for(i=0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", hoverEffect);
      }*/
}
window.onload = function(){main();}
