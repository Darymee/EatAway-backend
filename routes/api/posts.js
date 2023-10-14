const express = require("express");
const router = express.Router();

const { tryCatchWrapper, validationCheck } = require("../../middlewares/index");
const { getPosts, createPost } = require("../../controllers/postsController");
const { newPostValidation } = require("../../schemas/post");

router.get("/", tryCatchWrapper(getPosts));

router.post(
  "/",
  validationCheck(newPostValidation),
  tryCatchWrapper(createPost)
);

module.exports = router;
