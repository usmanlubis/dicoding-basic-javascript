intro = () => {
  let name = "Usman Lubis";
  getIntro = () => {
    console.log(`Hello ${name}`);
  }
  
  getIntro();
}
intro(); // Hello Usman Lubis

add = () => {
  let counter = 0;
  return () => {
    ++counter;
  }
}
let addCounter = add();
console.log(addCounter()); // 1
console.log(addCounter()); // 2
console.log(addCounter()); // 3
console.log(addCounter()); // 4
console.log(addCounter()); // 5