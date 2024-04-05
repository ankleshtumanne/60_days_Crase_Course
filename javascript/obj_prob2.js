let shoppingCart = {
    data: [
      { name: "Rice", quantity: 2, price: 60 },
      { name: "Dal", quantity: 3, price: 50 },
      { name: "Salt", quantity: 1, price: 20 }
    ],
    total: function() {
      let totalPrice = 0;
      for (let item of this.data) {
        totalPrice += item.quantity * item.price;
      }
      return totalPrice;
    }
  };
  
  console.log(shoppingCart.total());