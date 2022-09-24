import sliderOneForShow from './plugins/slider'
import searchActivate from './plugins/searchActivate'
import activateMobMenu from './plugins/mobMenu'
import sliderInit from './plugins/sliderInit';

window.addEventListener("DOMContentLoaded", () => {
  activateMobMenu();
  searchActivate();
  sliderOneForShow('.top-section__slider', '.slider__btn--prev', '.slider__btn--next', '.slider__item', '.slider__dots', 'slider__dot', '.slider__current-slide', '.slider__amount-slide');
  sliderOneForShow('.new__slider', '.slider__btn--prev', '.slider__btn--next', '.slider__item', '.slider__dots', 'slider__dot', '.slider__current-slide', '.slider__amount-slide');
  // sliderInit('.popular__slider', '.slider__btn--prev', '.slider__btn--next', '.popular__slider-inner', '.show-card', '.slider__amount-slide', '.slider__current-slide', '.slider__dots', 'slider__dot')
  // sliderInit('.special__slider', '.slider__btn--prev', '.slider__btn--next', '.special__slider-inner', '.product-card', '.slider__amount-slide', '.slider__current-slide', '.slider__dots', 'slider__dot')
})
try {
  $('.popular__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 1765,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  const popularSliderInner = document.querySelector('.popular__slider-inner');
  const popularPrevBtn = popularSliderInner.querySelector('.slick-prev');
  const popularNextBtn = popularSliderInner.querySelector('.slick-next');
  const popularSlideNow = popularSliderInner.querySelector('.slider__current-slide');
  popularPrevBtn.addEventListener('click', () => {
    let currentSlide = $('.popular__slider').slick('slickCurrentSlide');
    popularSlideNow.textContent = currentSlide < 10 ? `0${currentSlide}` : currentSlide
  })
  popularNextBtn.addEventListener('click', () => {
    let currentSlide = $('.popular__slider').slick('slickCurrentSlide');
    popularSlideNow.textContent = currentSlide < 10 ? `0${currentSlide+1}` : currentSlide + 1
  })

} catch (error) {}

try {
  $('.special__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 1765,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  const popularSliderInner = document.querySelector('.special__slider-inner');
  const popularPrevBtn = popularSliderInner.querySelector('.slick-prev');
  const popularNextBtn = popularSliderInner.querySelector('.slick-next');
  const popularSlideNow = popularSliderInner.querySelector('.slider__current-slide');
  popularPrevBtn.addEventListener('click', () => {
    let currentSlide = $('.special__slider').slick('slickCurrentSlide');
    popularSlideNow.textContent = currentSlide < 10 ? `0${currentSlide}` : currentSlide
  })
  popularNextBtn.addEventListener('click', () => {
    let currentSlide = $('.special__slider').slick('slickCurrentSlide');
    popularSlideNow.textContent = currentSlide < 10 ? `0${currentSlide+1}` : currentSlide + 1
  })
} catch (error) {}
try {
  $('.top-sale__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 1765,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  const topSaleSliderInner = document.querySelector('.top-sale__inner');
  const topSalePrevBtn = topSaleSliderInner.querySelector('.slick-prev');
  const topSaleNextBtn = topSaleSliderInner.querySelector('.slick-next');
  const topSaleSlideNow = topSaleSliderInner.querySelector('.slider__current-slide');
  topSalePrevBtn.addEventListener('click', () => {
    let currentSlide = $('.top-sale__slider').slick('slickCurrentSlide');
    topSaleSlideNow.textContent = currentSlide < 10 ? `0${currentSlide}` : currentSlide
  })
  topSaleNextBtn.addEventListener('click', () => {
    let currentSlide = $('.top-sale__slider').slick('slickCurrentSlide');
    topSaleSlideNow.textContent = currentSlide < 10 ? `0${currentSlide+1}` : currentSlide + 1
  })
} catch (error) {}