import { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
