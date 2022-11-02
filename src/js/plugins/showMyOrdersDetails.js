function showMyOrdersDetails() {
  const myOrders = document.querySelectorAll('.my-orders__item');
  myOrders.forEach(order => {
    order.addEventListener('click', (e) => {
      const orderDetails = order.querySelector('.my-orders__content');
      if (orderDetails && e.target == order.querySelector('.my-orders__list-item--show-info')) {
        orderDetails.classList.toggle('show')
      }
    })
  })
}
export default showMyOrdersDetails;