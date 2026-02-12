import { TAX_RATE } from './config.mjs';

export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Cart {
    #items;

    constructor() {
        this.#items = [];
    }

    addItem(product, quantity) {
        this.#items.push({ product, quantity });
    }

    getSubtotal() {
        // Using reduce and arrow function
        return this.#items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    getTax() {
        return this.getSubtotal() * TAX_RATE;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }
}