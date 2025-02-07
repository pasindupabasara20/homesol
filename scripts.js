// scripts.js
let cart = [];

// Sample product data
const products = [
    { id: 1, name: "ස්මාර්ට්ෆෝන්", price: 50000, image: "phone.jpg" },
    { id: 2, name: "ලැප්ටොප්", price: 120000, image: "laptop.jpg" },
    { id: 3, name: "ටැබ්ලට්", price: 80000, image: "tablet.jpg" },
    { id: 4, name: "හෙඩ්ෆෝන්", price: 15000, image: "headphones.jpg" }
];

// Load products dynamically
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">රු. ${product.price.toLocaleString()}</p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">කරත්තයට එකතු කරන්න</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                id: button.getAttribute('data-id'),
                name: button.getAttribute('data-name'),
                price: parseInt(button.getAttribute('data-price'))
            };
            addToCart(product);
        });
    });
});

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} කරත්තයට එකතු කරන ලදී!`);
    updateCart();
}

function updateCart() {
    // Update cart UI (e.g., cart icon count)
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}