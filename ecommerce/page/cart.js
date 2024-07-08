const products = [
    { id: 1, name: 'Leather Jacket', price: 299, image: 'images/leatherjacket.jpg' },
    { id: 2, name: 'Product 2', price: 250, image: 'images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 499, image: 'images/product3.jpg' },
];
function initCart() {
    let cartItems = localStorage.getItem('cartItems');
    if (!cartItems) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(cartItems);
    }
    displayCartItems(cartItems);
}

function displayCartItems(cartItems) {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    let total = 0;
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button class="remove-item" onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = total;
}

function addToCart(name, price, image) {
    let cartItems = localStorage.getItem('cartItems');
    if (!cartItems) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(cartItems);
    }
    
    const newItem = { name, price, image };
    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Item added to cart!');
}

function removeItem(productId) {
    let cartItems = localStorage.getItem('cartItems');
    if (!cartItems) {
        return;
    }
    cartItems = JSON.parse(cartItems);
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems(cartItems);
}

function checkout() {
    alert('Proceeding to checkout...');

}

initCart();
