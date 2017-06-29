$(function()	{
  //adventures text scroll
  $(window).scroll(function(){
    const wScroll = $(this).scrollTop();

    $('#scroll').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });

  //menu scroll
  if (wScroll > $('#secAdventures').offset().top) {
    $('#homeHeader').addClass('is-showing');
  } else {
    $('#homeHeader').removeClass('is-showing');
  }

  });


 //  if(wScroll > $('#secAdventures').offset().top - ($(window).height() / 1.2)) {
 //
 //   $('.clothes-pics figure').each(function(i){
 //
 //     setTimeout(function(){
 //       $('.clothes-pics figure').eq(i).addClass('is-showing');
 //     }, 150 * (i+1));
 //   });
 //
 // }


});
