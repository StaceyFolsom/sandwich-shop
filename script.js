const sandwiches = [
    { name: "BLT", description: "Bacon, lettuce, & tomato", price: 5.00},
    { name: "Caprese", description: "Mozzarella, tomato, & basil", price: 7.50},
    { name: "PBJ", description: "Peanut butter & jelly time!", price: 3.50},
    { name: "Turkey Club", description: "Turkey, swiss, lettuce, & tomato", price: 8.50},
]

const sides = [
    { name: "Chips", description: "Homemade kettle baked cajun seasoned chips - best in town!", price: 2.50},
    { name: "Chocolate Chip Cookie", description: "Fresh chocolate chip cookies, as good as your mom makes", price: 2.50},
]

const drinks = [
    { name: "Cola", description: "You know the deal", price: 2.50},
    { name: "Diet Cola", description: "You on a diet?", price: 2.50},
    { name: "Sprite", description: "Lemon-lime greatness!", price: 2.50},
    { name: "Lemonade", description: "Fresh squeezed lemonade", price: 3.25},
]

// Jamie - .order-form is a class not an ID so I think the .getElementById won't work
// let orderForm = document.getElementById('.order-form'); //change 'order-form' to '.order-form'
// orderForm.addEventListener('submit', function(event) //submit might change to a different button
// {
// const data = new FormData(orderForm);
// let numberOfItems = data.get('numberOfItems');
// let price= data.get('price');

// })


//looping and adding items
// for(let i=0; i < numberOfItems; i++){
// let newOrder=document.createElement('div');
// newName.classList.add(name); //changed item to name
// newPrice.classList.add(price);
// }
// calculating subtotal
// function getSubtotal(quantity, price){
//     // let quantity = document.querySelectorAll('.sandwich-qty'); not sure if this needs to be declared
//     menuArray.forEach(function(menu) {

//         let subtotal= (price * quantity);
        
//     });
//     return subtotal;
// }
// let elements = document.querySelectorAll('.sandwich-qty');

// Event listener for click on Add button
const addButton = document.querySelector(".add");
addButton.addEventListener("click", function(event) {
    console.log(event);
});

// Event listener for click on Submit button
const submitButton = document.querySelector(".checkout");
submitButton.addEventListener("click", function(event) {
    console.log(event);
});

// Displays number of items in cart
const itemCount = document.querySelector("#itm-count");
console.log(itemCount);

let cartNum = 3; // number for testing; should be fed from Jamie's calculation of submitted items
itemCount.innerText = cartNum;
