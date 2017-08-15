$(function()	{
  $(window).scroll(function(){

    const wScroll = $(this).scrollTop();

    if (wScroll > $('#secAdventures').offset().top- ($(window).height() / 1.5 )) {
        $('#secAdventures h3').addClass('text-parallax-1')
        $('#secAdventures h1').addClass('text-parallax-2')
        $('#secAdventures p').addClass('text-parallax-3');
    }

    if (wScroll > $('#secGallery').offset().top- ($(window).height() / 1.5 )) {
        $('#secGallery').addClass('gallery-parallax');
    }

    if (wScroll > $('#secMap').offset().top- ($(window).height() / 1.5 )) {
        $('#secMap h1').addClass('text-parallax-1')
        $('#secMap p').addClass('text-parallax-2')
        ;
    }

    if (wScroll > $('#secMap').offset().top- ($(window).height() / 5 )) {
        $('#contact').addClass('text-parallax');
    }
  });
});
