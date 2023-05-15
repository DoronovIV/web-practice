export class Toolbox {
    constructor() {}

    _createElementOfClass(elementName, className) {
        let res = document.createElement(elementName);
        res.className = className ?? null;
        return res;
    }

    createImg(className, src) {
        let res = this._createElementOfClass('img', className);
        res.src = src;
        return res;
    }

    createDiv(className) {
        let res = this._createElementOfClass('div', className);
        return res;
    }

    createParagraph(className, innerText) {
        let res = this._createElementOfClass('p', className);
        res.innerText = innerText;
        return res;
    }
}
