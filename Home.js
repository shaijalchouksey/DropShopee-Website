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

function loadProductDetails(productId) {
    const product = products[productId];
    document.querySelector('.product-info h1').textContent = product.name;
    document.querySelector('.product-info p').textContent = `Price: ₹${product.price}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('main-image').src = product.images[0];
}
