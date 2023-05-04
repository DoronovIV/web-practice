import { Toolbox } from '../tools/toolbox.js';

export class ProductManager {
    constructor(productControlsDiv) {
        this._controls = productControlsDiv;
        this._toolbox = new Toolbox();
    }
}
