"use strict";
class ShoppingCartOriginal {
    constructor() {
        this.items = [];
    }
    addItem(product, price) {
        const newItem = new CartItemOriginal(product, price);
        this.items.push(newItem);
    }
    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
}
class CartItemOriginal {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
}
