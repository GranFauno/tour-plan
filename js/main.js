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

    $(".form").each(function()
    {
      $(this).validate({
        errorClass:"invalid",
      rules:{
        name:{
          required: true,
          minlength: 2
        },
        phone:{
          required: true
        },
        email:{
          required: true 
        } 
      },
      messages: {
        name: {
          required:"Enter your name",
          minleanght: jQuery.validator.format("At least {2} characters required!")          
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
          minlenght:  jQuery.validator.format("At least {2} characters required!")
        },
        phone:{
        required: "Enter your phone",
        minlenght: jQuery.validator.format("At least {2} characters required!")
       }
  }
    });
    }
    )
    AOS.init();
    $('.phone').mask('+7 (000) 000-00-00');
  });
  
  
  

