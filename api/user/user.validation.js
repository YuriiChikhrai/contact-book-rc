const Joi = require("joi");

exports.register = {
  body: {
    email: Joi.string()
      .trim()
      .email()
      .max(512)
      .required(),
    password: Joi.string()
      .trim()
      // .regex()
      .min(6)
      .max(512)
      .required()
  }
};

exports.updateProfile = {
  body: {
    // TODO:
  }
};
