import express from "express";
import "dotenv/config";

import { verify } from "./middleware/verifyEmail.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello word",
    toDay: new Date().toLocaleString("fr"),
    auteur: process.env.AUTEUR,
  });
});

app.post("/register", verify, (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: "Data received...", data });
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT + " ...");
});
