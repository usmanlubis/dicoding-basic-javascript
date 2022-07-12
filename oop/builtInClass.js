// there are many built in class we can use. for example we will use Date bult in class
const now = new Date();
console.log(now);

// print age by entering birth date
const myAge = birthtime => {
  const birthday = new Date(birthtime);
  const today = Date.now(); // get milisecond current time

  const diff_ms = today - birthday.getTime(); // different between today and birthday in milisecond
  const diff_date = new Date(diff_ms);

  const age = diff_date.getFullYear() - 1970;
  return `Your are ${age} years old`
}


// console.log(myAge('1999-06-13'));
// or
const myBirthday = new Date('1999-06-13').getTime();
console.log(myAge(myBirthday))

// you can try other built in method in date class