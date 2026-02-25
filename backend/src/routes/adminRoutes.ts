import { Router } from "express";
import * as adminController from "../controllers/adminController.js";
import { authenticate } from "../middleware/auth.js";
import { adminOnly } from "../middleware/rbac.js";

const router = Router();

router.use(authenticate, adminOnly);

router.get("/users", adminController.listUsers);
router.get("/analytics", adminController.getAnalytics);
router.delete("/user/:id", adminController.deleteUser);

export default router;
