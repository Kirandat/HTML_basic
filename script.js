const menuItems = [
    { name: "Burger", price: 8.99 },
    { name: "Pizza", price: 10.99 },
    { name: "Salad", price: 6.99 },
    // Add more menu items here
];

const menuContainer = document.getElementById("menuItems");
const cartContainer = document.getElementById("cartItems");
const checkoutButton = document.getElementById("checkoutBtn");

menuItems.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;
    menuContainer.appendChild(itemElement);

    const addToCartButton = itemElement.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => addToCart(item));
});

const cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    cartContainer.innerHTML = "";
    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(cartItem);
    });
}

checkoutButton.addEventListener("click", () => {
    // Handle checkout logic here (e.g., calculate total, process payment)
    alert("Thank you for your order!");
    cart.length = 0; // Clear the cart after checkout
    updateCartDisplay();
});
