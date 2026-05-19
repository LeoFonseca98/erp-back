import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authToken } from "../middlewares/auth.middleware";
import { ensureAdmin } from "../middlewares/ensureAdmin";;

const router = Router();

const userController = new UserController();


router.get("/profile", authToken, (req, res) => {
  return userController.profile(req, res);
});


router.patch(
  "/users/:id/role",
  authToken,
  ensureAdmin, 
  (req, res) => {
    return userController.updateRole(req, res)
  }
)

export { router as userRoutes }
