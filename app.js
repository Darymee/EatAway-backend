const express = require("express");
const cors = require("cors");

const postsRouter = require("./routes/api/posts");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({ message: error.message });
  }
  return res
    .status(500)
    .json({ message: "Something went wrong, please try again later..." });
});

module.exports = app;
