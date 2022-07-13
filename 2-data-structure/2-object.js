const user = {
  firstName: "Usman",
  lastName: "Lubis",
  age: 23,
  isMarried: false,
}

console.log(typeof(user));
console.table(user);

// show data by properties
console.log(user.firstName);
// or
console.log(user["firstName"]);

// change data
user.firstName = "John";
console.table(user);
user["firstName"] = "Usman";
console.table(user);

// add data
user.fullName = "Usman Lubis";
console.table(user);

// delete data
delete user.age;
console.table(user);