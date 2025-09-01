export default function ProjectList({ projects }) {
  if (!projects || projects.length === 0) return <p>No projects found.</p>;

  return (
    <div className="grid gap-4">
      {projects.map((p, idx) => (
        <div key={idx} className="p-4 border rounded-md shadow bg-white">
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
        </div>
      ))}
    </div>
  );
}
