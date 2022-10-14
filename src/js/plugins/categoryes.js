const Categoryes = () => {
  try {
    const mainCategoryItem = document.querySelectorAll('.categoryes__main-item');
    mainCategoryItem.forEach(item => {
      item.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.classList.contains('categoryes__btn--main')) {
          document.querySelectorAll('.categoryes__btn--main').forEach(btn => {
            btn.classList.remove('active')
          })
          document.querySelectorAll('.categoryes__category').forEach(category => {
            category.classList.remove('active')
          })
          document.querySelectorAll('.categoryes__subcategory').forEach(sub => {
            sub.classList.remove('active');
          })
          item.querySelector('.categoryes__btn--main').classList.toggle('active');
          item.querySelector('.categoryes__category').classList.toggle('active');
        }
        if (e.target.classList.contains('categoryes__catalog-close')) {
          e.target.closest('.categoryes__category').classList.remove('active');
        }
        if (e.target.classList.contains('categoryes__btn--sub')) {
          document.querySelectorAll('.categoryes__subcategory').forEach(sub => {
            sub.classList.remove('active');
          })
          e.target.nextElementSibling.classList.add('active');
        }
        if(e.target.classList.contains('categoryes__subcategory-close')){
          e.target.closest('.categoryes__subcategory').classList.remove('active');
        }
      })
    })
  } catch (e) {}
};
export default Categoryes;