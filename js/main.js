$(document).ready(function() {

  var menuButton = document.querySelector(".menu-mobile-button");
    menuButton.addEventListener('click', function() {
    document.querySelector(".menu-mobile").classList.toggle('menu-mobile_visible');
  
  });

  var choice01 = $('[data-toggle=f01]');
  var choice02 = $('[data-toggle=f02]');
  var choice03 = $('[data-toggle=f03]');
  var choice04 = $('[data-toggle=f04]');
  var choice05 = $('[data-toggle=f05]');
  var choice06 = $('[data-toggle=f06]');
  choice01.on('click', choiceFavourite01);
  choice02.on('click', choiceFavourite02);
  choice03.on('click', choiceFavourite03);
  choice04.on('click', choiceFavourite04);
  choice05.on('click', choiceFavourite05);
  choice06.on('click', choiceFavourite06);
  
  function choiceFavourite01() {
    document.querySelector('[data-toggle=f01]').classList.toggle('recommended__heart-favourite');
  };
  function choiceFavourite02() {
    document.querySelector('[data-toggle=f02]').classList.toggle('recommended__heart-favourite');
  };
  function choiceFavourite03() {
    document.querySelector('[data-toggle=f03]').classList.toggle('recommended__heart-favourite');
  };
  function choiceFavourite04() {
    document.querySelector('[data-toggle=f04]').classList.toggle('recommended__heart-favourite');
  };
  function choiceFavourite05() {
    document.querySelector('[data-toggle=f05]').classList.toggle('recommended__heart-favourite');
  };
  function choiceFavourite06() {
    document.querySelector('[data-toggle=f06]').classList.toggle('recommended__heart-favourite');
  };

  var closeModalButton = $(".modal__close");
  var openModalButton = $('[data-toggle=modal-booking]');
  openModalButton.on('click', openModal);
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
    document.body.style.overflow = "hidden";
  };

  closeModalButton.on('click', closeModal);
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
    document.body.style.overflow = "auto";
  };

  $(document).on('keydown',function(event) {
    if (event.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
      document.body.style.overflow = "auto";
    }
  });

// валидация форм
$(".registration__bar").validate({
  errorClass: "invalid",
  messages: {
    newsletterMail: {
      required: "Введите адрес электронной почты",
      email: "Адрес электронной почты должен быть в формате name@domain.com"
    }
  }
});

$(".modal__send-form").validate({
  errorClass: "invalid",
  messages: {
    modal_send_name: {
      required: "Введите Ваше имя",
      minlength: "Имя должно содержать хотя бы 2 буквы"
    },
    modal_send_phone: "Введите номер телефона +_(___)___-__-__",
    modal_send_mail: {
      required: "Введите адрес электронной почты",
      email: "Адрес электронной почты должен быть в формате name@domain.com"
    }
  }
});

// номер телефона по маске
$('.modal__send-phone').mask('+0(000)000-00-00', {
  'translation': {0: {pattern: /[0-9]/}}
});

// кнопка наверх
$(function() {
  $(window).scroll(function() {
    
  if($(window).width() > 992) {
    if($(this).scrollTop() != 0) {
      $('#topButton').fadeIn();
      } else {
      $('#topButton').fadeOut();
      }
  }
    
  });

  $('#topButton').click(function() {
  $('body,html').animate({scrollTop:0},1000);
  });
  
});


  // if($(window).width() > 992) {}

  


});  