import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authToken } from "../middlewares/auth.middleware";

const router = Router();

const userController = new UserController();


router.get("/profile", authToken, (req, res) => {
  return userController.profile(req, res);
});


export { router as userRoutes }
