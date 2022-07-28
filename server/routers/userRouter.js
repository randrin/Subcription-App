import express from "express";

const authRouter = express.Router();

import { authRegister, authLogin } from "../controllers/authController";

authRouter.post("/register", authRegister);
authRouter.post("/login", authLogin);

module.exports = authRouter;