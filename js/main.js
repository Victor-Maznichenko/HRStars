const slider = document.querySelector('.partners__slider');

let mySwiper = new Swiper(slider, {
  loop: true,
  slideClass: 'partners__slider-item',
  wrapperClass: 'partners__slider-wrapper',
  containerModifierClass: 'partners__slider-container',
  slidePrevClass: '.partners__slider-button-next',
  slideNextClass: '.partners__slider-button-prev',
  speed: 1500,
  slidesPerView: 5,
  navigation: {
    nextEl: '.partners__slider-button-next',
    prevEl: '.partners__slider-button-prev',
  },
  pagination: {
    el: '.partners__slider-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  }
})

const slider1 = document.querySelector('.recomendation__slider');

let mySwiper1 = new Swiper(slider1, {
  loop: true,
  slideClass: 'recomendation__slider-item',
  wrapperClass: 'recomendation__slider-wrapper',
  containerModifierClass: 'recomendation__slider-container',
  slidePrevClass: '.recomendation__slider-button-next',
  slideNextClass: '.recomendation__slider-button-prev',
  effect: 'coverflow',
  speed: 1500,
  navigation: {
    nextEl: '.recomendation__slider-button-next',
    prevEl: '.recomendation__slider-button-prev',
  },
  pagination: {
    el: '.recomendation__slider-pagination',
    type: 'bullets',
    clickable: true,

  },
  autoplay: {
    delay: 3000,
  },
})

$(function(){

  $('.header__nav-burger').on('click', function(){
    $('.header__nav-wrapper').toggleClass('header__nav-wrapper--active');
  });

  $('.header__nav-closeburger').on('click', function(){
    $('.header__nav-wrapper').toggleClass('header__nav-wrapper--active');
  });

  $('.recomendation__item-btn').on('click', function(event){
    event.preventDefault();
    $('.recomendation__item-textspan').toggleClass('recomendation__item-textspan--active');
  });
});