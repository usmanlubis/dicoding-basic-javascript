// then will execute if promise fulfilled
const stock = {
  coffeeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 15 && stock.water >= 250){
      resolve("Kopi bisa dibuat");
    } else {
      reject("Kopi tidak bisa dibuat");
    }
  });
};

const successHandling = resolvedValue => {
  console.log(resolvedValue);
};

const failureHandling = rejectionReason => {
  console.log(rejectionReason);
};

checkStock().then(successHandling, failureHandling);