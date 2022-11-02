const header = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 116 && window.innerWidth >= 1100) {
      header.classList.add('sticky');
      document.body.style.paddingTop = '116px'
    } else {
      header.classList.remove('sticky');
      document.body.style.paddingTop = '0'
    }
    if (window.pageYOffset > 168 && window.innerWidth < 1100) {
      document.body.style.paddingTop = '167'
      header.classList.add('sticky-mob');
    } else if(window.pageYOffset <= 168 && window.innerWidth < 1100){
      header.classList.remove('sticky-mob');
      document.body.style.paddingTop = '0'
    }
  })
};
export default header;