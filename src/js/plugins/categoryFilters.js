function categoryFiltersAction() {
  try {
    const category = document.querySelectorAll('.category-filters__category-item');
    category.forEach(item => {
      item.addEventListener('click', (e) => {
        console.log(e.target)
        if (item === e.target && !e.target.classList.contains('category-filters__subcategory-btn')) {
          item.classList.toggle('active');
        }
      })
    })
  } catch (error) {}
}
export default categoryFiltersAction;