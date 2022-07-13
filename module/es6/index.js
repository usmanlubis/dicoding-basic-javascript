// import with keyword "import" and "from"
import coffeeStock from "./state.js";

console.log(coffeeStock);

const displayStock = stock => {
  for (const type in stock){
    console.log(type);
  }
};

displayStock(coffeeStock);