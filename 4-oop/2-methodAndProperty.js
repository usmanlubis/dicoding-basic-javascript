class Mail{
  constructor() {
    this.from = "usmanlubis11@gmail.com"
    this.nextProperty;
    this.otherProperty;
  }

  sendMessage = function(msg, to){
    console.log(`${this.from} has send ${msg} to ${to}`);
    this.nextProperty = to;
    this.otherProperty = msg;
  }
}

const mail1 = new Mail();
mail1.sendMessage("Hello", "example@example.com");
console.table(mail1);

// private property
class NewMail{
  constructor() {
    this._contact;
  }

  setContact = function(contact){
    this._contact = contact;
  }
}

const mail3 = new NewMail();
mail3.setContact("usmanlubis11@gmail.com")
console.table(mail3)

// method is function inside class
// we can access static method witout intsantiate
class CreateMail{
  static isValidNumber(number){
    console.log(typeof(number) === "number");
  }
}
CreateMail.isValidNumber(98662); // true

// constructor
// with class
class SayName{
  constructor(name){
  this.name = name;
  console.log(`Hello ${name}`);
  }
}
const name1 = new SayName("Usman"); // Hello Usman

// with function
function Intro(name){
  this.name = name;
  console.log(`Hello ${name}`);
}
Intro("John"); // Hello John