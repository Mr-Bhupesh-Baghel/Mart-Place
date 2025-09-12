// -------------------------- 
// Mobile Navigation Toggle
// -------------------------- 
(() => {
  const nav = document.querySelector("nav ul");
  if (!nav) return;

  const toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "☰";
  toggleBtn.classList.add("nav-toggle");

  const headerContainer = document.querySelector("header .container");
  headerContainer?.prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    toggleBtn.classList.toggle("active");
  });
})();


// Load products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];
let cartCount = 0;

const productList = document.getElementById("product-list");
const cartBadge = document.querySelector(".cart-badge");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <p class="description">${p.description || "No description available."}</p>
      <button class="btn">Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => { 
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(item => item.name === p.name);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ ...p, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      cartCount++;
      cartBadge.textContent = cartCount;
    });

    productList.appendChild(div);
  });
}

renderProducts();
