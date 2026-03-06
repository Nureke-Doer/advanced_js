const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

console.log(formatCurrency(1000));
console.log(formatCurrency(50.5, 'EUR'));