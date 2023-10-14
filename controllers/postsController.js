const { log } = require("console");
const { Posts } = require("../models/posts.js");

async function getPosts(req, res, next) {
  const posts = await Posts.find().sort({ createdAt: 1 });

  return res.status(200).json(posts);
}

module.exports = {
  getPosts,
};

async function createPost(req, res, next) {
  console.log(req);

  const {
    username,
    avatarUrl,
    email,
    title,
    city,
    location,
    time,
    price,
    img,
    description,
    tag,
  } = req.body;

  const newPost = await Posts.create({
    username,
    avatarUrl,
    email,
    city,
    title,
    location,
    time,
    price,
    img,
    description,
    tag,
  });
  return res.status(201).json(newPost);
}

module.exports = {
  getPosts,
  createPost,
};
