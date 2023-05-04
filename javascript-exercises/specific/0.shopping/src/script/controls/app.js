import { CartManager } from '../service/cartManager.js';
import { ProductInserter } from '../service/productInserter.js';

export class App {
    constructor() {
        this._cartManager = new CartManager();
    }

    run() {
        this._loadProductList();

        let cart = document.querySelector('.page-content__header__content__cart-icon');
        cart.addEventListener('mousemove', this._onCartMouseover);
        cart.addEventListener('mouseleave', () => {
            setTimeout(() => {
                this._onCartMouseleave();
            }, 1000);
        });
    }

    _onCartMouseover() {
        const _cartWindow = document.querySelector('.page-content__header__cart-window');
        _cartWindow.style.visibility = 'visible';
    }

    _onCartMouseleave() {
        const _cartWindow = document.querySelector('.page-content__header__cart-window');
        _cartWindow.style.visibility = 'hidden';
    }

    _loadProductList() {
        let productsDiv = document.querySelector('.page-content__body__product-list');

        let ins = new ProductInserter(productsDiv, this._cartManager);

        ins.insertAll();

        productsDiv.children[0].remove(); // remove the placeholder;
    }
}
