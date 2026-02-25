import { Router } from "express";
import * as blogController from "../controllers/blogController.js";
import * as commentController from "../controllers/commentController.js";
import { authenticate, optionalAuth } from "../middleware/auth.js";
import { adminOrProfessor } from "../middleware/rbac.js";
import { validate } from "../middleware/validate.js";
import {
  createBlogSchema,
  updateBlogSchema,
} from "../validators/blogValidator.js";
import { blogCommentSchema, blogIdParamSchema } from "../validators/commentValidator.js";

const router = Router();

router.get("/", optionalAuth, blogController.list);
router.get("/popular", blogController.getPopular);
router.get("/:slug", optionalAuth, blogController.getBySlug);

router.post(
  "/",
  authenticate,
  adminOrProfessor,
  validate(createBlogSchema),
  blogController.create
);

router.put(
  "/:id",
  authenticate,
  adminOrProfessor,
  validate(updateBlogSchema),
  blogController.update
);

router.delete(
  "/:id",
  authenticate,
  adminOrProfessor,
  blogController.remove
);

router.post(
  "/:id/comment",
  authenticate,
  validate(blogCommentSchema),
  commentController.addBlogComment
);

router.post(
  "/:id/like",
  authenticate,
  validate(blogIdParamSchema),
  commentController.toggleBlogLike
);

export default router;
