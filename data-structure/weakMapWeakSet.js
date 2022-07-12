// weakmap is map variant that support garbage collection
// key must be an object or array

// if we use map
// let visitsCountMap = new Map(); // save list of user

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user,  count+ 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas);                // adding user "Jonas"

// jonas = null;                    // Data object "Jonas" removed

// // delay needed waiting for garbage collector work
// setTimeout(function() {
//   console.log(visitsCountMap);
// }, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

// use weakmap
let visitsCountMap = new WeakMap(); // saving list of user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user,  count+ 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // add user "Jonas"

jonas = null;                    // Data object "Jonas" removed

// delay needed waiting for garbage collertor work
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)

/* output
WeakMap { <items unknown> }
*/

// weak set is also have same concept like weakmap