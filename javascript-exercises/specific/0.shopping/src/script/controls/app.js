import { ProductInserter } from '../service/productInserter.js';

export class App {
    constructor() {}

    run() {
        let ins = new ProductInserter();
        ins.insertAll();
    }
}
