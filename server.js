const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

mongoose.set("strictQuery", false);

const { HOST_URI, PORT } = process.env;

(async function () {
  try {
    const connection = await mongoose.connect(HOST_URI);
    console.log("Database connection successful");
    return connection;
  } catch (error) {
    console.log("Error connecting to database", error.message);

    process.exit(1);
  }
})()
  .then(() => {
    app.listen(PORT || 4444, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
