import express from "express";
import {
  healthCheck,
  getProfile,
  createProfile,
  updateProfile,
  getBySkill,
  getProjects,
  createProject,
  updateProject
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/health", healthCheck);
router.get("/profile", getProfile);
router.post("/profile", createProfile);
router.put("/profile", updateProfile);

router.get("/skills", getBySkill);
router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);

export default router;   
