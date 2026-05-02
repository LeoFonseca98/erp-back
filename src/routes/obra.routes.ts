import { Router } from "express";
import ObrasController from "../controllers/obras.controller";
import { authToken } from "../middlewares/auth.middleware";

const router = Router();
const obrasController = new ObrasController();

router.post("/", authToken, (req, res) => {
    return obrasController.createObra(req, res);
})

router.get("/", authToken, (req, res) => {
    return obrasController.listObras(req, res);
});     


// obras.routes.ts
router.get("/count", authToken, obrasController.countObras);


export { router as obrasRouter};