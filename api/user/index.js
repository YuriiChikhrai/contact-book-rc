const { Router } = require("express");
const router = Router();
const ctrl = require("./user.controller");
const val = require("./user.validation");
const { validate, authorizeUser } = require("../middlewares");

router.get("/all", ctrl.getAllUsers);

router.post("/register", validate(val.register), ctrl.registerNewUser);

/**
 * @api {get} /api/users/profile Возвращает профиль пользователя
 * @apiName getProfile
 * @apiGroup Users
 */
router.get("/profile", authorizeUser, ctrl.getProfile);

/**
 * @api {put} /api/users/profile Обновить профиль пользователя
 * @apiName updateProfile
 * @apiGroup Users
 *
 * @apiParam {String} email Email пользователя
 * @apiParam {String} name Имя пользователя
 * @apiParam {String} surname Фамилия пользователя
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *      "email": "test@test.com",
 *      "name": "Test",
 *      "surname": "Test"
 *  }
 * @apiParamExample {json} Request-Example 2:
 *  {
 *      "email": "test2@test.com",
 *      "name": "Test2",
 *      "surname": "Test2"
 *  }
 *
 * @apiSuccess {Boolean} error Успешность ответа
 *
 * @apiSuccessExample {json} Response:
 *  {
 *      "email": "test@test.com",
 *      "name": "Test",
 *      "surname": "Test"
 *  }
 */
router.put(
  "/profile",
  authorizeUser,
  validate(val.updateProfile),
  ctrl.updateProfile
);

module.exports = router;
