// --------------------------
// Mobile Navigation Toggle
// --------------------------
const nav = document.querySelector("nav ul");
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "☰";
toggleBtn.classList.add("nav-toggle");

document.querySelector("header .container")?.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggleBtn.classList.toggle("active");
});

// --------------------------
// Cart System
// --------------------------
let cartCount = 0;
const cartBadge = document.createElement("span");
cartBadge.classList.add("cart-badge");
cartBadge.textContent = cartCount;

// Add cart icon to header
const cartIcon = document.createElement("div");
cartIcon.classList.add("cart-icon");
cartIcon.innerHTML = "🛒 ";
cartIcon.appendChild(cartBadge);
document.querySelector("header .container")?.appendChild(cartIcon);

// Add to Cart buttons functionality
const addToCartBtns = document.querySelectorAll(".product button");

addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartBadge.textContent = cartCount;
    btn.textContent = "Added!";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.disabled = false;
    }, 1200);
  });
});
