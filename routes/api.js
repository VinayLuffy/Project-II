const express = require("express");
const { home, detect } = require("../controllers/controller");

const router = express.Router();

router.route("/").get(home);

router.route("/detect").post(detect);

module.exports = router;