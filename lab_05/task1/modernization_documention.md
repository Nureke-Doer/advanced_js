# Modernization Documentation

1.  **Modules**: Split code into `config`, `utils`, `core`, and `main` using ES6 `import`/`export`.
2.  **Variables**: Replaced `var` with `const` for immutability.
3.  **Classes**: Converted `Product` and `Cart` constructors to `class` syntax.
4.  **Private Fields**: Implemented `#items` in `Cart` class to protect data.
5.  **Arrow Functions**: Used in `utils.mjs` and array methods (`reduce`).
6.  **Template Literals**: Used for string formatting in `formatPrice`.