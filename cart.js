let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("totalPrice");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price} x ${item.quantity}</p>
        </div>
        <div>
          <button onclick="changeQuantity(${index}, -1)">-</button>
          <button onclick="changeQuantity(${index}, 1)">+</button>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
        cartList.appendChild(div);
    });

    totalPrice.textContent = total.toFixed(2);
}

function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function checkout() {
    if (cart.length === 0) {
        alert("🛒 Your cart is empty!\n\n👉 If you see a Barcode, please scan it and make the payment.");
        return;
    }

    // pay Amount
    let total = getCartTotal();

    // Show Image + Message + Total
    document.getElementById("checkout-image").src = "50203ad6-7111-47f5-b356-6dbe982c2dba.jpg";
    document.getElementById("checkout-message").innerHTML = `
  <div style="font-size:18px; margin-bottom:10px; color:green; font-weight:bold;">
    🎉 Thank you for your purchase!
  </div>
  <div style="margin:8px 0; font-size:16px;">
    Please pay the total amount shown below, then call this number for confirmation:
  </div>
  <div style="font-size:18px; font-weight:bold; margin:10px 0; color:#333;">
    📞 Phone: <span style="color:#d9534f;">+91-XXXXXXXXXX</span>
  </div>
`;

    document.getElementById("checkout-total").innerText = "Total Paid: ₹" + total;

    document.getElementById("checkout-result").style.display = "block";

    // Clear Cart
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();

