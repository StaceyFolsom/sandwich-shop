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


<<<<<<< HEAD
// function to loop through and provide menu selections
checkout.addEventListener('click',function(e){
    e.preventDefault();
    let orderItems = [];
    // toggle hiding the first section when submit is clicked 
    const hideForm=document.querySelector(".order-form"); 
    hideForm.classList.toggle("hidden");
    const summary = document.querySelector(".summary");
    const h2 = document.createElement('h2');
    h2.innerText = "Order Summary";
    summary.append(h2);
    let itemQty = document.getElementsByClassName("dropdown");
    for (let i = 0; i < itemQty.length; i++){
        
        let orderMenuItems = menuItems;
        let itemQtyNumber = itemQty[i].options[itemQty[i].selectedIndex].text;
        if (itemQtyNumber > 0){
        const summaryDiv = document.createElement('div');
       
        //h2.classList.add('summary');
       
        //summaryDiv.classList.add('h2');
        //summaryDiv.innerText = "Order Summary";
        summaryDiv.classList.add('Item');
        summaryDiv.innerHTML+="Item";
        summaryDiv.innerHTML += orderMenuItems[i].name; 
        summaryDiv.classList.add('Quantity');
        summaryDiv.innerHTML+="Quantity";
        summaryDiv.innerHTML += itemQtyNumber;
        summaryDiv.classList.add('Price');
        summaryDiv.innerHTML+="Price";
        summaryDiv.innerHTML += itemQtyNumber * orderMenuItems[i].price;
         
        summary.appendChild(summaryDiv);
        }
  
      }
=======
>>>>>>> e8560cee86a1948de06e662a2dd8dab2e9c1b7d3

checkout.addEventListener("click", function (e) {
  let hideForm = document.querySelector(".order-form");
  document.querySelector(".payment").style.display = 'flex';
  hideForm.classList.toggle("hidden");
  e.preventDefault();
  let orderItems = [];
  let itemQty = document.getElementsByClassName("dropdown");
  const summaryDiv = document.createElement("div");
  const h2 = document.createElement("h2");
        let totalQty = 0;
        let totalCost = 0;
  h2.innerText = "ORDER SUMMARY";
  summaryDiv.append(h2);
  for (let i = 0; i < itemQty.length; i++) {
    let orderMenuItems = menuItems;
    let itemQtyNumber = itemQty[i].options[itemQty[i].selectedIndex].text;
    if (itemQtyNumber > 0) {
      summaryDiv.classList.add("Item");
      summaryDiv.innerHTML += orderMenuItems[i].name;
      summaryDiv.classList.add("Quantity");
      summaryDiv.innerHTML += itemQtyNumber;
      summaryDiv.classList.add("Price");
      summaryDiv.innerHTML += orderMenuItems[i].price;
      totalCost += parseFloat(orderMenuItems[i].price * itemQtyNumber);
      totalQty += parseInt(itemQtyNumber);
    }
    
    document.querySelector(".summary").appendChild(summaryDiv);
    // const totalSummaryDiv = document.createElement("div");
    // const totalH2 = document.createElement("h2");
    // totalH2.innerText = "Total Summary";
    // totalSummaryDiv.append(h2);
    // totalSummaryDiv.classList.add("subtotal");
    // totalSummaryDiv.innerHTML += itemQtyNumber * orderMenuItems[i].price;
    // totalSummaryDiv.classList.add("Tax");
    // totalSummaryDiv.innerHTML += itemQty * orderMenuItems[i].price * 0.06;
    // totalSummaryDiv.classList.add("Total");
    // totalSummaryDiv.innerHTML += itemQty * orderMenuItems[i].price * 1.06;
    // document.querySelector(".totalSummary").append(totalSummaryDiv);
  } 
  console.log(totalQty); 
  console.log(totalCost);

});

function cashOrCredit() {
    if (document.getElementById('cc-pmt').checked) {
        document.getElementById('card-payment-elements').style.display = 'block';
        document.getElementById('cash-tendered').style.display = 'none';
    }
    else if (document.getElementById('cash-pmt').checked) {
        document.getElementById('card-payment-elements').style.display = 'none';
        document.getElementById('cash-tendered').style.display = 'block';
}};

makepayment.addEventListener("click", function (e) {
    document.querySelector(".summary").style.display = 'none';
    document.querySelector(".payment").style.display = 'none';
    e.preventDefault();
    let orderItems = [];
    let itemQty = document.getElementsByClassName("dropdown");
    const receiptDiv = document.createElement("div");
    const h2 = document.createElement("h2");
          let totalQty = 0;
          let totalCost = 0;
    h2.innerText = "ORDER CONFIRMATION";
    receiptDiv.append(h2);
    for (let i = 0; i < itemQty.length; i++) {
      let orderMenuItems = menuItems;
      let itemQtyNumber = itemQty[i].options[itemQty[i].selectedIndex].text;
      if (itemQtyNumber > 0) {
        receiptDiv.classList.add("Item");
        receiptDiv.innerHTML += orderMenuItems[i].name;
        receiptDiv.classList.add("Quantity");
        receiptDiv.innerHTML += itemQtyNumber;
        receiptDiv.classList.add("Price");
        receiptDiv.innerHTML += orderMenuItems[i].price;
        totalCost += parseFloat(orderMenuItems[i].price * itemQtyNumber);
        totalQty += parseInt(itemQtyNumber);
      }
      document.querySelector(".receipt").appendChild(receiptDiv);
    }});