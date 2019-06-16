const { Router } = require("express");
const router = Router();
const ctrl = require("./categories.controller");
const val = require("./categories.validation");
const { validate } = require("../middlewares");

/**
 * @api {get} /api/categories/[?page=:number] Возвращает список категорий
 * @apiName getCategories
 * @apiGroup Categories
 *
 * @apiParam {Number{1-999999}} page=1 Номер страницы для пагирации
 */
router.get('/', validate(val.getList), ctrl.getCategories);

router.post('/', validate(val.addCategory), ctrl.addCategory);

module.exports = router;
