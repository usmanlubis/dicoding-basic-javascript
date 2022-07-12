// array can store multiple data with different data type
let arr1 = ["Usman", 23, null, undefined, true];
console.log(typeof(arr1)); // object
console.table(arr1);
console.log(arr1[0]) // Usman
console.log(arr1.length); // 5

// we can nested array
let arr2 = [["John", "Doe"], [30, 33], [true, false]];
console.table(arr2);
console.log(arr2[0][1]); // Doe

// push, pop, unshift, shift, delete, splice
let fruits = ['apple', 'orange', 'melon', 'date', 'coconut'];
// push to add array on last index
fruits.push('papaya');
console.table(fruits);

// pop to remove on last index
fruits.pop();
console.table(fruits);

// unshift to add on first index
fruits.unshift('watermelon');
console.table(fruits);

// shift to remove on first index
fruits.shift();
console.table(fruits);

fruits = ['apple', 'orange', 'melon', 'date', 'coconut'];
console.table(fruits);
// delete to remove by index
delete fruits[2]; // melon will deleted
console.table(fruits); // melon became undefined
console.log(fruits[2]);

// instead of using delete, better using splice so
fruits.splice(2, 1); // we will delete 1 data start from index 2
console.table(fruits);