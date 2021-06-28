import { Router } from 'express';
import plantRoutes from './plants.routes';

const router = Router();

router.use('/plants', plantRoutes);

export default router;