// [1] list of abstractions
const canSendMessage = self => ({
  sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
  isValid: () => console.log('valid phone', self.from)
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
// [3] attributes
const self = {
  from,
  message,
  store
};
// [4] method
const personalEnterpriseBehaviors = self => ({
  createCatalog: () => console.log('Catalog has created: ', self.store)
});

// [5] create object composition
return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('example@example.com', 'hello we have new product', 'Example Store');
pe1.createCatalog(); //Catalog has created:  Example Store
pe1.sendMessage(); //send message: heello we have new product