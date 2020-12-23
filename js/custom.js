function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++)
  {
      var b = c[a];
      b.getAttribute('href') && b.hostname !== location.hostname &&(b.target = '_blank')
  }
}
externalLinks();
AOS.init({
  duration:1500
});


//owl carousel initialisation
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  autoplay:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
})


// Animate on scroll library initialization


