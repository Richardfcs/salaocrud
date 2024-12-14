import { Router } from "express";
import ServicoController from "../controllers/servico.controller";

class ServicoRoutes {
    router = Router();
    controller = new ServicoController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post("/servico", this.controller.create);
        this.router.get("/servicos", this.controller.getAll);
        this.router.get("/servico/:id", this.controller.getById);
        this.router.put("/servico/:id", this.controller.update);
        this.router.delete("/servico/:id", this.controller.remove);
        this.router.delete("/servicos", this.controller.deleteAll)
    }
}

export default new ServicoRoutes().router;