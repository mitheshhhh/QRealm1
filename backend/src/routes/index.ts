import { Router } from "express";
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogRoutes.js";
import forumRoutes from "./forumRoutes.js";
import uploadRoutes from "./uploadRoutes.js";
import adminRoutes from "./adminRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/blogs", blogRoutes);
router.use("/forums", forumRoutes);
router.use("/upload", uploadRoutes);
router.use("/admin", adminRoutes);

export default router;
