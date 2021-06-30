import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get("/:search", UserController.show);
router.post("/", UserController.store);

export default router;