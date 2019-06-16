const ContactsModel = require("./contacts.model");

exports.getContacts = () => {
  return ContactsModel.getContacts();
};

exports.updateContact = (id, data, initiator) => {
  return ContactsModel.updateContact(id, data, initiator);
};

exports.addContact = data => {
  return ContactsModel.addContact(data);
};
