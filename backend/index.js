//imports

const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
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

const corsOptions = {
  origin: "http://localhost:5173", // replace with the URL of your frontend
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
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json());
app.use("/api/token", TokenRoute);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);

//get request
app.get("/", (req, res) => {
  res.send("Welcome to our online shop API");
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
