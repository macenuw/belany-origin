function activateMobMenu() {
  try {
    const menuBtn = document.querySelector('.header__btn');
    const mobMenu = document.querySelector('.header__mob');
    const body = document.querySelector('body');
    const mobLink = mobMenu.querySelectorAll('.header__mob-link');
    mobLink.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobMenu.classList.toggle('active')
        body.classList.toggle('hidden')
      })
    })
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobMenu.classList.toggle('active')
      body.classList.toggle('hidden')
    })
  } catch (e) {}
}
export default activateMobMenu;