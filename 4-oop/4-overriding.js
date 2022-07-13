// overriding constructor
class Profile{
  constructor(id){
    this.id = id;
  }
}

class User extends Profile{
  constructor(id, name, age){
    super(id);
    this.name = name;
    this.age = age;
  }
}

const john = new User(1, "John", 30);
console.table(john);

// overriding method
class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail{
  constructor(username, isBussinessAccount, phoneNumber) {
    super(phoneNumber);
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
  }

  sendMessage(msg, to) {
    super.sendMessage(msg, to)
    console.log('Send by WA');
  }
}

const wa1 = new WhatsApp('di', true, '089000999888');
wa1.sendMessage('halo', '089000999888');