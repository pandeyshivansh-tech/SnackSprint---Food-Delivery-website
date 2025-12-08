// Light/Dark Mode Toggle Button
const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", function(){
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")){
    themeBtn.textContent = "🌙";
  } 
  else{
    themeBtn.textContent = "☀";
  }
});


// CART SYSTEM
let cart = [];
const cartBtns = document.querySelectorAll(".cart-btn");
const cartCount = document.querySelector(".cart-count");
const cartDropdown = document.querySelector(".cart-dropdown");
const cartIcon = document.querySelector(".cart-icon");
const cartItemsBox = document.querySelector(".cart-items");
const emptyMsg = document.querySelector(".empty-msg");


// Add to Cart Buttons
cartBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    let name = btn.dataset.name;
    let img = btn.dataset.img;

    let existingItem = cart.find(function(item){
      return item.name === name;
    });

    if (existingItem){
      existingItem.qty = existingItem.qty + 1;
    } 
    else{
      cart.push({name: name, img: img, qty: 1});
    }

    updateCart();

    // Click feedback
    btn.classList.add("clicked");

    setTimeout(function(){
      btn.classList.remove("clicked");
    }, 150);
  });
});


// Update Cart UI
function updateCart(){
  let total = 0;

  cart.forEach(function(item){
    total = total + item.qty;
  });

  cartCount.textContent = total;
  cartItemsBox.innerHTML = "";

  cart.forEach(function(item){
    cartItemsBox.innerHTML += `
      <div class="cart-row">
        <img src="${item.img}">
        <span>${item.name}</span>
        <strong>× ${item.qty}</strong>
      </div>
    `;
  });

  if (cart.length === 0){
    emptyMsg.style.display = "block";
  } 
  else{
    emptyMsg.style.display = "none";
  }
}


// Open/Close Cart Dropdown
cartIcon.addEventListener("click", function(){
  cartDropdown.classList.toggle("show");
});


// EASTER EGG (Click the main SnackSprint logo 3 times)
const logo = document.getElementById("logo");
const easterEgg = document.getElementById("easter-egg");

let clickCount = 0;
logo.addEventListener("click", function(){
  clickCount++;

  if (clickCount === 3){
    easterEgg.style.display = "block";
    clickCount = 0;
  }
});