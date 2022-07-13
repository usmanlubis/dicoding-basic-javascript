const coffeeStock = require('./state.js');

console.log(coffeeStock);

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log(coffeeStock[type]);
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}

makeCoffee("robusta", 80);