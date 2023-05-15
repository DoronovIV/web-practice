import { Toolbox } from '../tools/toolbox.js';
import { CartProduct } from '../product/cart-product.js';

export class CartManager {
    constructor() {
        this._cartProductList = document.querySelector('.page-content__header__cart-window__product-list');
        this._toolbox = new Toolbox();
        this._isEmpty = true;
    }

    // add product to the cart;
    addProduct(prod) {
        if (this._cartProductList.children.length <= 1 && this._isEmpty) {
            this._deleteDefaultLabel();
            this._isEmpty = false;
        }

        let newProductDiv = this._toolbox.createDiv(CartProduct.CART_PRODUCT);

        let newProductTextContainer = this._toolbox.createDiv(CartProduct.CART_PRODUCT_TEXT_CONTAINER);

        let newProductPicture = this._toolbox.createImg(CartProduct.CART_PRODUCT_PICTURE, prod.imgRelPath);

        let title = this._toolbox.createParagraph(CartProduct.CART_PRODUCT_TITLE, prod.title);
        let price = this._toolbox.createParagraph(CartProduct.CART_PRODUCT_PRICE, prod.price);

        newProductTextContainer.appendChild(title);
        newProductTextContainer.appendChild(price);

        let newProductButton = this._toolbox.createDiv(CartProduct.CART_PRODUCT_REMOVE_BUTTON);

        newProductDiv.appendChild(newProductPicture);
        newProductDiv.appendChild(newProductTextContainer);
        newProductDiv.appendChild(newProductButton);

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
