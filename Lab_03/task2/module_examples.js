// 1. Basic IIFE
const basicModule = (() => {
  return {
    sayHello: () => "Hello!"
  };
})();

// 2. Private variables
const counterModule = (() => {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();

// 3. Modern ES6 Module equivalent
export const mathModule = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};