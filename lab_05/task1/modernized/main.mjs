import { Product, Cart } from './core.mjs';
import { formatPrice } from './utils.mjs';

const init = () => {
    const cart = new Cart();
    const p1 = new Product(1, "Modern Widget", 10.99);
    
    cart.addItem(p1, 2);
    
    console.log(`Total: ${formatPrice(cart.getTotal())}`);
};

init();