const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog");

router.get("/post/:id", blogController.detail);

module.exports = router;
