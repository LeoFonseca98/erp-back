import { Request, Response, NextFunction } from "express";

function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const user = (req as any).user;

    if (!user || user.role !== "ADMIN") {
        return res.status(403).json({
            message: "Sem permissão"
        });
    }

    next();
}

export { ensureAdmin };