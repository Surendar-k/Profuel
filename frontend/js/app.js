document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("productsContainer");

  fetch("http://localhost:5000/api/products")
    .then((response) => response.json())
    .then((products) => {
      productsContainer.innerHTML = "";
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("productCard");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
          `;

        productsContainer.appendChild(productCard);
      });
    })
    .catch((err) => console.error("Error fetching products:", err));
});
document.getElementById("navbar").innerHTML = `
    <a href="/index.html">Home</a>
    <a href="/service.html">Services</a>
    <a href="/about.html">About US</a>
    <a href="/contact.html">Contact</a>
`;
document.getElementById("footer").innerHTML = `
    <p>&copy; 2025 My Website. All rights reserved.</p>
`;
