function checkForVisibility() {
    var splashes = document.querySelectorAll(".splash");
    var title = document.querySelector(".newsTitle");
    splashes.forEach(function(splash) {
      if (isElementInViewport(title)) {
        splash.classList.add("splashVisible");
      } else{
        splash.classList.remove("splashVisible");
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