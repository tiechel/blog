const Post = require("../db/models/Post");

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
module.exports.topPage = async (req, res, next) => {
  try {
    const posts = await Post.findAll({ limit: 10 });

    return res.render("page/blog/top", {
      title: "",
      posts,
    });
  } catch (e) {
    return next(e);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400);
    }
    const post = await Post.findOne({ where: { id: id } });
    if (!post) {
      return res.status(400);
    }
    return res.render("page/blog/detail", {
      title: "記事",
      post,
    });
  } catch (e) {
    return next(e);
  }
};
