const header = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 116 && window.innerWidth >= 1100) {
      document.body.style.paddingTop = '116px'
      header.classList.add('sticky');
    } else if (window.pageYOffset < 116 && window.innerWidth >= 1100) {
      header.classList.remove('sticky');
      document.body.style.paddingTop = '0'
    }
    if (window.pageYOffset >= 168 && window.innerWidth < 1100) {
      document.body.style.paddingTop = '167px'
      header.classList.add('sticky-mob');
    } else if (window.pageYOffset < 167 && window.innerWidth < 1100) {
      document.body.style.paddingTop = '0px'
      header.classList.remove('sticky-mob');
    }
  })
};
export default header;