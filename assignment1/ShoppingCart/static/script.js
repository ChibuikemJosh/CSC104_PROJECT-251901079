const products = [
    {
        id: 1,
        name: "Laptop",
        price: 350000
    },
    {
        id: 2,
        name: "Mouse",
        price: 15000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 25000
    },
    {
        id: 4,
        name: "Headphones",
        price: 40000
    },
    {
        id: 5,
        name: "Monitor",
        price: 120000
    }
];

const cart = [];

const productsContainer =
    document.getElementById("products");

const cartContainer =
    document.getElementById("cart-items");

const totalElement =
    document.getElementById("total");

function renderProducts() {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        const div = document.createElement("div");

        div.classList.add("product");

        div.innerHTML = `
            <span>
                ${product.name}
                - ₦${product.price.toLocaleString()}
            </span>

            <button
                class="add-btn"
                onclick="addToCart(${product.id})"
            >
                Add to Cart
            </button>
        `;

        productsContainer.appendChild(div);
    });
}

function addToCart(id) {

    const product =
        products.find(p => p.id === id);

    cart.push(product);

    renderCart();
}

function removeFromCart(index) {

    cart.splice(index, 1);

    renderCart();
}

function renderCart() {

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <span>
                ${item.name}
                - ₦${item.price.toLocaleString()}
            </span>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>
        `;

        cartContainer.appendChild(div);
    });

    totalElement.textContent =
        total.toLocaleString();
}

renderProducts();