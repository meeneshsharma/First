export default function ProfileCard({ profile }) {
  if (!profile) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold">{profile.name}</h2>
      <p className="text-gray-600">{profile.email}</p>
      <p className="mt-2">🎓 {profile.education}</p>
      <div className="mt-2">
        <h3 className="font-semibold">Skills:</h3>
        <ul className="list-disc list-inside">
          {profile.skills?.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
