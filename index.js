ScrollReveal({
    distance: '70px',
    duration: 3000,
    delay: 300,
  });
  
  ScrollReveal().reveal('#image4, #image3, #image5', {origin: 'left'});
  ScrollReveal().reveal('#image1, #image2 ', {origin: 'right'});
  ScrollReveal().reveal('.', {origin: 'top'});
  ScrollReveal().reveal('.container-square, .image-pair, .about-us-container, .menu-container, .sports-section, .reservations-section', {origin: 'bottom'});
  