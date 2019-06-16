const userServices = require("./user.service");

exports.registerNewUser = async (req, res, next) => {
  try {
    const result = await userServices.createUser(req.body);
    res.json({
      result
    });
  } catch (e) {
    next(e);
  }
};

exports.getProfile = (req, res, next) => {
  // TODO: get profile
  if (!req.user) {
    return res.status(401).json({ message: "unauthorized" });
  }
  res.json({ message: req.user });
};

exports.updateProfile = (req, res, next) => {
  // TODO: HOMEWORK
  // req.user._id
  next();
};

exports.getAllUsers = async (req, res, next) => {
  try {
    res.json({ data: await userServices.getListOfUsers() });
  } catch (e) {
    next(e);
  }
};
