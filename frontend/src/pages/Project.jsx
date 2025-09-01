import { useEffect, useState } from "react";
import { getProjects, createProject, updateProject } from "../api/api";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", link: "" });

  useEffect(() => {
    getProjects().then((res) => setProjects(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createProject(form);
    setProjects(res.data);
    setForm({ title: "", description: "", link: "" });
  };

  const handleUpdate = async (id) => {
    const newTitle = prompt("Enter new title:");
    if (!newTitle) return;
    const res = await updateProject(id, { title: newTitle });
    setProjects((prev) =>
      prev.map((p) => (p._id === id ? { ...p, title: res.data.title } : p))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>

      {/* Create Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="Project Link"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Project
        </button>
      </form>

      {/* Project List */}
      <div className="grid gap-4">
        {projects.map((p) => (
          <div key={p._id} className="p-4 border rounded-md shadow bg-white">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-600">{p.description}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Project
              </a>
            )}
            <button
              onClick={() => handleUpdate(p._id)}
              className="ml-4 px-2 py-1 bg-green-500 text-white rounded"
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
