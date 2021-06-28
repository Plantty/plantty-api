import { Router } from "express";
import PlantController from "../controllers/PlantController";

const router = Router();

router.get("/", PlantController.index);
router.post("/", PlantController.store);

router.get("/:search", PlantController.show);

export default router;
