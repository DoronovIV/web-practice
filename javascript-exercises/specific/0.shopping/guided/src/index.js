const toolbox = {};
toolbox.CreateDiv = createDiv;
toolbox.CreateParagraph = createParagraph;
toolbox.CreateImg = createImg;
toolbox._createElementOfClass = _createElementOfClass;

// references queries;
const mainButtonList = document.querySelectorAll('.btn');
const cartElementRef = document.querySelector('.cart__total');
const cartPriceElementRef = document.querySelector('.cart__price');
const cart = [];

// the main loop;
mainButtonList.forEach(function (button) {
    button.dataset.added = 'false';

    button.addEventListener('click', function () {
        const id = this.dataset.productId;

        if (!this.classList.contains('btn--primary')) {
            this.textContent = 'Remove from cart';

            AddProduct.call(this, id);
        } else {
            this.textContent = 'Add to cart';
            RemoveProduct.call(this, id);
        }

        this.classList.toggle('btn--primary');

        SetCartTotal();
    });
});

// function site;
function AddProduct(id) {
    const price = +this.closest('.product')?.querySelector('.product__price')?.textContent;
    const title = this.closest('.product')?.querySelector('.product__title')?.textContent;
    const checkItem = cart.find((item) => item.id === id);

    const item = {
        id,
        title,
        price,
        amount: !checkItem ? 1 : checkItem.amount + 1
    };

    cart.push(item);
}

function RemoveProduct(id) {
    this.textContent = 'Add to cart';

    const checkItemIndex = cart.findIndex((item) => item.id === id);

    if (checkItemIndex !== -1) {
        cart.splice(checkItemIndex, 1);
    }
}

function SetCartTotal() {
    if (cartElementRef) {
        cartElementRef.textContent = cart.length;
    }

    if (cartPriceElementRef) {
        const total = cart.reduce((acc, current) => {
            // return acc + current.price;
            return acc + current.price * current.amount;
        }, 0);

        cartPriceElementRef.textContent = total.toFixed(2);
    }
}

function fillProductList() {
    // <div class="product">
    //     <h3 class="product__title">Product 1</h3>
    //     <div class="product__body">
    //         <img class="product__image product__image--small product__image--blur" src="" alt="Image not found" />
    //         <span class="product__price">50000</span>
    //     </div>
    //     <div class="product__actions">
    //         <button class="btn" data-product-id="1010">
    //             Add to cart
    //         </button>
    //     </div>
    // </div>;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function _createElementOfClass(elementName, className) {
    let res = document.createElement(elementName);
    res.className = className ?? null;
    return res;
}

function createImg(className, src) {
    let res = this._createElementOfClass('img', className);
    res.alt = 'Image not found';
    res.src = src;
    return res;
}

function createDiv(className) {
    let res = this._createElementOfClass('div', className);
    return res;
}

function createParagraph(className, innerText) {
    let res = this._createElementOfClass('p', className);
    res.innerText = innerText;
    return res;
}
