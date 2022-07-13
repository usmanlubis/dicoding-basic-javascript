function multiply(a, b){
  return a * b;
}

console.log(2, 3); // 6
console.log(4, 5); // 20

// rest parameter
function sum(...numbers){
  let total = 0;
  for (number of numbers){
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15
let numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 15

// default parameter
function myName(firstName = "Usman"){
  return `Hello ${firstName}`;
}
console.log(myName()); // Hello Usman

// object as parameter
const user = {
  fullName: "Usman Lubis",
  age: 23,
  job: "Developer"
}

function intro({fullName, age, job}){
  return `Hello my name is ${fullName}, I am ${age} and work as ${job}`;
}
console.log(intro(user)); // Hello my name is Usman Lubis, I am 23 and work as Developer