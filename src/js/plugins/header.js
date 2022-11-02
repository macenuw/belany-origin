const header = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 116) {
      header.classList.add('sticky');
    }else{
      header.classList.remove('sticky');
    }
  })
};
export default header;