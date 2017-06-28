import { responsiveSlider } from "./slider";
import "./scroll"

document.addEventListener("DOMContentLoaded", function(event) {

  $(window).scroll(function()	{
    const wScroll = $(this).scrollTop();

    $('#scroll').css({
      // 'transform' : 'translate (0px, 200px)'
      // 'border' : '1px solid red'
    });
    // console.log($('#scroll'));

  });
// 'transform' : 'translate (0px, '+ wScroll/2 +'%)'
});
