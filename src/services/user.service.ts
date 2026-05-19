import { prisma } from "../database/prisma"

class UserService {
    async profile(userId: string) {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        return user;
    }

    async updateRole(
        userId: string, 
        role: string
    ) {

        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                role
            }
        });
        return user;
    }
}

export { UserService }