import { Router } from 'express';
import AdminUserController from '../controllers/AdminUserController';

const router = Router();

router.post("/", AdminUserController.store);

export default router;