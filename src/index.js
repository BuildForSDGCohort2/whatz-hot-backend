import express from "express";
import cors from "cors";
import CustomError from "./utils/customError";
import { errorHandler } from "./utils/errorhandler";
import v1Router from "./v1/routes";

// create express app
const app = express();

// set up CORS
app.use(cors());

// include middleware to enable json body parsing and nested objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// base route
app.get("/", (req, res) => {
  res.send("Welcome to Whatz Hot!");
});

// router for api version 1
app.use("/v1", v1Router);

// routes not found go here
app.all("*", (req, res, next) => {
  const error = new CustomError(404, "Oops! Resource not found");
  next(error);
});

// default error handler
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

export default app;
