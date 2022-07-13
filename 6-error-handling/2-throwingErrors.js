// let json = '{ "name": "John", "age": 30 }';

// try {
//   let user = JSON.parse(json); // parsing from var json string into object

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// output will not error

// if json are wrong
// let json = '{bad json}';

// try {
//   let user = JSON.parse(json); // parsing from var json strignginto object

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

/* output
SyntaxError
Unexpected token b in JSON at position 1
*/
// cannot parsing json because wrong format, but if
// let json = '{"age": 30}';

// try {
//   let user = JSON.parse(json); // parsing from var json string into object

//   console.log(user.name); // undefined
//   console.log(user.age); // 30
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }
// output will not error
// we want that code show error
  // let json = '{"age": 30}';

  // try {
  //   let user = JSON.parse(json); // parsing from var json string into object

  //   if (!user.name){
  //     throw new SyntaxError("'name' is required")
  //   }

  //   console.log(user.name); // undefined
  //   console.log(user.age); // 30
  // } catch (error) {
  //   console.log(`JSON Error: ${error.message}`);
  // }
// output = JSON Error: 'name' is required

// how if we get other problem? use if statement and use insatceOf to get error type
// for example we have undefined variable
// let json = '{ "name": "John", "age": 30 }';

let json = '{ "name": "John", "age": 30 }';


try {
  let user = JSON.parse(json); // parsing from var json string into object

  if (!user.name){
    throw new SyntaxError(`'name' is required`);
  } else if (!user.age){
    throw new SyntaxError(`'age' is required`);
  }

  console.log(user.name);
  errorcode;
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError){
    console.log(`JSON Error : ${error.message}`);
  } else if (error instanceof ReferenceError){
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}