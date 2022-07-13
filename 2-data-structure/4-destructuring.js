// destructuring object
const profile = {
  firstName: "Usman",
  lastName: "Lubis",
  age: 23
}

const {firstName, lastName, age} = profile;
// or we ca use assignment destructuring
// let firstName;
// let lastName;
// let age;
// ({firstName, lastName, age} = profile)
console.log(`Hello! my name is ${firstName} ${lastName}, I am ${age} years old`);

// default value destructuring
const user1 = {
  name: "John",
  isMale: true
}
const {name, isMale, job = "Developer"} = user1;
console.log(job);

// assigning to different local variable names
const user2 = {
  fullName: "Usman Lubis",
  age: 23
}
const {fullName: namaLengkap, age: usia} = user2;
console.log(`Hello! my name is ${namaLengkap}, I am ${usia} years old`);




// destructuring array
let foods = ['meat', 'breed', 'nugget', 'rice'];
const [food1, food2, food3, food4] = foods;
console.log(food1);
console.log(food2);
console.log(food3);
console.log(food4);

let drinks = ['milk', 'coffee', 'tea', 'lemon'];
const [,,drink3] = drinks;
console.log(drink3);

let animals = ['horse', 'cow', 'hen', 'cat', 'dog', 'bird'];
const [animal1, animal2, ...restAnimals] = animals;
console.log(restAnimals);

// we can also use default value feature in destructuring array