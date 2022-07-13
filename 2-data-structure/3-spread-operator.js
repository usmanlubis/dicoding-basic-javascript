let names = ["usman", "lubis", "john", "doe"];
console.log(names[0], names[1], names[2], names[3]);
// instead of doing that, we can use spread operator
console.log(...names);

let food = ['rice', 'meat', 'nugget'];
let drink = ['coffee', 'milk', 'tea', 'soda'];

let all = [...food, ...drink];
console.table(all);

// spread operator in object
const obj1 = {firstName: "Usman", age: 23}
const obj2 = {lastName: "Lubis", gender: "Male"}
const newObj = {...obj1, ...obj2};
console.table(newObj);