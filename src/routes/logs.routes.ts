import { Router } from "express";
import LogController from "../controllers/LogController";

const router = Router();

router.get("/", LogController.index);
router.post("/", LogController.store);

router.get("/:id", LogController.show);

export default router;