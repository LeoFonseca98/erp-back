import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

const authController = new AuthController();

router.post("/register", (req, res) => {
  return authController.register(req, res);
});

router.post("/login", (req, res) => {
  return authController.login(req, res);
});

router.post("/refresh", (req, res) => {
  return authController.refresh(req, res);
});


export { router as authRoutes };