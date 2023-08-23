$(document).ready(function() {
  $('.navigation__burger-menu').click(function(){
      $('.navigation__burger-menu').toggleClass('open-menu');
      $('.navigation').toggleClass('open-menu');
  });
});