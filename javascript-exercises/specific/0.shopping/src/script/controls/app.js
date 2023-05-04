import { ProductInserter } from '../service/productInserter.js';

export class App {
    constructor() {}

    run() {
        let ins = new ProductInserter();
        ins.insertAll();

        let cart = document.querySelector('.page-content__header__content__cart-icon');
        cart.addEventListener('mouseover', this._onCartMouseover);
        cart.addEventListener('mouseleave', this._onCartMouseleave);
    }

    _onCartMouseover() {
        const _cartWindow = document.querySelector('.page-content__header__cart-window');
        _cartWindow.style.visibility = 'visible';
    }

    _onCartMouseleave() {
        const _cartWindow = document.querySelector('.page-content__header__cart-window');
        _cartWindow.style.visibility = 'hidden';
    }
}
