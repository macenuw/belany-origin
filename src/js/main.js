import jQuery from 'jquery';
import sliderOneForShow from './plugins/slider'
import searchActivate from './plugins/searchActivate'
import activateMobMenu from './plugins/mobMenu'
import sliderInit from './plugins/sliderInit';

window.addEventListener("DOMContentLoaded", () => {
  activateMobMenu();
  searchActivate();
  sliderOneForShow('.top-section__slider', '.slider__btn--prev', '.slider__btn--next', '.slider__item', '.slider__dots', 'slider__dot', '.slider__current-slide', '.slider__amount-slide');
  sliderOneForShow('.new__slider', '.slider__btn--prev', '.slider__btn--next', '.slider__item', '.slider__dots', 'slider__dot', '.slider__current-slide', '.slider__amount-slide');
  sliderInit('.popular__slider', '.slider__btn--prev', '.slider__btn--next', '.popular__slider-inner', '.show-card', '.slider__amount-slide', '.slider__current-slide', '.slider__dots', 'slider__dot')
  sliderInit('.special__slider', '.slider__btn--prev', '.slider__btn--next', '.special__slider-inner', '.product-card', '.slider__amount-slide', '.slider__current-slide', '.slider__dots', 'slider__dot')
})