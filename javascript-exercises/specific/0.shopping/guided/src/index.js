// class Goods {
//     constructor(id, title, price, img) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.img = img;
//         this.imgAlt = title;
//     }
// }

// const items = [
//     new Goods('item1', 'Pixel 7 8/128 LEMONGRASS', 51000, './IMG/PIXEL 7 8_128 lemongrass.png'),
//     new Goods('item2', 'PIXEL 7 8/128 SNOW', 50500, './IMG/PIXEL 7 8_128 Snow.png'),
//     new Goods('item3', 'Pixel 6 Pro 12/128Gb Sorta Sunny', 50900, './IMG/Pixel 6 Pro 12_128Gb Sorta Sunny.png'),
//     new Goods('item4', 'Pixel 7 Pro 12/256Gb HAZEL', 99990, './IMG/Pixel 7 Pro 12_256Gb Hazel.png'),
//     new Goods('item5', 'Pixel 3A 64Gb BLACK', 20400, './IMG/Pixel 3A 64Gb Black.png'),
//     new Goods('item6', 'Pixel 6A 6/128Gb SAGE', 33990, './IMG/Pixel 6A 6_128Gb Sage.png'),
//     new Goods('item7', 'Pixel 7 8/256Gb OBSIDIAN', 63900, './IMG/Pixel 7 8_256Gb Obsidian.png'),
//     new Goods('item8', 'Google Chromecast HD c Google TV', 5890, './IMG/Google Chromecast HD c Google TV.png' ),
//     new Goods('item9', 'Xiaomi Mi Band 7', 3440, './IMG/Xiaomi Mi Band 7.png' ),
//     new Goods('item10', 'Xiaomi Mi TV Stick 4K HDR Global', 4380, './IMG/Xiaomi Mi TV Stick 4K HDR Global (MDZ-27-AA).png' ),
// ];

const btns = document.querySelectorAll('.btn');
const cartElementRef = document.querySelector('.cart__total');
const cartPriceElementRef = document.querySelector('.cart__price');
const cart = [];

btns.forEach(function (button) {
    button.dataset.added = 'false';

    button.addEventListener('click' , function () {
        // console.log(this.dataset.productId);
        // console.log(button.dataset.productId);
        // button.classList.add('btn--primary');

        const id = this.dataset.productId;

        if(!this.classList.contains('btn--primary')){
            this.textContent = 'Remove from cart';

            // const price = +this.closest('.product')?.querySelector('.product__price')?.textContent;
            // const title = this.closest('.product')?.querySelector('.product__title')?.textContent;
            // const item = {
            //     id,
            //     title,
            //     price,
            // };

            // cart.push(item);

            AddProduct.call(this, id);

        } else {
            this.textContent = 'Add to cart';

            RemoveProduct.call(this, id);

            // const checkItemIndex = cart.findIndex((item) => item.id === id)

            // if(checkItemIndex !== -1){
            //     cart.splice(checkItemIndex , 1);
            // }
        }

        this.classList.toggle('btn--primary');


        // if(cartElementRef) {
        //     cartElementRef.textContent = cart.length;
        // }

        // if(cartPriceElementRef) {
        //     const total = cart.reduce((acc , current) => {
        //         return acc + current.price;
        //     } , 0);

        //     cartPriceElementRef.textContent = total.toFixed(2);
        // }
       
        SetCartTotal();

        // console.log(this.parentElement?.previousElementSibling?.querySelector('.product__price')?.textContent);
        // console.log(+this.closest('.product')?.querySelector('.product__price')?.textContent);
        // console.log(this.closest('.product')?.querySelector('.product__title')?.textContent);
        
        // if( this.dataset.added === 'false' ) {
        //     this.textContent = 'Remove from cart';
        //     this.dataset.added = 'true';
        // } else {
        //     this.textContent = 'Add to cart';
        //     this.dataset.added = 'false';
        // }
        
        // this.classList.toggle('btn--primary');
    });
});

function AddProduct(id) {
    const price = +this.closest('.product')?.querySelector('.product__price')?.textContent;
    const title = this.closest('.product')?.querySelector('.product__title')?.textContent;
    const checkItem= cart.find((item) => item.id === id);

    const item = {
        id,
        title,
        price,
        amount: !checkItem ? 1 : checkItem.amount + 1
    };

    cart.push(item);
}

function RemoveProduct(id) {
    this.textContent = 'Add to cart';

    const checkItemIndex = cart.findIndex((item) => item.id === id);

    if(checkItemIndex !== -1){
        cart.splice(checkItemIndex , 1);
    }
}

function SetCartTotal() {
    if(cartElementRef) {
        cartElementRef.textContent = cart.length;
    }

    if(cartPriceElementRef) {
        const total = cart.reduce((acc , current) => {
            // return acc + current.price;
            return acc + current.price * current.amount;
        } , 0);

        cartPriceElementRef.textContent = total.toFixed(2);
    }
}