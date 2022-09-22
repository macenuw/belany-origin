function sliderOneForShow(sliderSelector, prev, next, item, dots, dotClass, currentSlide, amountSlides) {

  try {
    const slider = document.querySelector(sliderSelector),
      prevBtn = slider.querySelector(prev),
      nextBtn = slider.querySelector(next),
      sliderItems = slider.querySelectorAll(item),
      sliderDots = slider.querySelector(dots),
      slideNow = slider.querySelector(currentSlide),
      slideAmount = slider.querySelector(amountSlides)
    slideAmount.textContent = `/ ${sliderItems.length<10? `0${sliderItems.length}`:sliderItems.length}`;
    let slideForShow = 1;
    ganerateDots(sliderItems.length)
    showSlide(slideForShow)
    const timerChangeSlide = setInterval(() => {
      showSlide(slideForShow + 1)
    }, 3000)

    function ganerateDots(n) {
      for (let i = 0; i < n; i++) {
        const dot = document.createElement('li')
        dot.classList.add(dotClass)
        sliderDots.append(dot);
      }
    }

    function disableSlides() {
      sliderItems.forEach(slide => {
        slide.style.display = 'none'
      });
      sliderDots.querySelectorAll(`.${dotClass}`).forEach(dot => dot.classList.remove('active'))
    }

    function showSlide(n) {
      if (n < 1) {
        n = sliderItems.length
      } else if (n > sliderItems.length) {
        n = 1
      }
      slideForShow = n
      disableSlides();
      sliderItems[n - 1].style.display = 'block';
      sliderItems[n - 1].classList.add('active', 'activeAnim')
      sliderDots.querySelectorAll(`.${dotClass}`)[n - 1].classList.add('active')
      slideNow.textContent = `${slideForShow < 10 ? `0${slideForShow}`: slideForShow}`
    }
    prevBtn.addEventListener('click', () => {
      showSlide(slideForShow - 1);
      clearInterval(timerChangeSlide)
    })
    nextBtn.addEventListener('click', () => {
      showSlide(slideForShow + 1)
      clearInterval(timerChangeSlide)
    })
  } catch (e) {}
}
export default sliderOneForShow;