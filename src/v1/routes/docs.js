import express from "express";
import swaggerSpec from "../swaggerSpec";

const swaggerUi = require("swagger-ui-express");

// use swagger-Ui-express for app documentation endpoint
const swaggerRouter = express.Router();
swaggerRouter.use("/", swaggerUi.serve);
swaggerRouter.get("/", swaggerUi.setup(swaggerSpec));
swaggerRouter.get("/docs", swaggerUi.setup(swaggerSpec));

export default swaggerRouter;
