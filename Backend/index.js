const express = require("express");
const { connection } = require("./Config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 7500;

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected to DB Success on port ${port}`);
  } catch (err) {
    console.log(err);
    console.log("Failed To Connect To DB");
  }
});
