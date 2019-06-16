const Joi = require("joi");

exports.getList = {
  query: {
    page: Joi.number()
      .positive()
      .integer()
      .max(999999)
      .default(1)
  }
};

exports.addCategory = {
  body: {
    name: Joi.string()
      .trim()
      .min(1)
      .max(500)
      .required()
  }
};
