import { Router } from "express";
import { registerUser } from "../controllers/registerUser.controller";

const userRouter = Router();

userRouter.route("/register").post(registerUser);

export default userRouter;
