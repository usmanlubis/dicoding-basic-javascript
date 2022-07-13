const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isMachineBusy){
        resolve("Mesin kopi bisa dipakai, lanjut memeriksa stok");
      } else {
        reject("Mesin kopi sedang tidak bisa dipakai");
      }
    }, 1500);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 15 && state.stock.water >= 250){
        resolve("Stok tersedia, lanjut membuat kopi");
      } else {
        reject("Stok kurang, kopi tidak bisa dibuat");
      }
    }, 2000);
  });
};

const brewCoffee = () => {
  console.log("Kopi sedang dibuat")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi selesai dibuat");
    }, 3000);
  });
};


const makeEspresso = () => {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isMachineBusy = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isMachineBusy = false;
    });
};

makeEspresso();