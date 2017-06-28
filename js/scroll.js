$(function()	{

  const links = $('ul a');
  links.on('click', function(event) {
      event.preventDefault();
      const hrefValue = $(this).attr('href'),
            positionHref = $(hrefValue).offset();
      $('html, body').animate({
          scrollTop: positionHref.top
      }, 1000);
  })

});
