import { Request, Response } from "express";
import { UserService } from "../services/user.service";


class UserController {
    async profile(req: Request, res: Response) {
        try {
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const userService = new UserService();
            const user = await userService.profile(userId);

            return res.json(user);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export { UserController }