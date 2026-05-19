import { Request, Response } from "express";
import { ClientService } from "../services/client.service";


class ClientController {
    async create(req: Request, res: Response) {
        const {
            name, 
            email,
            phone,
            cpf
        } = req.body;

        const clientService = new ClientService();

        const client = await clientService.create({
            name,
            email,
            phone,
            cpf
        });

        return res.json(client);
    }

    async list(req: Request, res: Response) {
        
        const clientService = new ClientService();

        const clients = await clientService.list();

        return res.json(clients);
    }
}

export { ClientController };