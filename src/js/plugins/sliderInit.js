function sliderInit(sliderSelector, prevSelector, nextSelector, innerSelector, itemSelector, totalSlides, slideNowSelector, dotsSelector, dotClass) {
  const slider = document.querySelector(sliderSelector),
    prev = slider.querySelector(prevSelector),
    next = slider.querySelector(nextSelector),
    inner = slider.querySelector(innerSelector),
    items = [...slider.querySelectorAll(itemSelector)],
    totalItems = slider.querySelector(totalSlides),
    slideNowShow = slider.querySelector(slideNowSelector),
    dots = slider.querySelector(dotsSelector);

  function initDots(n) {
    for (let i = 0; i < n; i++) {
      const li = document.createElement('li');
      li.classList.add(dotClass);
      dots.append(li);
    }
  }
  initDots(items.length)
  let slideNow = 1;
  const dotsNow = slider.querySelectorAll(`.${dotClass}`);
  dotsNow[slideNow - 1].classList.add('active');
  totalItems.textContent = `/${items.length < 10 ? `0${items.length}`: items.length}`;
  prev.addEventListener('click', () => {
    items.unshift(items[items.length - 1]);
    items.pop(items[items.length - 1]);
    inner.textContent = ''
    items.forEach(item => {
      inner.append(item);
    })
    slideNow--
    if (slideNow < 1) {
      slideNow = items.length
    } else if (slideNow > items.length) {
      slideNow = 1;
    }
    dotsNow.forEach(dot => {
      dot.classList.remove('active');
    })
    dotsNow[slideNow - 1].classList.add('active')
    slideNowShow.textContent = `${slideNow < 10 ? `0${slideNow}`: slideNow}`;
  })
  next.addEventListener('click', () => {
    let timingItem = items[0]
    items.shift();
    items.push(timingItem);
    inner.textContent = ''
    items.forEach(item => {
      inner.append(item);
    })
    slideNow++
    if (slideNow < 1) {
      slideNow = items.length
    } else if (slideNow > items.length) {
      slideNow = 1;
    }

    console.log(dotsNow)
    dotsNow.forEach(dot => {
      dot.classList.remove('active');
    })
    console.log(slideNow)
    dotsNow[slideNow - 1].classList.add('active')
    slideNowShow.textContent = `${slideNow < 10 ? `0${slideNow}`: slideNow}`;
  })
}
export default sliderInit;