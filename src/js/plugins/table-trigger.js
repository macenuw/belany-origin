function onTableTrigger() {
  const tableTrigger = document.querySelectorAll('[data-trigger="table-trigger"]');
  tableTrigger.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      const parent = item.closest('.table')
      const tableForShow = parent.querySelector('.table__forShow');
      tableForShow.classList.toggle('active')
    })
  })
}
export default onTableTrigger;