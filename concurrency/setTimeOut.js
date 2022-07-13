// setTimeOut use to represent asynchronous process
console.log("This will print first");
setTimeout(() =>{
  console.log("This will print last because we set time out 5 second"); 
}, 5000) // 5000 milisecond = 5 second
console.log("This will print second");