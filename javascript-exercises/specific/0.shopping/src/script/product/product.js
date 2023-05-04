export class Product {
    constructor(id, imgRelPath, title, price, bonus) {
        this.id = id;
        this.imgRelPath = imgRelPath;
        this.title = title;
        this.price = price;
        this.bonus = bonus;
    }

    static ELEMENT = 'page-content__body__product-list__element';
    static ELEMENT_PICTURE = 'page-content__body__product-list__element__picture';
    static ELEMENT_TITLE = 'page-content__body__product-list__element__title';
    static ELEMENT_PRICE = 'page-content__body__product-list__element__price';
    static ELEMENT_BONUS = 'page-content__body__product-list__element__bonus';
}
