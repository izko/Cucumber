$(function()	{
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('slide-down');
  });

  $('.hamburger').on('mouseenter', function(e) {
    e.preventDefault();
    $('.menu').addClass('slide-down');
  });

  $('ul a').on('click', function(e) {
    e.preventDefault();
    $('.menu').removeClass('slide-down');
  });
});
