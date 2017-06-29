$(function()	{
  //adventures text scroll
  $(window).scroll(function(){
    const wScroll = $(this).scrollTop();

    $('#scroll').css({
      'transform' : 'translate(0px, '+ wScroll / 20 +'%)'
    });

    //menu scroll
    if (wScroll > $('#secAdventures').offset().top - ($(window).height() / 100) ) {
      $('#homeHeader').addClass('is-showing')
      $('header a').addClass('color-change')
      $('div.logo img').attr('src',	'images/black_logo1.png');
      } else {
      $('#homeHeader').removeClass('is-showing')
      $('header a').removeClass('color-change')
      $('div.logo img').attr('src',	'images/wh_logo1.png');
    }
  });
});
