export class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        return this.items;
    }
    calculateTotal() {
        return this.items.reduce((total, item) => {
            return total + item.getPrice();
        }, 0);
    }
}
export class CartItem {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    getPrice() {
        return this.price;
    }
}
