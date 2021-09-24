const express = require("express");
const router = express.Router();
const models = require("../../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  (async () => {
    const posts = await models.Post.findAll({ limit: 10 });

    return res.render("page/blog-top", {
      title: "",
      posts,
    });
  })().catch(next);
});

module.exports = router;
