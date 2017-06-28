document.addEventListener("DOMContentLoaded", function(event) {
const responsiveSlider = function() {

  const slider = document.getElementById("slider");
  let sliderWidth = slider.offsetWidth;
  let count = 1;
  const slideList = document.getElementById("slideWrap");
  const items = slideList.querySelectorAll("li").length;
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  const prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  const nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  // setInterval(function() {
  //   nextSlide()
  // }, 8000);

};

window.onload = function() {
  responsiveSlider();
}

});
