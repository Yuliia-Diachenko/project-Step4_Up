import Swiper from 'swiper/bundle';

import 'swiper/css';

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
    reachEnd: function () {
        document.querySelector('.projects-button-slider-next.swiper-button-next svg use')
        .setAttribute('href', '/img/symbol-defs.svg#icon-arrow-narrow-right');

        var nextButton = document.querySelector('.projects-button-slider-next');
        nextButton.style.borderColor = 'grey';
    },
    reachBeginning: function () {
        document.querySelector('.projects-button-slider-prev.swiper-button-prev svg use')
        .setAttribute('href', '/img/symbol-defs.svg#icon-arrow-narrow-right');

        var prevButton = document.querySelector('.projects-button-slider-prev');
        prevButton.style.borderColor = 'grey';
    },
    slideChange: function(){
    if (!swiper.isBeginning && !swiper.isEnd) {

        document.querySelector('.projects-button-slider-next.swiper-button-next svg use')
        .setAttribute('href', '/img/symbol-defs.svg#icon-arrow-right-white');
        document.querySelector('.projects-button-slider-prev.swiper-button-prev svg use')
        .setAttribute('href', '/img/symbol-defs.svg#icon-arrow-right-white');

        var prevButton = document.querySelector('.projects-button-slider-prev');
        var nextButton = document.querySelector('.projects-button-slider-next');
        prevButton.style.borderColor = 'white';
        nextButton.style.borderColor = 'white';
    }
    }
},
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