import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { obrasRouter } from "./obra.routes";
import { clientRoutes } from "./client.routes"; 

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/obras", obrasRouter);
routes.use("/client", clientRoutes);

export { routes };