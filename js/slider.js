$(document).ready(function() {

  var categorySlider = new Swiper('.category__content', {
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
        spaceBetween: 26
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
  
  var unreleasedSlider = new Swiper('.unreleased__swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        // spaceBetween: 20
      },
      // when window width is >= 531px
      531: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        // spaceBetween: 20
      },
      // when window width is >= 801px
      801: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        // spaceBetween: 20
      },
      // when window width is >= 1041px
      1041: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 26
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 26
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.unreleased__button--next',
      prevEl: '.unreleased__button--previous',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
  });







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