import Profile from "../models/Profile.js";

// GET /health
export const healthCheck = (req, res) => {
  res.status(200).json({ status: "UP" });
};

// GET profile
export const getProfile = async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
};

// CREATE profile
export const createProfile = async (req, res) => {
  const profile = new Profile(req.body);
  await profile.save();
  res.status(201).json(profile);
};

// UPDATE profile
export const updateProfile = async (req, res) => {
  const profile = await Profile.findOneAndUpdate({}, req.body, { new: true });
  res.json(profile);
};

// QUERY skills
export const getBySkill = async (req, res) => {
  const skill = req.query.skill;
  const profile = await Profile.findOne({ skills: skill });
  res.json(profile);
};

// QUERY projects
export const getProjects = async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile?.projects || []);
};



// CREATE project
export const createProject = async (req, res) => {
  const profile = await Profile.findOne();
  profile.projects.push(req.body);
  await profile.save();
  res.status(201).json(profile.projects);
};

// UPDATE project
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findOne();

  const project = profile.projects.id(id);
  if (!project) return res.status(404).json({ message: "Project not found" });

  Object.assign(project, req.body);
  await profile.save();
  res.json(project);
};
