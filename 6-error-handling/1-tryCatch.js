// catch will execute if there's error in try block
// try {
//   console.log("No Error! Successfully run")
// } catch (error){
//   console.log("Code Error!");
// }

// try {
//   errorCode;
// } catch (error){
//   console.log(`Code Error!`);
// }

// try {
//   errorcode;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// finally will execute no matter it's error or not
// try {
//   console.log("No Error! Successfully run")
// } catch (error){
//   console.log("Code Error!");
// } finally {
//   console.log("This is finally")
// }

try {
  errorcode;
} catch (error){
  console.log("Code Error!");
} finally {
  console.log("Finally will execute even code is error");
}

