const router = require("express").Router();
const { createOffice,getOffices } = require("../api/controller/offices");

router.route("/register").post(createOffice);
router.route("/").get(getOffices);

module.exports = router;
