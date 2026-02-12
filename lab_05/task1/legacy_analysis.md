# Legacy Code Analysis

1.  **Variables**: Uses `var` for everything (`taxRate`, `currency`, `total`), which causes scope leaking. Needs `const` or `let`.
2.  **Global Scope**: All variables and functions are in the global scope, leading to "namespace pollution".
3.  **Classes**: Uses older "Constructor Functions" (`function Product(...)`) and Prototypes (`Cart.prototype...`) instead of modern `class` syntax.
4.  **Encapsulation**: No private fields. Properties like `items` in the Cart are directly accessible from outside.
5.  **Functions**: Uses verbose function syntax instead of arrow functions.
6.  **Strings**: Uses string concatenation (`+`) instead of Template Literals (`${}`).
7.  **Modules**: No module system used; everything is in one file.