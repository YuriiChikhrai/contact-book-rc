const { Router } = require("express");
const router = Router();
const ctrl = require("./categories.controller");
const val = require("./categories.validation");
const { validate } = require("../middlewares");

/**
 * @api {get} /api/categories/[?page=:number] Возвращает список категорий
 * @apiName getCategories
 * @apiGroup Categories
 * @apiVersion 0.0.2
 *
 * @apiParam {Number{1-99}} page=1 Номер страницы для пагирации
 * @apiParamExample {json} Request-Example:
 *     {
 *       "page": 2
 *     }
 */
router.get('/', validate(val.getList), ctrl.getCategories);

router.post('/', validate(val.addCategory), ctrl.addCategory);

module.exports = router;
