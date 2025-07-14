import express from "express";
import {
  loginController,
  registrationController,
} from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter
  .post("/register", registrationController)
  .post("/login", loginController);

export default authRouter;
