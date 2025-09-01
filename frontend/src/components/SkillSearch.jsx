import { useState } from "react";
import { getBySkill } from "../api/api";

export default function SkillSearch() {
  const [skill, setSkill] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const { data } = await getBySkill(skill);
    setResult(data);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="font-bold mb-2">🔎 Search by Skill</h3>
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Enter skill (e.g. React)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      {result && (
        <div className="mt-4">
          <h4 className="font-semibold">Found Profile:</h4>
          <p>{result?.name}</p>
          <p>{result?.email}</p>
        </div>
      )}
    </div>
  );
}
