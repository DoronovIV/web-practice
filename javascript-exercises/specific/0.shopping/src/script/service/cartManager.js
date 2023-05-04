import { Toolbox } from '../tools/toolbox.js';

export class CartManager {
    constructor() {
        this._cartProductList = document.querySelector('.page-content__header__cart-window__product-list');
        this._toolbox = new Toolbox();
    }

    addProduct(prod) {
        if (this._cartProductList.children.length <= 1) {
            this._deleteDefaultLabel();
        }

        let newProductDiv = document.createElement('div');

        let title = document.createElement('p');
        title.textContent = prod.title;

        let price = document.createElement('p');
        price.textContent = prod.price;

        newProductDiv.appendChild(title);
        newProductDiv.appendChild(price);

        this._cartProductList.appendChild(newProductDiv);
    }

    _deleteDefaultLabel() {
        this._cartProductList.children[0].remove();
    }

    _createDefaultLabel() {
        let defaultLabel = this._toolbox.createElementOfClass('p', 'page-content__header__cart-window__product-list__empty-label');
        defaultLabel.textContent = 'There is nothing here yet 😋';
        this._cartProductList.appendChild(defaultLabel);
    }
}
