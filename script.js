let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    currentIndex++;

    if (currentIndex > slides.length) { currentIndex = 1 }

    slides[currentIndex - 1].style.display = 'block';

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides(); // Initialize the slider




ScrollReveal({
    distance: '70px',
    duration: 1000,
    delay: 100,
  });
  
  ScrollReveal().reveal('#image4, #image3, #image5', {origin: 'left'});
  ScrollReveal().reveal('#image1, #image2 ', {origin: 'right'});
  ScrollReveal().reveal('.', {origin: 'top'});
  ScrollReveal().reveal('.container-square, .image-pair, .about-us-container, .menu-container, .sports-section, .reservations-section', {origin: 'bottom'});
  




  function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('scroll', debounce(yourScrollFunction, 100));





