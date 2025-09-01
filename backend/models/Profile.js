import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    education: { type: String },
    skills: [{ type: String }],
    projects: [
      {
        title: String,
        description: String,
        link: String
      }
    ]
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
