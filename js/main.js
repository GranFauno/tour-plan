$(document).ready(function()
{
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
});

  var modalButton=$('[data-toggle="modal"]');
  var closeModalButton=$('.modal__close');
  closeModalButton.on('click', closeModal);
  
  
  function closeModal(event){
    event.preventDefault();    
    var modalOverlay=$(".modal__overlay");
    var modalDialog=$(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };  
  modalButton.on('click', openModal);
  function openModal(){
    var targetModal=$(this).attr("data-href");
      $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
      $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    }
});