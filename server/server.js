import express from "express";
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
const config = require("./config/config.js");
dotenv.config();

// App
const app = express();
// Middleware to content data like json : resove problem "message": "Cannot read property 'email' of undefined"

/* Headers */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request =
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// DB
mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("Error connected to mongodb:", error.reason);
  });

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(express.json()); // Equivalent to bodyParser, to have data in req.body
app.use(cookieParser());
// app.use(upload());
app.use(cors());
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// Routes Middleware
fs.readdirSync("./routers").map((r) =>
  app.use(config.API_ROOT, require(`./routers/${r}`))
);

// Port
app.listen(config.PORT, () => {
  console.log(`Server started at http://localhost:${config.PORT}`);
});
