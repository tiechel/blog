"use strict";

const models = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const posts = [
      {
        subject: "ブログを作ってみた",
        body: "一度に全部を作り込むと飽きるので、徐々に機能を増やしながら育てようと思います。\n初回はベースの作成とトップページのHTMLを表示するところまで作ったよ。",
        createdAt: new Date(2021, 9 - 1, 13),
      },
      {
        subject: "データベースを使う",
        body: "投稿した記事をデータベースに保存するようにしたよ。",
        createdAt: new Date(2021, 9 - 1, 25),
      },
    ];
    await queryInterface.sequelize.transaction(async (transaction) => {
      for (const post of posts) {
        const p = await models.Post.create(post, { transaction });
        p.createdAt = post.createdAt;
        await p.save({ transaction });
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await models.Post.destroy({ where: {} });
  },
};
