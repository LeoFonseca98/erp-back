import { prisma } from "../database/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


class AuthService {
    async register(name: string, email: string, password: string) {
        const userExists = await prisma.user.findUnique({
            where: { email }
        });

        if (userExists) {
            throw new Error("Usuário ja existe!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true
            }
        });

        return {
            user: {
                id: user.id,
                email: user.email
            },
        };
    }


    async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
        where: { email }
        });

        if (!user) {
        throw new Error("Usuário não encontrado");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
        throw new Error("Senha inválida");
        }

        
        const token = jwt.sign(
        { id: user.id }, 
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
        );

        return {
        user: {
            id: user.id,
            email: user.email
        },
        token
        };

    }
}

export { AuthService }