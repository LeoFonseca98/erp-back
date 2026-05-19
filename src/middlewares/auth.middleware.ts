import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
    id: string;
    role: string;
}

function authToken(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({
            message: "Token não enviado"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as TokenPayload;

        (req as any).user = {
            id: decoded.id,
            role: decoded.role
        };

        next();

    } catch {

        return res.status(401).json({
            message: "Token inválido"
        });
    }
}

export { authToken };
