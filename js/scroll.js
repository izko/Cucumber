$(function()	{

  const links = $('ul a');
  links.on('click', function(event) {
      event.preventDefault();
      const hrefValue = $(this).attr('href'),
            positionHref = $(hrefValue).offset();
            // console.log(positionHref, $(hrefValue));
            // console.log(hrefValue);

      if (hrefValue== '#homeHeader') {
          positionHref.top = 0;
      }

      $('html, body').animate({
          scrollTop: positionHref.top
      }, 1000);
  })
});
//scroll menu - odnośniki
