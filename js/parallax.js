$(function()	{
  //adventures text scroll
  $(window).scroll(function(){
    const wScroll = $(this).scrollTop();

    $('#scroll').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });

  //menu scroll
  const menu = $('header a');

  if (wScroll > $('#secAdventures').offset().top - ($(window).height() / 100) ) {

    $('#homeHeader').addClass('is-showing')
    $('header a').addClass('color-change');
  } else {
    $('#homeHeader').removeClass('is-showing')
    $('header a').removeClass('color-change');
  }

  });
});
