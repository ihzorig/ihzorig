const router = require("express").Router();
const { createCompany } = require("../api/controller/company");

router.route("/").post(createCompany);

module.exports = router;
