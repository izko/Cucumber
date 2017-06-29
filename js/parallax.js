$(function()	{
  $(window).scroll(function(){

    //h1 main scroll
    const wScroll = $(this).scrollTop();
    $('#scrollH1').css({
      'transform' : 'translate(0px, '+ wScroll / 3.5 + '%)'
    });

    //adventures text scroll
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
