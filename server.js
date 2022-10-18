//load .env data into process.env
require("dotenv").config({debug: true});

// Web server config
const PORT = process.env.PORT || 8080;
//const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./src/db/index.js");
const db = new Pool(dbParams);
db.connect();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own


// want to move routes and db connections to one tier inside while only keeping server stuff here
const userRoutes = require("./src/routes/signup/user");
const adminRoutes = require("./src/routes/signup/admin");
const bookingRoutes = require("./src/routes/booking/booking");
const bulletinBoardRoutes = require("./src/routes/bulletinBoard/bulletinBoard");
const capacityRoutes = require("./src/routes/capacity/capacity");

// Mount all resource routes
app.use(cors());
app.use(helmet());
app.use(bodyparser.json());
app.use("/api/user", userRoutes(db));
app.use("/api/admin", adminRoutes(db));
app.use("/api/bulletinboard", bulletinBoardRoutes(db));
app.use("/api/capacity", capacityRoutes(db));
app.use("/api/booking", bookingRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.send("this is working just alright");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
