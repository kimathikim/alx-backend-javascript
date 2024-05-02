const express = require("express");

const app = express();

const hostname = "localhost";
const port = 7865;

app.get("/", (req, res) => {
  res.send("Welcome to the payment system\n");
});

app.listen(port, () => {
  console.log(`API available on ${hostname} port ${port}/`);
});
