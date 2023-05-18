// export default class Product {
//     constructor(id, title, price, img) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.img = img;
//         this.imgAlt = title;
//     }
// }

export default class Product {
  constructor(id, title, price, img) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
    this.imgAlt = title;
    this.quantity = 1;
  }
}

// export { Product as CartProduct };
