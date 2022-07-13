const executorFunction = (resolve, reject) => {
  const isCofeeReady = true;
  if (isCofeeReady){
    resolve("Kopi tersedia");
  } else {
    reject("Kopi sudah habis");
  }
}

const coffeePromise = () => {
  return new Promise(executorFunction);
}

const orderCoffee = coffeePromise();
console.log(orderCoffee);