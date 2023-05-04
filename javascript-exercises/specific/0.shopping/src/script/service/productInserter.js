import { Toolbox } from '../tools/toolbox.js';
import { Product } from '../product/product.js';

export class ProductInserter {
    constructor(productsDiv, cartManager) {
        this._productsDiv = productsDiv;
        this._controls = document.querySelector('.page-content__body__product-list__element__controls');
        this._cartManager = cartManager;
        this._toolbox = new Toolbox();
    }

    insertAll() {
        let arr = this._getProductList();
        for (let el of arr) {
            this.insertProduct(el);
        }
    }

    insertProduct(prod) {
        let productDiv = this._toolbox.createDiv(Product.ELEMENT);

        // creating element sub-elements with product contents;
        let productImg = this._toolbox.createImg(Product.ELEMENT_PICTURE, prod.imgRelPath);
        let productTitle = this._toolbox.createParagraph(Product.ELEMENT_TITLE, prod.title);
        let productPrice = this._toolbox.createParagraph(Product.ELEMENT_PRICE, prod.price);
        let productBonus = this._toolbox.createParagraph(Product.ELEMENT_BONUS, prod.bonus);

        // creating controls and adding 'onclick' event;
        let productControls = this._toolbox._createElementOfClass('div');
        productControls.innerHTML = this._controls.innerHTML;
        productControls.children[0].addEventListener('click', () => {
            this._cartManager.addProduct(prod);
        });

        // appending sub-elements;
        productDiv.appendChild(productImg);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productBonus);
        productDiv.appendChild(productControls);

        // appending the new element itself;
        this._productsDiv.appendChild(productDiv);
    }

    _getNewProductSlot() {
        return prodsDiv;
    }

    _getProductList() {
        return [
            {
                id: 0,
                imgRelPath: '/resources/phone.jfif',
                title: 'SomePhone 44 Pro',
                price: '99 999 ₿',
                bonus: '+300 бонусов'
            },
            {
                id: 1,
                imgRelPath: '/resources/fridge.jfif',
                title: 'SomeFridge 500',
                price: ' 89 999 ₿',
                bonus: '+300 бонусов'
            },
            {
                id: 2,
                imgRelPath: '/resources/tv.jfif',
                title: 'SomeTV 2',
                price: ' 69 999 ₿',
                bonus: '+300 бонусов'
            },
            {
                id: 3,
                imgRelPath: '/resources/washing.png',
                title: 'Washer 290',
                price: ' 79 999 ₿',
                bonus: '+300 бонусов'
            },
            {
                id: 4,
                imgRelPath: '/resources/laptop.png',
                title: 'Backard Pell 15',
                price: ' 59 999 ₿',
                bonus: '+300 бонусов'
            }
        ];
    }
}
