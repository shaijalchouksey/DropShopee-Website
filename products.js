document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// products.js
const products = {
    "saree1": {
        "name": "Beautiful Silk Saree",
        "price": 999,
        "description": "This is a high-quality silk saree.",
        "images": ["images/saree1.jpg", "images/saree1_thumb1.jpg", "images/saree1_thumb2.jpg"]
    },
    "saree2": {
        "name": "Designer Saree",
        "price": 1599,
        "description": "This saree is perfect for weddings and special occasions.",
        "images": ["images/saree2.jpg", "images/saree2_thumb1.jpg", "images/saree2_thumb2.jpg"]
    }
};

function loadProductDetails(productId) {
    const product = products[productId];
    document.querySelector('.product-info h1').textContent = product.name;
    document.querySelector('.product-info p').textContent = `Price: ₹${product.price}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('main-image').src = product.images[0];
}
