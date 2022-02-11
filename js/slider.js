$(document).ready(function() {

  var hotelSlider = new Swiper('.category__content', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    // loop: true,
  
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