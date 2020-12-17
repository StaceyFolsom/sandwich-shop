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
checkout.addEventListener("click", function (e) {
  const hideForm = document.querySelector(".order-form");
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
      document.querySelector(".summary").appendChild(summaryDiv);

      

      const h2 = document.createElement("h2");
      let totalQty = 0;
      let totalCost = 0;
      

      totalCost += parseFloat(orderMenuItems[i].price * itemQtyNumber);
      totalQty += parseInt(itemQtyNumber);
      totalTax = totalCost * 0.06;
      finalTotal = totalCost + totalTax;
      // const totalSummaryDiv = document.createElement("div");
      // h2.innerText = "TOTAL SUMMARY";
      // totalSummaryDiv.append(h2);
      // const totalDiv = document.createElement("div");
      // const totalH2 = document.createElement("h2");
      // totalDiv.append(h2);

      const subtotalSummaryDiv = document.createElement("p");
      subtotalSummaryDiv.innerText = "Subtotal $";
      subtotalSummaryDiv.classList.add("Subtotal");
      subtotalSummaryDiv.innerHTML += totalCost;
      document.querySelector(".summary").appendChild(subtotalSummaryDiv);

     
      subtotalSummaryDiv.innerText = "Tax $";
      subtotalSummaryDiv.classList.add("tax");
      subtotalSummaryDiv.innerHTML += totalTax;
      document.querySelector(".summary").appendChild(subtotalSummaryDiv);

     

      subtotalSummaryDiv.classList.add("Total");
      subtotalSummaryDiv.innerText = "Total $";
      subtotalSummaryDiv.innerHTML += finalTotal;
      document.querySelector(".summary").appendChild(subtotalSummaryDiv);

      
    }
  }
});