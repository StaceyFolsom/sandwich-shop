const menuItems = [
    { name: "BLT", group: "sandwich", description: "Bacon, consttucs, & tomato", price: 5.00},
    { name: "Caprese", group: "sandwich", description: "Mozzarella, tomato, & basil", price: 7.50},
    { name: "PBJ", group: "sandwich", description: "Peanut butter & jelly time!", price: 3.50},
    { name: "Turkey Club", group: "sandwich", description: "Turkey, swiss, lettuce, & tomato", price: 8.50},
    { name: "Chips", group: "sides", description: "Homemade kettle baked cajun seasoned chips - best in town!", price: 2.50},
    { name: "Chocolate Chip Cookie", group: "sides", description: "Fresh chocolate chip cookies, as good as your mom makes", price: 2.50},
    { name: "Cola", group: "drinks", description: "You know the deal", price: 2.50},
    { name: "Diet Cola", group: "drinks", description: "You on a diet?", price: 2.50},
    { name: "Sprite", group: "drinks", description: "Lemon-Lime greatness!", price: 2.50},
    { name: "Lemonade", group: "drinks", description: "Fresh squeezed lemonade", price: 3.25},
]

// Displays number of items in cart
let totalQty = 0;
const itemCount = document.querySelector("#itm-count");
itemCount.innerText = totalQty;

// function to loop through and provide menu selections
function getSelectedItems () {
    let orderMenuItems = menuItems;
    let orderItems = [];
    let itemQty = document.getElementsByClassName("dropdown");
    for (let i = 0; i < itemQty.length; i++) {
        let itemQtyNumber = itemQty[i].options[itemQty[i].selectedIndex].text;
        if (itemQtyNumber > 0) {
            orderItems += [orderMenuItems[i].name, orderMenuItems[i].description, orderMenuItems[i].price, itemQtyNumber];
            totalQty += parseInt(itemQtyNumber); // Stacey
        }
        itemCount.innerText = totalQty;
        
    }
    // window.location.href="ordersummary.html"; // Playing with navigating to a new page with JS
    return (orderItems);
}


// const orderForm = document.getElementByClass('.order-form'); {//change 'order-form' to '.order-form'
// orderForm.addEventListener('click', function(event){ //submit might change to a different button

// const orderForm = document.getElementById('.order-form'); //change 'order-form' to '.order-form'
// orderForm.addEventListener('add', function(event) //submit might change to a different button

// const addButton = document.querySelector(".add");
// addButton.addEventListener("click", function (event) {
//   console.log(event);
// });

// const submitButton = document.querySelector(".checkout");
// submitButton.addEventListener("click", function (event) {
//   console.log(event);
// });
// {
//   const data = new FormData(orderForm);

//   const blt = data.get("blt-qty");
//   const caprese = data.get("cap-qty");
//   const pbj = data.get("pbj-qty");
//   const tc = data.get("tc-qty");
//   const chips = data.get("chips-qty");
//   const cookies = data.get("cookie-qty");
//   const cola = data.get("cola-qty");
//   const diet = data.get("diet-qty");
//   const sprite = data.get("sprite-qty");
//   const lemonade = data.get("lemonade-qty");
// }
// console.log(FormData);

// const subtotal = (blt*5)+(caprese*7.5)+(pbj*3.5)+(tc*8.5)+(chips*2.5)+(cookies*2.5)+(cola*2.5)+(diet*2.5)+(sprite*2.5)+(lemondae*3.25);
// const tax= subtotal*0.06;
// const total= subtotal+tax;

// //looping and adding items
// for(const i=0; i < numberOfItems; i++){
// const newOrder=document.createElement('div');
// newName.classList.add(name); //changed item to name
// newPrice.classList.add(price);
// }
// calculating subtotal
// function getSubtotal(quantity){
//     const cookiePrice = 2.50;

// const quantity = document.querySelectorAll('.sandwich-qty'); not sure if this needs to be declared
//     menuArray.forEach(function(menu) {

//         const subtotal= (price * quantity);

//     });
//     return subtotal;
// }
// const elements = document.querySelectorAll('.sandwich-qty');