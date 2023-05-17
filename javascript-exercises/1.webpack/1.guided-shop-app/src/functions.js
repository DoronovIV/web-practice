export const cart = [];

export function AddProduct(id) {
    const price = +this.closest('.product')?.querySelector('.product__price')?.textContent;
    const title = this.closest('.product')?.querySelector('.product__title')?.textContent;
    const quantity = Number(this.nextElementSibling.value);

    const item = {
        id,
        title,
        price,
        quantity,
    };

    cart.push(item);
}

export function RemoveProduct(id) {
    this.textContent = 'Add to cart';

    const checkItemIndex = cart.findIndex((item) => item.id === id);

    if(checkItemIndex !== -1){
        cart.splice(checkItemIndex , 1);
    }
}

export function SetCartTotal() {
    const cartElementRef = document.querySelector('.cart__total');
    const cartPriceElementRef = document.querySelector('.cart__price');

    if(cartElementRef) {
        cartElementRef.textContent = cart.length;
    }

    if(cartPriceElementRef) {
        const total = cart.reduce((acc , current) => {
            return acc + current.price * current.quantity;
        } , 0);

        cartPriceElementRef.textContent = total.toFixed(2);
    }
}

export function CheckQuantityValue(value) {
    const parsedValue = Number(value);

    if(parsedValue < 1 || parsedValue > 100){
        return 1;
    }

    return parsedValue;
}

export function CheckProduct(id) {
    const checkItem = cart.find((item) => {
        return item.id === id;
    });

    return !!checkItem;
} 