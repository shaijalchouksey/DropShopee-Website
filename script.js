document.addEventListener('DOMContentLoaded', () => {
    // Sample product data (in real projects, fetch from an API)
    document.addEventListener('DOMContentLoaded', () => {
        // JavaScript for Popup Banner
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-banner");
    const closeBtn = document.querySelector(".close-btn");

    // Show the popup when the page loads
    popup.style.display = "flex";

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener("click", function (e) {
        if (e.target == popup) {
            popup.style.display = "none";
        }
    });
});

        const announcements = [
            "Join Now & Get up to Rs.7,500 OFF on our Subscription Plans (Use Coupon Code: Diwali)",
            "Earn 300% Profits on All Orders",
            "Ship @ Flat 39rs",
            "Join Now & Get up to Rs.7,500 OFF on our Subscription Plans (Use Coupon Code: Diwali)",
            "Earn 300% Profits on All Orders",
            "Ship @ Flat 39rs"
        ];
    
        let index = 0;
        const announcementText = document.getElementById('announcement-text');
    
        function updateAnnouncement() {
            announcementText.textContent = announcements[index];
            index = (index + 1) % announcements.length;
        }
    
        // Change announcement every 5 seconds
        setInterval(updateAnnouncement, 5000);
    });
    const products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product1.png' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product2.png' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product3.png' },
        { id: 4, name: 'Product 4', price: 49.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product4.png' },
        { id: 5, name: 'Product 5', price: 39.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product5.png' },
        { id: 6, name: 'Product 6', price: 39.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product6.png' },
        { id: 7, name: 'Product 7', price: 39.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product7.png' },
        { id: 8, name: 'Product 8', price: 39.99, image: 'C:\Users\abhib\Desktop\Assigenmnt\product8.png' }
    ];

    const productGrid = document.getElementById('product-grid');

    // Function to render products dynamically
    function renderProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button>Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('offerModal');
        modal.style.display = 'block';
    
        window.closeModal = function() {
            modal.style.display = 'none';
        }
    });
    renderProducts(products);

    document.querySelectorAll('.sign-up-btn').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "signup.html"; // Redirect to signup or login page
        });
    });
});



