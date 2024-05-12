import { UserController } from "../controller/UserController";
import { UserBusiness} from "../business/UserBusiness";
import { UserData } from "../data/UserData";
import { Router } from "express";

export const userRouter = Router()

const userController = new UserController(new UserBusiness(new UserData()))

userRouter.get('/profile/:user_id', userController.getUserById)
userRouter.get('/all/', userController.getAllUsers)