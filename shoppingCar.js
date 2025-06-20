let shoppingCar = [
    { product: "Camisa", price: 20000 },
    { product: "Pantalón", price: 40000 },
    { product: "Zapatos", price: 80000 }
  ];
  let total = 0;
  for (let item of shoppingCar) {
    total += item.price;
  }
  console.log(`Total: $${total}`);