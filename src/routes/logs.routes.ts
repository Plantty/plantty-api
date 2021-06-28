import { Router } from "express";
import LogController from "../controllers/LogController";

const router = Router();

router.get("/", LogController.index);
router.get("/:id", LogController.show);

router.post("/", LogController.store);

export default router;