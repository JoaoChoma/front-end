const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');

productForm.addEventListener('submit', addProduct);
searchInput.addEventListener('input', filterProducts);

const products = [];

function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (productName.trim() !== '' && !isNaN(productPrice)) {
        const product = { name: productName, price: productPrice };
        products.push(product);
        renderProductList();
        productForm.reset();
    }
}

function renderProductList() {
    productList.innerHTML = '';

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${product.name}</strong> - R$ ${product.price.toFixed(2)} <button class="deleteBtn" data-index="${index}">Excluir</button>`;
        productList.appendChild(listItem);
    }

    const deleteButtons = document.querySelectorAll('.deleteBtn');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteProduct);
    }
}

function deleteProduct(event) {
    const index = parseInt(event.target.getAttribute('data-index'));
    if (!isNaN(index) && index >= 0 && index < products.length) {
        products.splice(index, 1);
        renderProductList();
    }
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchTerm)) {
            filteredProducts.push(products[i]);
        }
    }

    productList.innerHTML = '';

    for (let i = 0; i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${product.name}</strong> - R$ ${product.price.toFixed(2)}`;
        productList.appendChild(listItem);
    }
}

// Renderizar a lista inicial de produtos
renderProductList();
