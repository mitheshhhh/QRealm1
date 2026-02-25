import { Router } from "express";
import * as uploadController from "../controllers/uploadController.js";
import { authenticate } from "../middleware/auth.js";
import { uploadSingle } from "../middleware/upload.js";

const router = Router();

router.post("/", authenticate, uploadSingle, uploadController.upload);
router.post("/signed-params", authenticate, uploadController.signedParams);

export default router;
