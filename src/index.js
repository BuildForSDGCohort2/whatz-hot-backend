import express from "express";
import cors from "cors";

// create express app
const app = express();

// set up CORS
app.use(cors());

// include middleware to enable json body parsing and nested objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// base routes
app.get("/", (req, res) => {
  res.send("Welcome to Whatz Hot!");
});

// routes not found go here
app.all("*", (req, res) => {
  res.status(404).send("Oops! Resource not found");
});

export default app;
