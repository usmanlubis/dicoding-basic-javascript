// arithmetic operator
console.log(2 + 3); // 5
console.log(3 - 1); // 2
console.log(2 * 3); // 6
console.log(10 / 5); // 2
console.log(10 % 3); // 1 (remining 10/3)
console.log(3 ** 3); // 27 (power)

// assignment operator
let a = 5;
let b = 3;

a += 20; // a = a + 20
console.log(a); // 25

b -= 10 // b = b - 10
console.log(b); // -7
// work with other arithmetic operator

// comparison operator (will return true or false)
let c = 30;
let d = 30;
let e = 20;
let f = "20";

// < less than
console.log(c < e); // false
console.log(e < c); // true

// > greater than
console.log(c > e); // true
console.log(e > c); // false

// <= less than or equal
console.log(e <= c); // true
console.log(c <= d); // true

// >= greater or equal
console.log(c >= e); // true
console.log(c >= d); // true

// == equal
console.log(c == d) // true
console.log(e == f) // true

// === equal strict
console.log(c === d) // true
console.log(e === f) // false because different data type

// != not equal
console.log(c != d) // false
console.log(e != f) // false
console.log(c != e) // true

// !== not equal strict
console.log(c !== d) // false
console.log(e !== f) // true

// logical operator (will return true or false)
let x = 10;
let y = 30;
let z = 30;

// && (and) true if both condition is true
console.log(x < y && y === z); // true because both is true
console.log(x > y && y === z); // false because one of them is false
console.log(x > y && y < z); // false because both is false

// || (or) true if atleast one of the condition is true
console.log(x < y || y === z); // true because both is true
console.log(x > y || y === z); // true because one of them is true
console.log(x > y || y < z); // false because both is false

// ! (not) will return the opposite
console.log(!true); // false
console.log(!false); // true