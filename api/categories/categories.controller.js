const categoriesService = require('./categories.service');

exports.getCategories = async (req, res, next) => {
    try {
        res.json({ data: await categoriesService.getCategories(req.query.page, req.user._id) });
    } catch (e) {
        next(e);
    }
};

exports.addCategory = async (req, res, next) => {
    try {
        res.json({ data: await categoriesService.addCategory(req.body, req.user._id) });
    } catch (e) {
        next(e);
    }
};
