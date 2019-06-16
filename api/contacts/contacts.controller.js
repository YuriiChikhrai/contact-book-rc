const contactsService = require("./contacts.service");

exports.getContacts = async (req, res, next) => {
  try {
    res.json({ data: await contactsService.getContacts() });
  } catch (e) {
    next(e);
  }
};

exports.updateContactById = async (req, res, next) => {
  try {
    res.json({
      data: await contactsService.updateContact(req.params.id, req.body, req.user._id)
    });
  } catch (e) {
    next(e);
  }
};

exports.addContact = async (req, res, next) => {
  try {
    res.json({ data: await contactsService.addContact(req.body) });
  } catch (e) {
    next(e);
  }
};
