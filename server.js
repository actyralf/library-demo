const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome from the library API" });
});

app.get("/books", (req, res) => {
  res.json({ message: "I am the books route" });
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
