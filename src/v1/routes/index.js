import express from "express";
import swaggerRouter from "./docs";

const router = express.Router();

//route definitions - keep swagger router at bottom
router.use(["/v1", "/"], swaggerRouter);

export default router;
