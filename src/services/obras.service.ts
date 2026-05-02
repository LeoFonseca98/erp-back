import { prisma } from "../database/prisma";
import  { Prisma } from "@prisma/client";

type CreateObraDTO = {
  code: string;
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
};

class ObrasService {
  async createObra(data: CreateObraDTO) {
    return await prisma.obra.create({
      data,
    });
  }
}

class GetObraByUserId {
  async getObrasByUserId(userId: string) {
    return await prisma.obra.findMany({
      where: {userId},
    });
  }
}

export { ObrasService, GetObraByUserId };