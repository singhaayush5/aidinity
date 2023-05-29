const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3005;
const dbConnection = require("./database/connect");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnection();


app.listen(PORT, () => {
  console.log(`App active on port ${PORT}!`);
});
