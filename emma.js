/* KAMPANJ */
(function(){



var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: function(el, i) {
      return 70*i;
    }
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  /* Scroll Kampanj bild */
 function checkForVisibility() {
    var header = document.querySelector(".kampanj-bild ");
    
      if (isElementInViewport(header)) {

        header.classList.add("header-visible");
        
      }  
    
  }

    /* Scroll coca cola */
  function cocacola(){
    var cocacola = document.querySelector(".cocacola");
      if (isElementInViewport(cocacola)) {
  
        anime({
          targets: '.cocacola-logga',
          scale: 2,
          opacity: 1,
          translateX: ['300px'],
          duration: 4000,
        });
        
        anime({
          targets: ".coca-cola-burk",
          scale: 2,
          opacity: 1,
          easing: "easeInCubic",
          duration: 400,
          delay: 200
        });
        
      }  
  }
  
  


  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false);

    addEventListener('DOMContentLoaded', cocacola, false);
    addEventListener('load', cocacola, false);
    addEventListener('scroll', cocacola, false);
  }


/* Glitterburk */

/*
let burk = document.querySelector('.coca-cola-burk');
burk.addEventListener('mouseover', Visibility, false);

function Visibility() {

  let glitter = document.querySelector(".coca-cola-glitter-hide");
  glitter.classList.add("coca-cola-glitter");

  
}
*/


})();