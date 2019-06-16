const CategoriesModel = require("./categories.model");

exports.getCategories = (page, user) => {
  return CategoriesModel.getCategories(page, user);
};

exports.addCategory = (data, user) => {
  // Если добавлем от пользователя с ролью администратор - user = undefined
  return CategoriesModel.addCategory(data, user);
};
