let cart = [];
let total = 0;

// Carregamento de Métricas do Navegador (Window, Navigator, Location, Screen, History)
document.addEventListener('DOMContentLoaded', () => {
    // 1. Window & Navigator
    const languageElement = document.getElementById("demo-language");
    if (languageElement) {
        languageElement.textContent = window.navigator.language;
    }

    // 2. Screen
    const screenElement = document.getElementById("demo-screen");
    if (screenElement) {
        screenElement.textContent = screen.colorDepth + " bits por pixel";
    }

    // 3. Location (Origin & Hostname)
    const originElement = document.getElementById("demo-origin");
    if (originElement) {
        originElement.textContent = location.origin !== "null" ? location.origin : "Arquivo Local (file://)";
    }

    const heroElement = document.getElementById("demo-hero");
    if (heroElement) {
        heroElement.textContent = location.hostname || "Localhost / Arquivo Local";
    }

    // 4. History
    const historyElement = document.getElementById("demo-history");
    if (historyElement) {
        historyElement.textContent = history.length + " página(s) visitada(s)";
    }
});

// Funções do Carrinho de Compras
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    cartItemsElement.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}`;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = total.toFixed(2).replace('.', ',');
    cartCountElement.textContent = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert(`Pedido finalizado com sucesso!\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`);
    cart = [];
    total = 0;
    updateCart();
}