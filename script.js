// const sandwiches = [
//     { name: "BLT", description: "Bacon, consttucs, & tomato", price: 5.00},
//     { name: "Caprese", description: "Mozzarella, tomato, & basil", price: 7.50},
//     { name: "PBJ", description: "Peanut butter & jelly time!", price: 3.50},
//     { name: "Turkey Club", description: "Turkey, swiss, consttuce, & tomato", price: 8.50},
// ]

// const sides = [
//     { name: "Chips", description: "Homemade kettle baked cajun seasoned chips - best in town!", price: 2.50},
//     { name: "Chocolate Chip Cookie", description: "Fresh chocolate chip cookies, as good as your mom makes", price: 2.50},
// ]

// const drinks = [
//     { name: "Cola", description: "You know the deal", price: 2.50},
//     { name: "Diet Cola", description: "You on a diet?", price: 2.50},
//     { name: "Sprite", description: "Lemon-Lime greatness!", price: 2.50},
//     { name: "Lemonade", description: "Fresh squeezed lemonade", price: 3.25},
// ]

// const orderForm = document.getElementByClass('.order-form'); {//change 'order-form' to '.order-form'
// orderForm.addEventListener('click', function(event){ //submit might change to a different button

// const orderForm = document.getElementById('.order-form'); //change 'order-form' to '.order-form'
// orderForm.addEventListener('add', function(event) //submit might change to a different button

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function (event) {
  console.log(event);
});

const submitButton = document.querySelector(".checkout");
submitButton.addEventListener("click", function (event) {
  console.log(event);
});
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

// Displays number of items in cart
const itemCount = document.querySelector("#itm-count");
console.log(itemCount);

let cartNum = 4; // number for testing; should be fed from Jamie's calculation of submitted items
itemCount.innerText = cartNum;