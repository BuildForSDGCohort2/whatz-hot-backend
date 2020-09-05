import express from "express";
import cors from "cors";
import CustomError from "./utils/errors/customError";
import errorHandler from "./utils/errors/errorhandler";
import responseHandler from "./utils/responses/responseHandler";
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
  return responseHandler(res, 200, "Welcome to WhatzHot! Backend API");
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
