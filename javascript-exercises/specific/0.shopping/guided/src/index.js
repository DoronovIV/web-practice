/*

    TODO: 

        - ask Alexei about the 'data-product-id' property creation;

*/

const toolbox = {};
toolbox.CreateDiv = createDiv;
toolbox.CreateParagraph = createParagraph;
toolbox.CreateImg = createImg;
toolbox.CreateButton = createButton;
toolbox.CreateElementOfClass = _createElementOfClass;
toolbox.ToNumberWithCommas = toNumberWithCommas;
toolbox.BackToNumber = backToNumber;
const CURRENCY = '$';

class Product {
    constructor(title, imgSrc, price, id, quantity) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }
}

fillProductList();

// references queries;
const mainButtonList = document.querySelectorAll('.btn');
const cartElementRef = document.querySelector('.cart__total');
const cartPriceElementRef = document.querySelector('.cart__price');
const cart = [];

const decreaseButtonList = document.querySelectorAll('.btn-quantity-decrease');
const increaseButtonList = document.querySelectorAll('.btn-quantity-increase');

// the main loop;
mainButtonList.forEach(function (button) {
    button.dataset.added = 'false';

    button.addEventListener('click', function () {
        const id = this.dataset.productId;

        if (!this.classList.contains('btn--primary')) {
            this.textContent = 'Remove from cart';

            AddProduct.call(this, id);
            showQuantityControls.call(this, id);
        } else {
            this.textContent = 'Add to cart';
            RemoveProduct.call(this, id);
            hideQuantityControls.call(this, id);
        }

        this.classList.toggle('btn--primary');

        SetCartTotal();
    });
});

// quantity control;
increaseButtonList.forEach(function (button) {
    const id = button.closest('.product')?.querySelector('.btn').dataset.productId;
    const quantityValue = button.closest('.product')?.querySelector('.quantity-value');
    button.addEventListener('click', function () {
        console.log(id);
        AddProduct.call(this, id);
        quantityValue.innerText = +quantityValue.innerText + 1;
        SetCartTotal();
    });
});
decreaseButtonList.forEach(function (button) {
    let btn = button.closest('.product')?.querySelector('.btn');
    const id = btn.dataset.productId;
    const quantityValue = button.closest('.product')?.querySelector('.quantity-value');

    button.addEventListener('click', function () {
        decreaseProduct.call(this, id);
        quantityValue.innerText = +quantityValue.innerText - 1;
        if (+quantityValue.innerText <= 0) {
            RemoveProduct.call(btn, id);
            hideQuantityControls.call(this, id);
            btn.classList.toggle('btn--primary');
            btn.innerHTML = 'Add to cart';
        }
        SetCartTotal();
    });
});

// function site;
function AddProduct(id) {
    const price = toolbox.BackToNumber(this.closest('.product')?.querySelector('.product__price')?.textContent);
    const title = this.closest('.product')?.querySelector('.product__title')?.textContent;
    const isAlreadyPresent = cart.find((item) => item.id === id);

    const item = {
        id,
        title,
        price,
        quantity: !isAlreadyPresent ? 1 : isAlreadyPresent.quantity + 1
    };
    console.log(isAlreadyPresent);

    if (!isAlreadyPresent) {
        cart.push(item);
        console.log(cart);
    } else {
        isAlreadyPresent.quantity += 1;
    }
}

function RemoveProduct(id) {
    console.log(cart);

    this.textContent = 'Add to cart';
    const quantityValue = this.closest('.product')?.querySelector('.quantity-value');
    const checkItemIndex = cart.findIndex((item) => item.id === id);

    if (checkItemIndex !== -1) {
        cart.splice(checkItemIndex, 1);
        quantityValue.innerText = '1';
    }

    console.log(cart);
}

function SetCartTotal() {
    if (cartElementRef) {
        cartElementRef.textContent = cart.length;
    }

    if (cartPriceElementRef) {
        const total = cart.reduce((acc, current) => {
            return acc + current.price * current.quantity;
        }, 0);

        cartPriceElementRef.textContent = total.toFixed(2);
    }
}

function decreaseProduct(id) {
    let product = cart.find((item) => item.id === id);

    if (product.quantity >= 0) {
        product.quantity -= 1;
    }
}

function fillProductList() {
    let productList = [
        {
            id: 0,
            imgRelPath: '../resources/phone.jfif',
            title: 'SomePhone 44 Pro',
            price: 99999,
            bonus: '+300 бонусов'
        },
        {
            id: 1,
            imgRelPath: '../resources/fridge.jfif',
            title: 'SomeFridge 500',
            price: 89999,
            bonus: '+300 бонусов'
        },
        {
            id: 2,
            imgRelPath: '../resources/tv.jfif',
            title: 'SomeTV 2',
            price: 69999,
            bonus: '+300 бонусов'
        },
        {
            id: 3,
            imgRelPath: '../resources/washing.png',
            title: 'Washer 290',
            price: 79999,
            bonus: '+300 бонусов'
        },
        {
            id: 4,
            imgRelPath: '../resources/laptop.png',
            title: 'Backard Pell 15',
            price: 59999,
            bonus: '+300 бонусов'
        }
    ];

    productList.forEach((element) => {
        let mark = getProductMarkup(element);
        let products = document.querySelector('.goods');
        products.appendChild(mark);
    });
}

function getProductMarkup(prod) {
    let product = toolbox.CreateDiv('product');
    // div
    let productTitle = toolbox.CreateElementOfClass('h3', 'product__title');
    productTitle.innerText = prod.title;

    let productBody = toolbox.CreateDiv('product__body');
    //    div
    let productBodyImage = toolbox.CreateImg('product__image product__image--small product__image--blur', prod.imgRelPath);
    let productBodySpan = toolbox.CreateElementOfClass('span', 'product__price');
    productBodySpan.innerText = toolbox.ToNumberWithCommas(prod.price) + ' ' + CURRENCY;
    //    end of div

    let productActions = toolbox.CreateDiv('product__actions');
    //    div
    let btn = toolbox.CreateElementOfClass('button', 'btn');
    btn['data-product-id'] = prod.id;
    btn.innerText = 'Add to cart';

    //       div
    let productQuantity = toolbox.CreateDiv('product__quantity');
    let minusButton = toolbox.CreateButton('btn-quantity-decrease', '-');
    let quantityParagraph = toolbox.CreateParagraph('quantity-value', '1');
    let plusButton = toolbox.CreateButton('btn-quantity-increase', '+');

    productQuantity.appendChild(minusButton);
    productQuantity.appendChild(quantityParagraph);
    productQuantity.appendChild(plusButton);
    //       end of div
    //    end of div
    // end of div

    productActions.appendChild(btn);
    productActions.appendChild(productQuantity);

    productBody.appendChild(productBodyImage);
    productBody.appendChild(productBodySpan);

    product.appendChild(productTitle);
    product.appendChild(productBody);
    product.appendChild(productActions);

    return product;
}

function showQuantityControls(id) {
    const productDiv = this.closest('.product')?.querySelector('.product__quantity');
    productDiv.style.visibility = 'visible';
}

function hideQuantityControls(id) {
    const productDiv = this.closest('.product')?.querySelector('.product__quantity');
    productDiv.style.visibility = 'hidden';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function _createElementOfClass(elementName, className) {
    let res = document.createElement(elementName);
    res.className = className ?? null;
    return res;
}

function createImg(className, src) {
    let res = _createElementOfClass('img', className);
    res.alt = 'Image not found';
    res.src = src;
    return res;
}

function createDiv(className) {
    let res = _createElementOfClass('div', className);
    return res;
}

function createParagraph(className, innerText) {
    let res = _createElementOfClass('p', className);
    res.innerText = innerText;
    return res;
}

function createButton(className, innerText) {
    let res = _createElementOfClass('button', className);
    res.innerText = innerText ?? 'NULL';
    return res;
}

function toNumberWithCommas(nNumber) {
    return nNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function backToNumber(sNumber) {
    let res = sNumber.replace(/\ /g, '');
    return parseInt(res);
}
