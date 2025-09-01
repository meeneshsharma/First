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
