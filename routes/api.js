const express = require("express");
const { home, result } = require("../controllers/controller");

const router = express.Router();

router.route("/").get(home);

router.route("/result").post(result);

module.exports = router;