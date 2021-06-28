import { Router } from 'express';
import plantRoutes from './plants.routes';
import logsRoutes from './logs.routes';

const router = Router();

router.use('/plants', plantRoutes);
router.use('/logs', logsRoutes);

export default router;