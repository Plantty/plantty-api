import { Router } from "express";
import CommentController from "../controllers/CommentController";

const router = Router();

router.get('/', CommentController.index);
router.post('/', CommentController.store);

export default router;