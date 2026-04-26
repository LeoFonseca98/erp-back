import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const result = await authService.register(name, email, password);

      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const result = await authService.login(email, password);

      return res.json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token missing" });
    }

    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string
      ) as any;

      const newAccessToken = jwt.sign(
        { id: decoded.id },
        process.env.JWT_SECRET as string,
        { expiresIn: "15m" }
      );

      return res.json({
        token: newAccessToken,
      });
    } catch {
      return res.status(401).json({ message: "Invalid refresh token" });
    }
  }
}

export { AuthController };
