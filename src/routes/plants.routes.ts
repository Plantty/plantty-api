import { Router } from "express";
import PlantController from "../controllers/PlantController";
import { uploader } from "../middlewares/uploader";

const router = Router();

router.get("/", PlantController.index);
router.post("/", uploader.single('plantImage'), PlantController.store);

router.get("/:search", PlantController.show);

export default router;
