const { Router } = require("express");
const router = Router();
const ctrl = require("./contacts.controller");
const val = require("./contacts.validation");
const { validate } = require("../middlewares");

router.get('/', ctrl.getContacts);

// TODO: add validation
router.post('/', ctrl.addContact);
router.put('/:id', ctrl.updateContactById);

module.exports = router;
