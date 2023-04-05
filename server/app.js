require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/db");
const people = require("./api/people");

const app = express();
const database = process.env.MONGODB_DATABASE;
const url = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/api/people", people);


// Connect Database
mongoDB.connect(url, database, () => {
  app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`);
  });
});
