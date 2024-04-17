import { getReviews } from './api';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import 'swiper/css';



function renderReviews(reviews) {
  const reviewsGallery = document.querySelector('.reviews-gallery');
  reviewsGallery.innerHTML = '';
  if (!reviews || reviews.length === 0) {
    reviewsGallery.textContent = 'Not found';
    return;
  }
  const markup = reviews.map(review => {
    return `<div class="swiper-slide reviews-list"><img class="reviews-image" src="${review.avatar_url}" alt="user photo" width=48px
  height=48px border-radius=10px/>
  <h3 class="reviews-author">${review.author}</h3>
  <p class="reviews-text">${review.review}</p></div>`;
  })
    .join('');
  reviewsGallery.insertAdjacentHTML('beforeend', markup);
}


document.addEventListener('DOMContentLoaded', async () => {
  try {
    const reviews = await getReviews();
    renderReviews(reviews);
      
    const swiper = new Swiper('.swiper-reviews', {
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".section-reviews .swiper-button-next",
    prevEl: ".section-reviews .swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true, 
  touchRatio: 1,
  keyboard: { enabled: true },
  loop: false,
  on: {
    init: function () {
      updateButtonState(this);
    },
    slideChange: function () {
      updateButtonState(this);
    },
  },
});
    } catch (error) {
    console.error(error);
  }
});



function updateButtonState(swiper) {
  const prevBtn = document.querySelector('.section-reviews .swiper-button-prev');
  const nextBtn = document.querySelector('.section-reviews .swiper-button-next');

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




















