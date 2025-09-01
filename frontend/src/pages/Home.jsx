import SkillSearch from "../components/SkillSearch";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Me-API Playground</h1>
      <p className="text-gray-600">Search my skills and view projects!</p>
      <SkillSearch />
    </div>
  );
}
