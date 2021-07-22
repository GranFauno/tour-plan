const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

 

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  // Keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

});

const reviewSlider = new Swiper('.review-slider', {
  // Optional parameters
  loop: true,

 

  // Navigation arrows
  navigation: {
    nextEl: '.review-slider__button--next',
    prevEl: '.review-slider__button--prev',
  },
  // Keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

});

var menuButton=document.querySelector(".menu-button")
menuButton.addEventListener("click", function(){
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom_visible");
})