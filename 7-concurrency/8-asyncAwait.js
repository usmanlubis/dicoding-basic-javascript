// async await bisa digunakan jika ada promise

const getCoffee = () => {
  return new Promise((resolve, reject) => {
      const seeds = 50;
      setTimeout(() => {
          if (seeds >= 10) {
              resolve("Kopi didapatkan!");
          } else {
              reject("Biji kopi habis!");
          }
      }, 1000);
  });
};

// if we using promise :
// const makeCoffee = () => {
//   getCoffee()
//     .then((param) => {
//       console.log(param);
//     });
// };

// if we use async await
// async function makeCoffee() {
//   const coffee = await getCoffee();
//   console.log(coffee);
// }

// async await using arrow function
// makeCoffee = async () => {
//   const coffee = await getCoffee();
//   console.log(coffee);
// }

// remember that asyns await only return when promise is fulfilled, so we must use try amd catch
makeCoffee = async () => {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectReason){
    console.log(rejectReason);
  }
}

makeCoffee();


// using async await for promiseAll
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
        resolve(console.log("Mesin kopi bisa dipakai, lanjut memeriksa stok"));
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

const boilWater = () => {
  console.log("Memanaskan air");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Air sudah panas"));
    }, 200);
  });
};

const grindCoffeeBeans = () => {
  console.log("Mulai menggiling biji kopi");
  return new Promise((resolve, reject) => {
    resolve(console.log("Biji kopi sudah selesai digiling"));
  }, 1500);
};

const brewCoffee = () => {
  console.log("Kopi sedang dibuat")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi selesai dibuat");
      // state.isMachineBusy = false;
    }, 3000);
  });
};


makeEspresso = async () => {
  try{ // with different approach to return the result
    await checkAvailability();
    // await checkStock();
    console.log(await checkStock());
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectReason){
    console.log(rejectReason);
  }
};

makeEspresso();