let orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', function(event)
{
const data = new FormData(orderForm);
let numberOfItems = data.get('numberOfItems');
let price= data.get('price');

})


//looping and adding items
for(let i=0; i < numberOfItems; i++){
let newOrder=document.createElement('div');
newItem.classList.add(item);
newPrice.classList.add(price);
}
// calculating subtotal
function getSubtotal(quantity, price){
    let quantity = document.querySelectorAll('.sandwich-qty');
    menuArray.forEach(function(menu) {

        let subtotal= (price * quantity);
        
    });
    return subtotal;
}
// let elements = document.querySelectorAll('.sandwich-qty');