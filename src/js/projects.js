import Swiper from 'swiper/bundle';
import 'swiper/css';
import sprite from '../img/symbol-defs.svg';

const swiper = new Swiper('.projects-block-slider.swiper-container', {      
    slidesPerView: 1,
    navigation: {
        nextEl: '.projects-button-slider-next.swiper-button-next',
        prevEl: '.projects-button-slider-prev.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on: {
        init: function () {
            updateButtonState(this);
        }
        }
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
        event.preventDefault();
        if (event.shiftKey) {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    }
});

function updateButtonState(swiper) {
    const prevBtn = document.querySelector('.projects-btn-slider .swiper-button-prev');
    const nextBtn = document.querySelector('.projects-btn-slider .swiper-button-next');
  
    if (swiper.isBeginning) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }
  
    if (swiper.isEnd) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }
