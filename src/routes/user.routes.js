import { Router } from "express";
import { registerUser } from "../controllers/registerUser.controller.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);

export default userRouter;
