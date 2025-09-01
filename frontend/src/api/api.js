import axios from "axios";

const API = axios.create({
  baseURL: "https://first-backend-h9cm.onrender.com/api", 
});

// Profile
export const getProfile = () => API.get("/profile");
export const updateProfile = (data) => API.put("/profile", data);

// Skills
export const getBySkill = (skill) => API.get(`/skills?skill=${skill}`);

// Projects
export const getProjects = () => API.get("/projects");

// Health Check
export const checkHealth = () => API.get("/health");
