const express = require("express");
const connectDB = require("./config/db");
const resourceRoutes = require("./routes/resourceRoutes");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");

const app = express();

//Connect DB
connectDB();

//Body parser
app.use(express.json());

//Routes
app.use("/api/resources", resourceRoutes);

//Error Middlewares
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;