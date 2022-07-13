// catch will execute if promise rejected
const stock = {
  coffeeBeans: 250,
  water: 100,
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

checkStock()
  .then(successHandling)
  .catch(failureHandling);