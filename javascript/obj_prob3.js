function calculateSalesTotals(sales) {
    return sales.map(item => {
      const salePrice = item.discount ? item.original * (1 - item.discount) : item.original;
      const total = salePrice * item.stock;
      
      return {
        ...item,
        sale: parseFloat(salePrice.toFixed(2)), // Round to 2 decimal places
        total: parseFloat(total.toFixed(2)) // Round to 2 decimal places
      };
    });
  }
  
  // Sample input
  var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  // Call the function
  const result = calculateSalesTotals(sales);
  console.log(result);
  