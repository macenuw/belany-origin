function activateMobMenu() {
  try {
    const mobileTrigger = document.querySelector('[data-mobile-trigger]');
    const mobileMenu = document.querySelector('[data-mobile]');
    const body = document.querySelector('body');
    mobileTrigger.addEventListener('click', () => {
      mobileTrigger.classList.toggle('active');
      mobileMenu.classList.toggle('active')
      body.classList.toggle('hidden')
    })


    const desktopTrigger = document.querySelector('[data-desktop-trigger]');
    const desktopMenu = document.querySelector('[data-desktop-menu]')

    desktopTrigger.addEventListener('click', () => {
      desktopTrigger.classList.toggle('active');
      desktopMenu.classList.toggle('active');
      body.classList.toggle('hidden')
    })

    window.addEventListener(`resize`, event => {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth <= 1100) {
        desktopMenu.classList.remove('active');
        mobileTrigger.classList.remove('active');
      } else {
        mobileMenu.classList.remove('active')
        desktopTrigger.classList.remove('active')
      }
    }, false);
  } catch (e) {
    console.log(e)
  }
}
export default activateMobMenu;