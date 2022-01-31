const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./route/routes");
const dotenv = require("dotenv");
dotenv.config();
const db = process.env.db_name;

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("db connect successful"))
  .catch((err) => console.log(err));

app.use("/", router);

app.listen(8080);
