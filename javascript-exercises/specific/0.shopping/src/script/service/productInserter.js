export class ProductInserter {
    constructor() {
        this._controls = document.querySelector('.page-content__body__product-list__element__controls');
    }

    insertAll() {
        let arr = this._getProductList();
        for (let el of arr) {
            this.insertProduct(el);
        }
    }

    insertProduct(prod) {
        let prodsDiv = document.querySelector('.page-content__body__product-list');

        let productDiv = document.createElement('div');
        productDiv.className = 'page-content__body__product-list__element';

        let productImg = document.createElement('img');
        productImg.className = 'page-content__body__product-list__element__picture';
        productImg.src = prod.imgRelPath;

        let productTitle = document.createElement('p');
        productTitle.className = 'page-content__body__product-list__element__title';
        productTitle.innerText = prod.title;

        let productPrice = document.createElement('p');
        productPrice.className = 'page-content__body__product-list__element__price';
        productPrice.innerText = prod.price;

        let productBonus = document.createElement('p');
        productBonus.className = 'page-content__body__product-list__element__bonus';
        productBonus.innerText = prod.bonus;

        let productControls = document.createElement('div');
        productControls.innerHTML = this._controls.innerHTML;

        productDiv.appendChild(productImg);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productBonus);
        productDiv.appendChild(productControls);

        prodsDiv.appendChild(productDiv);
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
