import { prisma } from "../database/prisma"

class UserService {
    async profile(userId: string) {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        return user;
    }
}

export { UserService }