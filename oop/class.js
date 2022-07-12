// make class with function
// withuot prototype
function mail(){
  this.from = "usmanlubis11@gmail.com";
  this.sendMessage = function(msg, to){
    console.log(`${this.from} has send ${msg} to ${to}`);
  }
}

const mail1 = new mail();
mail1.sendMessage("Hello buddy", "johndoe@gmail.com");


// with prototype
function SendMail(){
  this.from = "usmanlubis11@gmail.com";
  
}

SendMail.prototype.sendMessage = function(msg, to){
  console.log(`${this.from} has send ${msg} to ${to}`);
}

const mail2 = new SendMail();
mail2.sendMessage("Hello bro", "budi@gmail.com")
// prefer using prototype


// with class syntax
class CreateMail{
  constructor() {
    this.from = "usmanlubis11@gmail.com";
  }

  sendMessage = function(msg, to){
    console.log(`${this.from} has send ${msg} to ${to}`);
  }
}

const mail3 = new CreateMail();
mail3.sendMessage("Good Morning", "user@example.com");
// class syntax basiclally is prototype but its more simple