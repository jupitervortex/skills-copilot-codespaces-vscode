let cart = [];

function addToCart(item) {
    cart.push(item);
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        cartItems.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            let item = button.getAttribute('data-item');
            addToCart(item);
        });
    });
});