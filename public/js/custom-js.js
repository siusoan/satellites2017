function main() {
      $('.parallax-container').parallax();
      var flick = new Flickity( '.carousel', {
         accessibility: true,
         cellAlign: 'center',
         wrapAround: true
      });
}
window.onload = function(){main();}
