import { Router } from "express";
import { ClientController } from "../controllers/client.controller";

const router = Router();

const clientController = new ClientController();

router.post("/", (req, res) => 
    clientController.create(req, res)
);


router.get("/", (req, res) => 
    clientController.list(req, res)
);

export { router as clientRoutes };