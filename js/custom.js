function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++)
  {
      var b = c[a];
      b.getAttribute('href') && b.hostname !== location.hostname &&(b.target = '_blank')
  }
}
externalLinks();

// Animate on scroll library initialization
AOS.init({
  duration:1000
});

/*window.onscroll = function(){
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector(".navigation").style.position = "fixed";
    document.querySelector(".navigation").style.width = "100%";
    document.querySelector(".navigation").style.background = "white";
    document.querySelector(".navigation").style.zIndex = "100";
    document.querySelector(".navigation").style.boxShadow = "3px 10px 20px #a7a7a7";
    document.querySelector(".navigation").style.padding = "0.6rem";
    
    document.querySelector(".blm").style.display = "none";
  } else {
    document.querySelector(".navigation").style.position = "static";
    document.querySelector(".navigation").style.width = "initial";
    document.querySelector(".navigation").style.background = "initial";
    document.querySelector(".navigation").style.zIndex = "initial";
    document.querySelector(".navigation").style.boxShadow = "none";
    document.querySelector(".blm").style.display = "flex";
  }
}*/

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






