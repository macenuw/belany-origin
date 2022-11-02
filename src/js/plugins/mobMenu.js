function activateMobMenu() {
  try {
    const mobileTrigger = document.querySelector('[data-mobile-trigger]');
    const mobileMenu = document.querySelector('[data-mobile]');
    const body = document.querySelector('body');
    mobileTrigger.addEventListener('click', () => {
      mobileTrigger.classList.toggle('active');
      mobileMenu.classList.toggle('active')
    })


    const desktopTrigger = document.querySelector('[data-desktop-trigger]');
    const desktopMenu = document.querySelector('[data-desktop-menu]')

    desktopTrigger.addEventListener('click', () => {
      desktopTrigger.classList.toggle('active');
      desktopMenu.classList.toggle('active');
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
    window.addEventListener('click', (e) => {
      if (desktopMenu.classList.contains('active') && !e.target.closest('.categoryes__inner') && e.target != desktopTrigger) {
        desktopTrigger.classList.remove('active');
        desktopMenu.classList.remove('active');
        document.querySelectorAll('.categoryes__category').forEach(item=> item.classList.remove('active'))
        document.querySelectorAll('.categoryes__subcategory').forEach(item=> item.classList.remove('active'))
      }
    })
    window.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') && !e.target.closest('.categoryes__inner') && e.target != mobileTrigger) {
        mobileTrigger.classList.toggle('active');
        mobileMenu.classList.toggle('active')
        document.querySelectorAll('.categoryes__category').forEach(item=> item.classList.remove('active'))
        document.querySelectorAll('.categoryes__subcategory').forEach(item=> item.classList.remove('active'))
      }
    })
  } catch (e) {
    console.log(e)
  }
}
export default activateMobMenu;