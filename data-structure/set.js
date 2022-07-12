// set is a bunch of data. set is unarrange and unindexed, unique (no duplicated)
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet); // Set(3) {1, 4, 6} duplicated data will not be printed

// add data
numberSet.add(7);
numberSet.add(9);
// you cant add multiple data so you must add one by one and duplicated data will be ignored
console.log(numberSet);

// remove data
// remember that set doesnt have key or index, so you must insert the value
numberSet.delete(1);
console.log(numberSet); // Set(5) {2, 4, 6, 7, 9}