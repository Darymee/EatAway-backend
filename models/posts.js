const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "User name is required"],
  },
  avatarUrl: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  location: {
    type: String,
    required: [true],
  },
  time: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
    required: [true],
  },
  img: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  tag: {
    type: String,
    enum: ["food", "drinks", "snacks"],
    required: [true],
  },
});

const Posts = mongoose.model("posts", schema);

module.exports = {
  Posts,
};
