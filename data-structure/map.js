// unlike object, in map we can use other data type for key
const map1 = new Map([
  ["first", "String key"],
  [1, "Number key"],
  [true, "Boolean key"]
])
console.table(map1);

// get size of map
console.log(map1.size); // 3
// get data by key
console.log(map1.get("first")); // String key
// set new key
map1.set("second", "this is second string");
// change value by key
map1.set("first", "this is first string");
console.table(map1)

// check is map has key
console.log(map1.has(1)); // true
console.log(map1.has(2)); // false
// remove value by key
map1.delete("first");
console.table(map1);