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
      <p>$${p.price}</p>
      <button class="btn">Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      cartCount++;
      cartBadge.textContent = cartCount;
      alert(`${p.name} added to cart!`);
    });

    productList.appendChild(div);
  });
}

renderProducts();
