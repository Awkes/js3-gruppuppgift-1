(() => {
  // Coca Cola Zero
  const ccZero = document.querySelector('#cc-zero');
  const ccZeroText = document.querySelector('.cc-zero-text > p');
  let ccZeroAnimated = false; // Flagga för att animationen bara ska köras en gång

  function animateCocaColaZero() {
    if (isElementInViewport(ccZero) && !ccZeroAnimated) {
      anime.timeline().add({
        targets: '.cc-zero-img',
        opacity: [0,0.5,1],
        duration: 400,
        delay: (el,i) => i*500,
      }).add({
        targets: '.cc-zero-chr',
        opacity: [0,1],
        duration: 500,
        delay: (el,i) => i*30
      }).add({
        targets: '.cc-zero-logo',
        rotate: [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10],
        duration: 100
      });
      ccZeroAnimated = true;
    }
  }

  function spanCharacters(el) {
    let content = '';
    for (let chr of el.textContent) {
      content += '<span class="cc-zero-chr">'+chr+'</span>';
    }
    el.innerHTML = content;
  }
  spanCharacters(ccZeroText)

  // Kontakt
  const contact = document.querySelector('#contact');
  const contactImg = document.querySelector('.contact-img');
  
  function animateContact() {
    if (isElementInViewport(contact)) {
      contactImg.classList.add('contact-img-active');
      anime({
        targets: '.contact-form > *',
        translateX: '-50vw',
        delay: (el,i) => i*10,
        duration: 2000,
        easing: 'easeOutElastic'
      });
    }
  }
  
  // Eventlisteners för att trigga animationerna
  addEventListener('DOMContentLoaded', () => { animateContact(); animateCocaColaZero(); }); 
  addEventListener('load', () => { animateContact(); animateCocaColaZero(); });
  addEventListener('scroll', () => { animateContact(); animateCocaColaZero(); });

  // Funktion för att kontrollera om ett element är i viewporten
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }

})();