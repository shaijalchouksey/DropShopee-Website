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
// Modal open function
function openModal(productId) {
    document.getElementById(productId + '-modal').style.display = 'block';
}

// Modal close function
function closeModal(productId) {
    document.getElementById(productId + '-modal').style.display = 'none';
}

// Array of product images for the carousel
const productImages = {
    product1: ['Ethnic32_front.png', 'Ethnic32_side.png', 'Ethnic32_back.png']
};

let currentIndex = { product1: 0 };

// Function to show the next image in the gallery
function nextImage(productId) {
    currentIndex[productId] = (currentIndex[productId] + 1) % productImages[productId].length;
    document.getElementById(productId + '-large-image').src = productImages[productId][currentIndex[productId]];
}

// Function to show the previous image in the gallery
function prevImage(productId) {
    currentIndex[productId] = (currentIndex[productId] - 1 + productImages[productId].length) % productImages[productId].length;
    document.getElementById(productId + '-large-image').src = productImages[productId][currentIndex[productId]];
}


function loadProductDetails(productId) {
    const product = products[productId];
    document.querySelector('.product-info h1').textContent = product.name;
    document.querySelector('.product-info p').textContent = `Price: ₹${product.price}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('main-image').src = product.images[0];
}
