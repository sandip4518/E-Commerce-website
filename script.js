// Menu Toggle
function menutoggle() {
    var MenuItems = document.getElementById("MenuItems");

    if (MenuItems.style.maxHeight === "0px" || !MenuItems.style.maxHeight) {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

// Add to Cart Functionality
function addToCart(productName, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " has been added to your cart!");
    displayCartItems();
}

// Display Cart Items
function displayCartItems() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        var productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <h4>${item.productName}</h4>
            <p>Price: ₹${item.price}</p>
        `;
        cartContainer.appendChild(productElement);
    });
}

// Clear Cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems();
    alert("Cart has been cleared!");
}

// Initialize Cart on Load
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});
