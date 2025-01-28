document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: "Pizza", price: 820, image: "images/slice-of-pizza.jpg", description: "Delicious cheese pizza with a crispy crust." },
        { name: "Burger", price: 656, image: "images/burger-cheese.jpg", description: "Juicy beef burger with fresh lettuce and tomato." },
        { name: "Pasta", price: 984, image: "images/pasta-with-cream-sauce.jpg", description: "Creamy Alfredo pasta with grilled chicken." },
        { name: "Salad", price: 492, image: "images/healthy-eating-vegan-food-lifestyle-image.jpg", description: "Fresh garden salad with a variety of veggies." },
        { name: "Sushi", price: 1200, image: "images/sushi.jpg", description: "Assorted sushi platter with fresh fish." },
        { name: "Steak", price: 1620, image: "images/asparagus-2169305_1280.jpg", description: "Grilled steak with garlic butter." },
        { name: "Tacos", price: 685, image: "images/bbq-taco.jpg", description: "Spicy beef tacos with salsa." },
        { name: "Ice Cream", price: 430, image: "images/ice-cream.jpg", description: "Creamy vanilla ice cream with chocolate sauce." }
    ];

    const menuContainer = document.getElementById('menu-items');
    const cartContainer = document.getElementById('cart');
    const totalAmountElement = document.getElementById('total-amount');
    let cart = [];
    let totalAmount = 0;

    menuItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        
        const card = document.createElement('div');
        card.className = 'card h-100';
        
        card.innerHTML = `
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <button class="btn btn-primary add-to-cart" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
            </div>
            <div class="card-footer">
                <p class="card-text font-weight-bold">RS: ${item.price}</p>
            </div>
        `;
        
        col.appendChild(card);
        menuContainer.appendChild(col);
    });

    document.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('add-to-cart')) {
            const itemName = event.target.getAttribute('data-name');
            const itemPrice = parseFloat(event.target.getAttribute('data-price'));
            addItemToCart(itemName, itemPrice);
        }
    });

    document.getElementById('confirm-order').addEventListener('click', () => {
        const name = document.getElementById('customer-name').value;
        const address = document.getElementById('customer-address').value;
        const phone = document.getElementById('customer-phone').value;
        const email = document.getElementById('customer-email').value;

        if (name && address && phone && email) {
            alert(`Order placed!\n\nCustomer Details:\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\n\nTotal amount: $${totalAmount.toFixed(2)}`);
            cart = [];
            totalAmount = 0;
            updateCart();
            $('#orderModal').modal('hide');
        } else {
            alert('Please fill in all the details.');
        }
    });

    function addItemToCart(name, price) {
        const cartItem = cart.find(item => item.name === name);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        totalAmount += price;
        updateCart();
    }

    function updateCart() {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name} x${item.quantity} - RS: ${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }
});
