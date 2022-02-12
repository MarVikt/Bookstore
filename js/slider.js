$(document).ready(function() {

  var hotelSlider = new Swiper('.category__content', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 2,
    // loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 641px
      641: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        // spaceBetween: 20
      },
      // when window width is >= 861px
      861: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        // spaceBetween: 30
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.category__button--next',
      prevEl: '.category__button--previous',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
  });
  


  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });





  // var aboutUsSlider = new Swiper('.about-us__feedback', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.about-us__button--next',
  //     prevEl: '.about-us__button--previous',
  //   },
  
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
    
  // });

});