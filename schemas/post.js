const joi = require("joi");

const newPostValidation = joi.object({
  username: joi.string().min(3).required(),
  avatarUrl: joi.string().required(),
  email: joi.string().min(6).required(),
  title: joi.string().required(),
  location: joi.string().required(),
  time: joi.string().required(),
  price: joi.number().required(),
  img: joi.string().required(),
  description: joi.string().required(),
  tag: joi.string().required(),
});

module.exports = {
  newPostValidation,
};
