const router = require("express").Router();

const { login, regester } = require("../controller/users");

router.route("/regester").post(regester);

router.route("/").post(login);

module.exports = router;
