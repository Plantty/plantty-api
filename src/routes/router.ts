import { Router } from "express";
import plantRoutes from "./plants.routes";
import logsRoutes from "./logs.routes";
import userRoutes from "./user.routes";
import adminUserRoutes from "./adminUser.routes";
import commentRoutes from "./comments.routes";

const router = Router();

router.use("/plants", plantRoutes);
router.use("/logs", logsRoutes);
router.use("/users", userRoutes);
router.use("/adminUsers", adminUserRoutes);
router.use("/comments", commentRoutes);

export default router;
