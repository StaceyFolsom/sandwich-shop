const menuItems = [
  {
    name: "BLT",
    group: "sandwich",
    description: "Bacon, consttucs, & tomato",
    price: 5.0,
  },
  {
    name: "Caprese",
    group: "sandwich",
    description: "Mozzarella, tomato, & basil",
    price: 7.5,
  },
  {
    name: "PBJ",
    group: "sandwich",
    description: "Peanut butter & jelly time!",
    price: 3.5,
  },
  {
    name: "Turkey Club",
    group: "sandwich",
    description: "Turkey, swiss, lettuce, & tomato",
    price: 8.5,
  },
  {
    name: "Chips",
    group: "sides",
    description: "Homemade kettle baked cajun seasoned chips - best in town!",
    price: 2.5,
  },
  {
    name: "Chocolate Chip Cookie",
    group: "sides",
    description: "Fresh chocolate chip cookies, as good as your mom makes",
    price: 2.5,
  },
  {
    name: "Cola",
    group: "drinks",
    description: "You know the deal",
    price: 2.5,
  },
  {
    name: "Diet Cola",
    group: "drinks",
    description: "You on a diet?",
    price: 2.5,
  },
  {
    name: "Sprite",
    group: "drinks",
    description: "Lemon-Lime greatness!",
    price: 2.5,
  },
  {
    name: "Lemonade",
    group: "drinks",
    description: "Fresh squeezed lemonade",
    price: 3.25,
  },
];

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

checkout.addEventListener("click", function (e) {
  e.preventDefault();
  let orderItems = [];
  // toggle hiding the first section when submit is clicked
  const hideForm = document.querySelector(".order-form");
  document.querySelector(".payment").style.display = "flex";
  hideForm.classList.toggle("hidden");
  const summary = document.querySelector(".summary");
  const h2 = document.createElement("h2");
  h2.innerText = "ORDER SUMMARY";
  h2.style.textAlign = "left";
  h2.style.marginLeft = "80px";
  summary.append(h2);
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("orderHeader");
  summary.append(headerDiv);
  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("id", "hdr");
  itemDiv.innerHTML += "Item";
  headerDiv.append(itemDiv);
  const qtyDiv = document.createElement("div");
  qtyDiv.setAttribute("id", "hdr");
  qtyDiv.innerHTML += "Quantity";
  headerDiv.append(qtyDiv);
  const priceDiv = document.createElement("div");
  priceDiv.setAttribute("id", "hdr");
  priceDiv.innerHTML += "Price";
  headerDiv.append(priceDiv);
  let itemQty = document.getElementsByClassName("dropdown");
  let subTotal = 0;
  let subQty = 0;
  for (let i = 0; i < itemQty.length; i++) {
    let orderMenuItems = menuItems;
    let itemQtyNumber = itemQty[i].options[itemQty[i].selectedIndex].text;
    let frmtPrice = 0;
    if (itemQtyNumber > 0) {
      const detailDiv = document.createElement("div");
      detailDiv.classList.add("detailRow");
      summary.append(detailDiv);
      const dtlnameDiv = document.createElement("div");
      dtlnameDiv.setAttribute("id", "dtlRow");
      dtlnameDiv.innerHTML += orderMenuItems[i].name;
      detailDiv.append(dtlnameDiv);
      const dtlqtyDiv = document.createElement("div");
      dtlqtyDiv.setAttribute("id", "dtlRow");
      dtlqtyDiv.innerHTML += itemQtyNumber;
      detailDiv.append(dtlqtyDiv);
      const dtlpriceDiv = document.createElement("div");
      dtlpriceDiv.setAttribute("id", "dtlRow");
      frmtPrice = itemQtyNumber * orderMenuItems[i].price;
      dtlpriceDiv.innerHTML += "$" + frmtPrice.toFixed(2);
      detailDiv.append(dtlpriceDiv);
      subTotal += parseFloat(frmtPrice);
      subQty += parseInt(itemQtyNumber);
    }
  }
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("totalRow");
  summary.append(totalDiv);
  const subtotalDiv = document.createElement("div");
  subtotalDiv.setAttribute("id", "totlRow");
  subtotalDiv.innerHTML += "Total:";
  totalDiv.append(subtotalDiv);
  const subqtyDiv = document.createElement("div");
  subqtyDiv.setAttribute("id", "totlRow");
  subqtyDiv.innerHTML += subQty;
  totalDiv.append(subqtyDiv);
  const totalpriceDiv = document.createElement("div");
  totalpriceDiv.setAttribute("id", "totlRow");
  totalpriceDiv.innerHTML += "$" + subTotal.toFixed(2);
  totalDiv.append(totalpriceDiv);

  const tax = subTotal * 0.06;
  const taxDiv = document.createElement("div");
  taxDiv.classList.add("taxRow");
  summary.append(taxDiv);
  const taxDiv1 = document.createElement("div");
  taxDiv1.setAttribute("id", "taxRow");
  taxDiv1.innerHTML += "Tax";
  taxDiv1.innerHTML += "$" + tax.toFixed(2);
  taxDiv.append(taxDiv1);

  const finalTotal = subTotal + tax;
  const finalPriceDiv = document.createElement("div");
  finalPriceDiv.classList.add("finalPriceRow");
  summary.append(finalPriceDiv);
  const finalPriceDiv1 = document.createElement("div");
  finalPriceDiv1.setAttribute("id", "finalPriceRow");
  finalPriceDiv1.innerHTML += "Total";
  finalPriceDiv1.innerHTML += "$" + finalTotal.toFixed(2);
  finalPriceDiv.append(finalPriceDiv1);
});

makepayment.addEventListener("click", function (e) {
  document.querySelector(".summary").style.display = "none";
  document.querySelector(".payment").style.display = "none";
  e.preventDefault();
  const summary = document.querySelector(".receipt");
  const h2 = document.createElement("h2");
  h2.innerText = "ORDER CONFIRMATION";
  h2.style.textAlign = "left";
  h2.style.marginLeft = "80px";
  summary.append(h2);
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("orderHeader");
  summary.append(headerDiv);
  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("id", "hdr");
  itemDiv.innerHTML += "Item";
  headerDiv.append(itemDiv);
  const qtyDiv = document.createElement("div");
  qtyDiv.setAttribute("id", "hdr");
  qtyDiv.innerHTML += "Quantity";
  headerDiv.append(qtyDiv);
  const priceDiv = document.createElement("div");
  priceDiv.setAttribute("id", "hdr");
  priceDiv.innerHTML += "Price";
  headerDiv.append(priceDiv);
  let itemQty = document.getElementsByClassName("dropdown");
  let subTotal = 0;
  let subQty = 0;
  for (let i = 0; i < itemQty.length; i++) {
    let orderMenuItems = menuItems;
    let itemQtyNumber = itemQty[i].options[itemQty[i].selectedIndex].text;
    let frmtPrice = 0;
    if (itemQtyNumber > 0) {
      const detailDiv = document.createElement("div");
      detailDiv.classList.add("detailRow");
      summary.append(detailDiv);
      const dtlnameDiv = document.createElement("div");
      dtlnameDiv.setAttribute("id", "dtlRow");
      dtlnameDiv.innerHTML += orderMenuItems[i].name;
      detailDiv.append(dtlnameDiv);
      const dtlqtyDiv = document.createElement("div");
      dtlqtyDiv.setAttribute("id", "dtlRow");
      dtlqtyDiv.innerHTML += itemQtyNumber;
      detailDiv.append(dtlqtyDiv);
      const dtlpriceDiv = document.createElement("div");
      dtlpriceDiv.setAttribute("id", "dtlRow");
      frmtPrice = itemQtyNumber * orderMenuItems[i].price;
      dtlpriceDiv.innerHTML += "$" + frmtPrice.toFixed(2);
      detailDiv.append(dtlpriceDiv);
      subTotal += parseFloat(frmtPrice);
      subQty += parseInt(itemQtyNumber);
    }
  }
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("totalRow");
  summary.append(totalDiv);

  const subtotalDiv = document.createElement("div");
  subtotalDiv.setAttribute("id", "totlRow");
  subtotalDiv.innerHTML += "Total:";
  totalDiv.append(subtotalDiv);

  const subqtyDiv = document.createElement("div");
  subqtyDiv.setAttribute("id", "totlRow");
  subqtyDiv.innerHTML += subQty;
  totalDiv.append(subqtyDiv);

  const totalpriceDiv = document.createElement("div");
  totalpriceDiv.setAttribute("id", "totlRow");
  totalpriceDiv.innerHTML += "$" + subTotal.toFixed(2);
  totalDiv.append(totalpriceDiv);

  const tax = subTotal * 0.06;
  const taxDiv = document.createElement("div");
  taxDiv.classList.add("taxRow");
  summary.append(taxDiv);
  const taxDiv1 = document.createElement("div");
  taxDiv1.setAttribute("id", "taxRow");
  taxDiv1.innerHTML += "Tax";
  taxDiv1.innerHTML += "$" + tax.toFixed(2);
  taxDiv.append(taxDiv1);

  const finalTotal = subTotal + tax;
  const finalPriceDiv = document.createElement("div");
  finalPriceDiv.classList.add("finalPriceRow");
  summary.append(finalPriceDiv);
  const finalPriceDiv1 = document.createElement("div");
  finalPriceDiv1.setAttribute("id", "finalPriceRow");
  finalPriceDiv1.innerHTML += "Total";
  finalPriceDiv1.innerHTML += "$" + finalTotal.toFixed(2);
  finalPriceDiv.append(finalPriceDiv1);

  const cashPayment = document.getElementById("cashAmount").value;
  let change = parseFloat(cashPayment - finalTotal);
  let formattedChange = change.toFixed(2);
  const changeDiv = document.createElement("div");
  changeDiv.classList.add("changeRow");
  summary.append(changeDiv);
  const changeBack = document.createElement("div");
  changeBack.innerText += "Your change is " + formattedChange;
  changeDiv.append(changeBack);
});

function cashOrCredit() {
  if (document.getElementById("cc-pmt").checked) {
    document.getElementById("card-payment-elements").style.display = "block";
    document.getElementById("cash-tendered").style.display = "none";
  } else if (document.getElementById("cash-pmt").checked) {
    document.getElementById("card-payment-elements").style.display = "none";
    document.getElementById("cash-tendered").style.display = "block";
  }
};
