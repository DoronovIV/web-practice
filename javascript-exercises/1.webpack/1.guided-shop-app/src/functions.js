import { productsKey } from './index.js';

export const cart = [];

export function AddProduct(id) {
  const price = +this.closest('.product')?.querySelector('.product__price')?.textContent;
  const title = this.closest('.product')?.querySelector('.product__title')?.textContent;
  const img = this.closest('.product')?.querySelector('.product__image')?.src;
  const quantity = Number(this.nextElementSibling.value);

  const item = {
    id,
    title,
    price,
    img,
    quantity,
  };

  addProductToLocalStorage(item);
  addProductToSessionStorage(item);
  cart.push(item);
}

export function RemoveProduct(id) {
  this.textContent = 'Add to cart';

  const checkItemIndex = cart.findIndex((item) => item.id === id);

  if (checkItemIndex !== -1) {
    cart.splice(checkItemIndex, 1);
  }
}

export function SetCartTotal() {
  const cartElementRef = document.querySelector('.cart__total');
  const cartPriceElementRef = document.querySelector('.cart__price');

  if (cartElementRef) {
    cartElementRef.textContent = cart.length;
  }

  if (cartPriceElementRef) {
    const total = cart.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0);

    cartPriceElementRef.textContent = total.toFixed(2);
  }
}

export function CheckQuantityValue(value) {
  const parsedValue = Number(value);

  if (parsedValue < 1 || parsedValue > 100) {
    return 1;
  }

  return parsedValue;
}

export function CheckProduct(id) {
  const checkItem = cart.find((item) => {
    return item.id === id;
  });

  return !!checkItem;
}

export function getLocalStorageProductList() {
  return JSON.parse(localStorage.getItem(productsKey));
}

export function getSessionStorageProductList() {
  return JSON.parse(sessionStorage.getItem(productsKey));
}

export function setLocalStorageProductList(list) {
  localStorage.setItem(productsKey, JSON.stringify(list));
}

export function setSessionStorageProductList(list) {
  sessionStorage.setItem(productsKey, JSON.stringify(list));
}

export function checkLocalStorageProduct(product) {
  const list = getLocalStorageProductList();
  if (list.length > 0) {
    return list.find((p) => p.id === product.id);
  }
  return null;
}

export function checkSessionStorageProduct(product) {
  const list = getSessionStorageProductList();
  if (list.length > 0) {
    return list.find((p) => p.id === product.id);
  }
  return null;
}

export function addProductToLocalStorage(product) {
  let list = getLocalStorageProductList();

  let existingItem = checkLocalStorageProduct(product);

  if (existingItem) {
    existingItem = product;
  } else {
    list.push(product);
  }

  setLocalStorageProductList(list);
}

export function addProductToSessionStorage(product) {
  let list = getSessionStorageProductList();

  let existingItem = checkSessionStorageProduct(product);

  if (existingItem) {
    existingItem = product;
  } else {
    list.push(product);
  }

  setSessionStorageProductList(list);
}

export function fromMarkupToObject(productMarkup) {
  let id = productMarkup.querySelector('.btn').dataset.productId;
  return products.find((p) => p.id === id);
}
