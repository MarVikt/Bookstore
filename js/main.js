$(document).ready(function() {

  var menuButton = document.querySelector(".menu-mobile-button");
    menuButton.addEventListener('click', function() {
    // console.log("клик по кнопке мобильного меню");
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



});  