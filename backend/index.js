//imports

const express = require("express");
const cors = require("cors");
const products = require("./products");
const mongoose = require("mongoose");
const app = express();
const TokenRoute = require("./routes/token");
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require("./routes/stripe");

//config

require("dotenv").config();

//middlewares(use)

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/api/token", TokenRoute);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);

//get request
app.get("/", (req, res) => {
  res.send("Welcome to our online shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

//listen
const port = process.env.PORT || 4000;
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
