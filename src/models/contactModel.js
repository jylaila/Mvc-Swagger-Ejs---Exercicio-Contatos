module.exports = class ContactModel {
  contacts = [];

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  Save(name, email) {
    let contact = new ContactModel(name, email);
    this.contacts.push(contact);
  }

  GetAll() {
    return this.contacts;
  }

  Delete(email) {
    const index = this.contacts.findIndex((x) => x.email == email);
    this.contacts.splice(index, 1);
  }

  Count() {
    return this.contacts.lenght;
  }
};
