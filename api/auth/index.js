const { Router } = require("express");
const router = Router();
const { validate, authorizeUser } = require("../middlewares");
const { auth } = require("./auth.validation");
const ctrl = require("./auth.controller");
const passport = require("passport");

router.post(
  "/",
  validate(auth),
  passport.authenticate("local", {}),
  ctrl.authUser
);

router.get("/check", authorizeUser, ctrl.checkAuth);

router.get("/logout", authorizeUser, ctrl.logOutUser);

module.exports = router;
