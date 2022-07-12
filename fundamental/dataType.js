// undefined
// when we declare variable without value, than the value became undefined
let name;
console.log(name);
console.log(typeof(name));

name = undefined;
console.log(name);
console.log(typeof(name));

// number
let x = 20;
let y = 13.6;
console.log(typeof(x)); // number
console.log(typeof(y)); // number
// increment
console.log(++x); // 21
// decrement
console.log(--y); // 12.6

// string
// string must wrap by singe quote or double quote
let stringText1 = "This is string with double quote";
let stringText2 = 'This is string with single quote';
console.log(stringText1);
console.log(typeof(stringText1));
console.log(stringText2);
console.log(typeof(stringText2));
// string template
let myName = "Usman Lubis";
console.log(`Hello! my name is ${myName}`);

// boolean
let correct = true;
let incorrect = false;
console.log(correct); // true
console.log(typeof(correct)); // boolean
console.log(incorrect); // false
console.log(typeof(incorrect)); // boolean

// null
let instance = null;
console.log(instance);
console.log(typeof(instance));

// symbol
let id = Symbol("id");
console.log(id); // Symbol(id)
console.log(typeof(id)); // symbol