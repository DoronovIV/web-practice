import {
  AddProduct,
  CheckProduct,
  CheckQuantityValue,
  RemoveProduct,
  SetCartTotal,
  setLocalStorageProductList,
  checkLocalStorageProduct,
  getSessionStorageProductList,
  setSessionStorageProductList,
  cart,
} from './functions';
import Product from './product';
import './index.css';

export let products = null;

export const productsKey = 'products';
// setLocalStorageProductList([]);
// setSessionStorageProductList([]);

const loader = document.querySelector('.loader');
loader.classList.add('loader--enabled');
loader.classList.remove('loader--disabled');

let list = getSessionStorageProductList();
for (let prod of list) {
  let productMarkup = GetProductElement(prod);
  let id = productMarkup.querySelector('.btn').dataset.productId;
  AddProduct.call(productMarkup.querySelector('.btn'), id);
}
SetCartTotal();

setTimeout(() => {
  products = [
    new Product('item1', 'Pixel 7 8/128 LEMONGRASS', 51000, './img/PIXEL 7 8_128 lemongrass.png'),
    new Product('item2', 'PIXEL 7 8/128 SNOW', 50500, './img/PIXEL 7 8_128 Snow.png'),
    new Product(
      'item3',
      'Pixel 6 Pro 12/128Gb Sorta Sunny',
      50900,
      './img/Pixel 6 Pro 12_128Gb Sorta Sunny.png',
    ),
    new Product(
      'item4',
      'Pixel 7 Pro 12/256Gb HAZEL',
      99990,
      './img/Pixel 7 Pro 12_256Gb Hazel.png',
    ),
    new Product('item5', 'Pixel 3A 64Gb BLACK', 20400, './img/Pixel 3A 64Gb Black.png'),
    new Product('item6', 'Pixel 6A 6/128Gb SAGE', 33990, './img/Pixel 6A 6_128Gb Sage.png'),
    new Product('item7', 'Pixel 7 8/256Gb OBSIDIAN', 63900, './img/Pixel 7 8_256Gb Obsidian.png'),
    new Product(
      'item8',
      'Google Chromecast HD c Google TV',
      5890,
      './img/Google Chromecast HD c Google TV.png',
    ),
    new Product('item9', 'Xiaomi Mi Band 7', 3440, './img/Xiaomi Mi Band 7.png'),
    new Product(
      'item10',
      'Xiaomi Mi TV Stick 4K HDR Global',
      4380,
      './img/Xiaomi Mi TV Stick 4K HDR Global (MDZ-27-AA).png',
    ),
  ];

  InitProducts(products);

  loader.classList.remove('loader--enabled');
  loader.classList.add('loader--disabled');
}, 5000);

/**
 *
 * @param {Product[]} products
 * @returns {void}
 */
function InitProducts(products) {
  const productsContainer = document.querySelector('.products');

  if (!productsContainer) {
    alert('Error !');
    return;
  }

  products.forEach((product) => {
    const productElement = GetProductElement(product);

    let exists = checkLocalStorageProduct(product);

    if (exists) {
      productsContainer.appendChild(GetProductElement(exists));
    } else {
      productsContainer.appendChild(productElement);
    }
  });
}

/**
 *
 * @param {Product} product
 * @returns {HTMLDivElement}
 */
function GetProductElement(product) {
  const { id, price, img, imgAlt, title, quantity } = product;

  const productContainer = document.createElement('div');
  productContainer.classList.add('product');

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product__title');
  productTitle.textContent = title;

  const productBody = document.createElement('div');
  const productImageWrapper = document.createElement('div');
  const productImage = document.createElement('img');
  const productPrice = document.createElement('span');
  const productActions = document.createElement('div');
  const productAddToCartButton = document.createElement('button');
  const productQuantityInput = document.createElement('input');

  productAddToCartButton.dataset.productId = id;
  productQuantityInput.value = quantity;

  productImage.classList.add('product__image');
  productImage.src = img;
  productImage.alt = imgAlt;

  productPrice.classList.add('product__price');
  productPrice.textContent = price;
  productBody.classList.add('product__body');
  productImageWrapper.classList.add('product__image-wrapper');
  productActions.classList.add('product__actions');

  productAddToCartButton.classList.add('btn');
  productAddToCartButton.textContent = 'Add to cart';
  if (cart.find((p) => p.id === product.id)) {
    productAddToCartButton.classList.add('btn--primary');
    productAddToCartButton.textContent = 'Remove from cart';
  }

  productQuantityInput.classList.add('quantity');

  productActions.appendChild(productAddToCartButton);
  productActions.appendChild(productQuantityInput);
  productImageWrapper.appendChild(productImage);
  productBody.appendChild(productImageWrapper);
  productBody.appendChild(productPrice);
  productContainer.appendChild(productTitle);
  productContainer.appendChild(productBody);
  productContainer.appendChild(productActions);

  productAddToCartButton.addEventListener('click', function () {
    if (!CheckProduct(id)) {
      this.textContent = 'Remove from cart';
      AddProduct.call(this, id);
    } else {
      this.textContent = 'Add to cart';
      RemoveProduct.call(this, id);
    }

    this.classList.toggle('btn--primary');

    SetCartTotal();
  });

  productQuantityInput.addEventListener('input', function () {
    const reg = /^\d+$/;

    if (!reg.test(this.value)) {
      this.value = this.value.replaceAll(/[^0-9]/g, '');
    }

    this.value = CheckQuantityValue(this.value);
  });

  return productContainer;
}
