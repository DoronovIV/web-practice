const mainButtonList = document.querySelectorAll('.btn');
const cartElementRef = document.querySelector('.cart__total');
const cartPriceElementRef = document.querySelector('.cart__price');
const cart = [];

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
