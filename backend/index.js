//imports

const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const products = require("./products");
const mongoose = require("mongoose");
const app = express();
const TokenRoute = require("./routes/token");
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

//configdotenv

dotenv.config();

//middlewares(use)
app.use(cors());

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5174", // replace with the URL of your frontend
};

app.use(cors(corsOptions));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
    },
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/token", TokenRoute);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);

//get request
app.get("/", (req, res) => {
  res.send("Welcome to our online shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

//listen
const port = process.env.PORT || 8000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on port ${port}`));

//connect to mongodb
mongoose.set("strictQuery", false);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mogodb conn successfull"))
  .catch((err) => console.log("Mongo DB conn failed", err.message));
