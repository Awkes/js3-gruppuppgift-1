function animateSplash() {
    var splashes = document.querySelectorAll(".splash");
    var colaOrange = document.querySelector(".colaOrange");
    var title = document.querySelector(".newsTitle");
      if (isElementInViewport(title)) {
        splashes.forEach(function(splash){
          splash.classList.add("splashVisible");
        });
        colaOrange.classList.add("colaOrangeVisible");
        title.classList.add("newsTitleVisible");
      }
  }

function animateLight() {
    var colaLightTrigger = document.querySelector(".colaLightTrigger");
    var colaLightTxt = document.querySelector(".colaLightTxt");
    var colaLightImg = document.querySelector(".colaLightImg");
      if (isElementInViewport(colaLightTrigger)) {
        colaLightTxt.classList.add("colaLightTxtVisible");
        colaLightImg.classList.add("colaLightImgVisible");
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

  addEventListener('DOMContentLoaded', () => { animateLight(); animateSplash(); }); 
  addEventListener('load', () => { animateLight(); animateSplash(); });
  addEventListener('scroll', () => { animateLight(); animateSplash(); });