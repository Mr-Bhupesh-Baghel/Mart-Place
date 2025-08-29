// Load products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

const form = document.getElementById("product-form");
const adminProducts = document.getElementById("admin-products");

function renderProducts() {
  adminProducts.innerHTML = "";
  products.forEach((p, index) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;
    adminProducts.appendChild(div);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  products.push({ name, price, image });
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
  form.reset();
});

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

renderProducts();


