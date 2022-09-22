function searchActivate() {
  try {
    const searchBtn = document.querySelector('#searchBtn');
    const searchClose = document.querySelector('#searchClose');
    const search = document.querySelector('.search')

    searchBtn.addEventListener('click', () => {
      searchBtn.classList.toggle('active');
      search.classList.toggle('active');
    })
    searchClose.addEventListener('click', () => {
      searchBtn.classList.toggle('active');
      search.classList.toggle('active');
    })
  } catch (e) {}
}
export default searchActivate;