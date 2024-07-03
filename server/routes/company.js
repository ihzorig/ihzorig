const router = require("express").Router();
const { createCompany ,getCompanies} = require("../api/controller/company");

router.route("/register").post(createCompany);
router.route("/").get(getCompanies);

module.exports = router;
