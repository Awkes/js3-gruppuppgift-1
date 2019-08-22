let cherryAnimationStarted = false;

anime({
delay:400,
opacity:[0,1],
targets:'#intro-text',
translateX: [-700,-300],
easing:'easeInQuad'
})

function startCherryAnime(){
anime.timeline({
targets:'#cherry',
translateX:[500,0],
duration: 2000,
easing:'easeInQuad'

}).add({
    delay:2000,
    opacity:0
})
anime.timeline({
    targets:'#cocacola',
    translateX:[-570,0],
    duration: 2000,
    easing:'easeInQuad'
     }).add({
        delay:2000,
        opacity:0
})

anime({
    targets:'#cherryText',
    delay:5000,
    opacity: 1,
    easing:'easeInQuad',
})


anime({
targets:'#cherrycoke',
delay:3000,
opacity:1,
easing:'easeInQuad'
})

anime.timeline({
targets:'#item2',
delay:3000,
opacity:1,
easing:'easeInQuad'
}).add({
    duration:2000,
    translateX:-50
}
)
anime.timeline({
targets:'#item3',
delay:3000,
opacity:1,
easing:'easeInQuad'
}).add({
duration:2000,
translateX:50
}
)
anime.timeline({
targets:'#item4',
delay:3000,
opacity:1,
easing:'easeInQuad'
}).add({
duration:2000,
translateX:-100
}
)

anime.timeline({
   targets:'#item5',
   delay:3000,
   opacity:1,
   easing:'easeInQuad'
   }).add({
     duration:2000,
     translateX:100
    }
)
}

function checkForVisibility() {
    var headers = document.querySelectorAll(".header");
    headers.forEach(function(header) {
      if (isElementInViewport(header) && !cherryAnimationStarted ) {
        startCherryAnime();
        cherryAnimationStarted = true;
      }
    });
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
  }