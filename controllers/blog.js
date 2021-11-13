const Post = require("../db/models/Post");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
module.exports.topPage = async (req, res, next) => {
  try {
    const posts = await Post.findAll({ limit: 10 });

    return res.render("page/blog-top", {
      title: "",
      posts,
    });
  } catch (e) {
    return next(e);
  }
};
