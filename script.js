let cartCount = 0;

document.querySelector('.toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function addToCart(productId) {
    let product = document.getElementById(productId);
    let addButton = product.querySelector('.add-to-cart');
    let removeButton = product.querySelector('.remove-from-cart');

    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    addButton.textContent = 'Added in Cart';
    addButton.disabled = true;
    removeButton.disabled = false;
}

function removeFromCart(productId) {
    let product = document.getElementById(productId);
    let addButton = product.querySelector('.add-to-cart');
    let removeButton = product.querySelector('.remove-from-cart');

    if (cartCount > 0) {
        cartCount--;
        document.getElementById('cart-count').textContent = cartCount;
    }

    addButton.textContent = 'Add to Cart';
    addButton.disabled = false;
    removeButton.disabled = true;
}

let slideIndex = 0;
const slides = [
    './images/slide1.jpg',
    './images/slide2.jpg',
    './images/slide3.jpg'
];

function showSlides() {
    let productContainer = document.querySelector(".product-container");
    productContainer.style.backgroundImage = `url('${slides[slideIndex]}')`;
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length; 
    showSlides();
}

showSlides();