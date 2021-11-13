const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog");

/* GET home page. */
router.get("/", blogController.topPage);

module.exports = router;
