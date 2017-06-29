$(function()	{
  //adventures text scroll
  $(window).scroll(function(){
    const wScroll = $(this).scrollTop();

    $('#scroll').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });
  });



});
