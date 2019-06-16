const UserModel = require("./user.model");

exports.createUser = userData => {
  return UserModel.saveUser(userData);
};

exports.getListOfUsers = () => {
  return UserModel.getAllUsers();
};
