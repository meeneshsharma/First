import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Profile from "../models/Profile.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();
    await Profile.deleteMany();

    const profile = await Profile.create({
      name: "Meenesh Sharma",
      email: "meenesh@example.com",
      education: "B.Tech in Computer Science",
      skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
      projects: [
        {
          title: "E-commerce Website",
          description: "Built with Next.js, MongoDB, and ShadCN UI",
          link: "https://github.com/example/ecommerce"
        },
        {
          title: "Chatbot Project",
          description: "Custom chatbot using Microsoft Bot Framework",
          link: "https://github.com/example/chatbot"
        }
      ]
    });

    console.log("Seeded:", profile);
    process.exit();
  } catch (error) {
    console.error(" Error seeding:", error);
    process.exit(1);
  }
};

seedData();
