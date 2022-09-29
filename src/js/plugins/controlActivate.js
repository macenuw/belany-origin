function controlActivate() {
  try {
    const controlBtns = document.querySelectorAll('.control__btn');
    controlBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn === e.target) {
          controlBtns.forEach(item => {
            item.classList.remove('active')
          })
          btn.classList.add('active')
        }
      })
    })
  } catch (error) {}
}
export default controlActivate;