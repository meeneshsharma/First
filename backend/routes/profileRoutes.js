import express from "express";
import {
  healthCheck,
  getProfile,
  createProfile,
  updateProfile,
  getBySkill,
  getProjects
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/health", healthCheck);
router.get("/profile", getProfile);
router.post("/profile", createProfile);
router.put("/profile", updateProfile);

router.get("/skills", getBySkill);
router.get("/projects", getProjects);

export default router;
