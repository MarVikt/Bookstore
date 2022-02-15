$(document).ready(function() {

  // var categorySlider = new Swiper('.category__content', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   slidesPerView: 4,
  //   // slidesPerGroup: 2,
  //   grid: {
  //     rows: 2,
  //   },
  //   fill: 'row',
  //   rows: 2,
  //   // loop: true,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 641px
  //     641: {
  //       slidesPerView: 3,
  //       slidesPerGroup: 3,
  //       // spaceBetween: 20
  //     },
  //     // when window width is >= 861px
  //     861: {
  //       slidesPerView: 4,
  //       slidesPerGroup: 4,
  //       spaceBetween: 26
  //     },
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.category__button--next',
  //     prevEl: '.category__button--previous',
  //   },
  
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
    
  // });
  
  $('.category__wrapper').slick({
    infinite: false, // бесконечная прокрутка слайдов
    variableWidth: false, // отключает автоматический расчет ширины одного слайда
    appendArrows: $('.category__buttons'),
    prevArrow: '<button class="category__button category__button--previous"><img class="category__arrow-left" src="img/category-arrow.svg" alt="Предыдущая категория"></button>',
    nextArrow: '<button class="category__button category__button--next"><img class="category__arrow-right" src="img/category-arrow.svg" alt="Следующая категория"></button>',
    responsive: [{
      breakpoint: 1960, // максимальная ширина экрана
      settings: {
          slidesToShow: 4, // показывать по 4 слайда
          slidesToScroll: 4, // скроллить по 4 слайда
          rows: 1,
      }
    }, {
      breakpoint: 860,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
      }
    }, {
      breakpoint: 640,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
      }
}]
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
      // when window width is >= 550px
      550: {
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