import { prisma } from "../database/prisma";

type CreateClientDTO = {
    name: string;
    email?: string;
    phone?: string;
    cpf?: string;
};

class ClientService {
    async create(data: CreateClientDTO) {
        const client = await prisma.client.create({
            data
        });

        return client;
    }

    async list() {
        return await prisma.client.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }
}

export { ClientService };