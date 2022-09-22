function activateMobMenu() {
  try {
    const menuBtn = document.querySelector('.header__btn');
    const mobMenu = document.querySelector('.header__mob');
    const body = document.querySelector('body');
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobMenu.classList.toggle('active')
      body.classList.toggle('hidden')
    })
  } catch (e) {}
}
export default activateMobMenu;