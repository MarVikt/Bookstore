$(document).ready(function() {

  var menuButton = document.querySelector(".menu-mobile-button");
    menuButton.addEventListener('click', function() {
    // console.log("клик по кнопке мобильного меню");
    document.querySelector(".menu-mobile").classList.toggle('menu-mobile_visible');
  
  });




});  