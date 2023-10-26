//add to cart functionality
    document.addEventListener('DOMContentLoaded', function () {
    // Initialize the cart from local storage or create an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add items to the cart
    window.addToCart = function (productName, price) {
        const item = {
            name: productName,
            price: price
        };

        // Add the item to the cart
        cart.push(item);

        // Update the cart in local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Alert the user that the item has been added to the cart
        alert(`Added ${productName} to the cart.`);
    };

    // Function to update the cart count
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    // Call the function to update the initial cart count
    updateCartCount();
});
