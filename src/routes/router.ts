import { Router } from 'express';
import plantRoutes from './plants.routes';
import logsRoutes from './logs.routes';
import userRoutes from './user.routes';

const router = Router();

router.use('/plants', plantRoutes);
router.use('/logs', logsRoutes);
router.use('/users', userRoutes);

export default router;