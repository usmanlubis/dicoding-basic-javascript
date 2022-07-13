// callback function
orderCoffee = callback => {
  let coffee = null;
  console.log("Kopi sedang dibuat");
  setTimeout(() =>{
    coffee = 'Kopi anda sudah jadi';
    callback(coffee);
  }, 3000)
}

printMsg = param => console.log(param);

orderCoffee();