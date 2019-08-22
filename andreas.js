(()=> {

  // Selektorer
  const contact = document.querySelector('#contact');
  const contactImg = document.querySelector('.contact-img');
  
  // Funktion som animerar kontaktdelen
  function animateContact() {
    if (isElementInViewport(contact)) {
      contactImg.classList.add('contact-img-active')  // Bild
      anime({
        targets: '.contact-form > *',
        translateX: '-50vw',
        delay: (el,i) => i*10,
        duration: 2000,
        easing: 'easeOutElastic'
      });
    }
    else {
      contactImg.classList.remove('contact-img-active');
      anime({
        targets: '.contact-form > *',
        translateX: '50vw',
      });
    } 
  }
  
  // Eventlisteners som triggar kontaktdelens animationer
  addEventListener('DOMContentLoaded', animateContact, false); 
  addEventListener('load', animateContact, false);
  addEventListener('scroll', animateContact, false);
  
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