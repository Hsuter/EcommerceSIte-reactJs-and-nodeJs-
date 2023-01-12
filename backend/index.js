//imports

const express = require("express");
const cors = require("cors");
const products = require("./products");
const mongoose = require("mongoose");
const app = express();
const TokenRoute = require("./routes/token");
const register = require("./routes/register");
const login = require("./routes/login");

//config

require("dotenv").config();

//middlewares(use)

app.use(express.json());
app.use(cors());
app.use("/token", TokenRoute);
app.use(express.json());
app.use("/api/register", register);
app.use("/api/login", login);

//get request
app.get("/", (req, res) => {
  res.send("Welcome to our online shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/hoodies", (req, res) => {
  res.send(products.Hoodies);
});
app.get("/products/tshirts", (req, res) => {
  res.send(products.tshirts);
});
app.get("/products/caps", (req, res) => {
  res.send(products.Caps);
});
app.get("/products/stickers", (req, res) => {
  res.send(products.Stickers);
});

//listen
const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on port ${port}`));

//connect to mongodb

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mogodb conn successfull"))
  .catch((err) => console.log("Mongo DB conn failed", err.message));
