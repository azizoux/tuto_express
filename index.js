const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bonjour Aziz");
});

app.get("/cnps", (req, res) => {
  res.send("Bonjour CNPS");
});
app.listen(3000, () => {
  console.log("Le server est demarré sur le port 3000");
});
