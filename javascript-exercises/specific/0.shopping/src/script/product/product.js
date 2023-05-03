export class Product {
    constructor(imgRelPath, title, price, bonus) {
        this.imgRelPath = imgRelPath;
        this.title = title;
        this.price = price;
        this.bonus = bonus;
    }

    set imgRelPath(path) {
        this.imgRelPath = path;
    }

    get imgRelPath() {
        return this.imgRelPath;
    }

    get title() {
        return this.title;
    }

    get price() {
        return this.price;
    }

    get bonus() {
        return this.bonus;
    }
}
