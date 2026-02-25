import { Router } from "express";
import * as forumController from "../controllers/forumController.js";
import { authenticate, optionalAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import {
  createForumSchema,
  forumIdParamSchema,
  addCommentSchema,
  listForumsQuerySchema,
} from "../validators/forumValidator.js";

const router = Router();

router.get("/", validate(listForumsQuerySchema), forumController.list);
router.get("/:id", validate(forumIdParamSchema), forumController.getById);

router.post(
  "/",
  authenticate,
  validate(createForumSchema),
  forumController.create
);

router.post(
  "/:id/comment",
  authenticate,
  validate(addCommentSchema),
  forumController.addComment
);

router.post(
  "/:id/like",
  authenticate,
  validate(forumIdParamSchema),
  forumController.toggleLike
);

export default router;
