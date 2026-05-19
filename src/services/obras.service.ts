import { prisma } from "../database/prisma";


type CreateObraDTO = {
  code?: string;
  name: string;
  status: string;
  state: string;
  city: string;
  address: string;
  startDate: Date;
  expectedEndDate: Date;
  actualEndDate?: Date;
  budget: number;
  totalSpent: number;
  userId: string;
  clientId: string;
};

class ObrasService {

  private async generateObraCode(): Promise<string> {
    const count = await prisma.obra.count();
    const sequence = String(count + 1).padStart(6, '0');
    return `OBR-${sequence}`;
  }

  async createObra(data: CreateObraDTO) {
    const code = await this.generateObraCode();

    return await prisma.obra.create({

      data: {

        code,
        name: data.name,
        status: data.status,

        state: data.state,
        city: data.city,
        address: data.address,

        startDate: data.startDate,
        expectedEndDate: data.expectedEndDate,
        actualEndDate: data.actualEndDate,

        budget: data.budget,
        totalSpent: data.totalSpent || 0,

        user: {
          connect: {
            id: data.userId
          }
        },
        client: {
          connect: { id: data.clientId }
        }

      }

    });

  }

}

class GetObraByUserId {

  async getObrasByUserId(userId: string) {

    return await prisma.obra.findMany({
      where: {
        userId
      },
    });

  }

}

export {
  ObrasService,
  GetObraByUserId
};