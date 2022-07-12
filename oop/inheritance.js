class Mail{
  constructor(author){
    this.author = author;
  }

  sendMessage = function(msg, to){
    return `You send ${msg} to ${to}`;
  }
}

class WhatsApp extends Mail{
  constructor(author){
    super(author);
    this.isBusiness = true
  }

  getDescription = function(){
    console.log(`${this.author} is ${this.isBusiness ? "business" : "personal"} number`);
  }
}

const wa1 = new WhatsApp("Usman Lubis");
wa1.getDescription(); // Usman Lubis is business number
console.log(wa1.sendMessage("Hello", "0812")); // You send Hello to 0812