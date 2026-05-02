import { Request, Response } from "express";
import { ObrasService, GetObraByUserId } from "../services/obras.service";
import { prisma } from "../database/prisma";

const obrasService = new ObrasService();
const getObraByUserId = new GetObraByUserId();

class ObrasController {

  async createObra(req: Request, res: Response) {
    try {
      const {
        code,
        name,
        status,
        state,
        city,
        address,
        startDate,
        expectedEndDate,
        actualEndDate,
        budget,
        totalSpent,
      } = req.body;

      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const obra = await obrasService.createObra({
        code,
        name,
        status,
        state,
        city,
        address,
        startDate: new Date(startDate),
        expectedEndDate: new Date(expectedEndDate),
        actualEndDate: actualEndDate ? new Date(actualEndDate) : undefined,
        budget: Number(budget),
        totalSpent: Number(totalSpent),
        userId,
      });

      return res.status(201).json(obra);
    } catch (error) {
      console.error("Erro ao criar obra:", error); 
      return res.status(500).json({ message: "Error creating obra" });
    }
  }

  async listObras(req: Request, res: Response) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const obras = await getObraByUserId.getObrasByUserId(userId);
      return res.status(200).json(obras);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }

  async countObras(req: Request, res: Response) {
    const userId = req.user?.id;
    const count =await prisma.obra.count({
      where: {userId},
    });
    return res.status(200).json({ count });
  }
}

export default ObrasController;