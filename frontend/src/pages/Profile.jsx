import { useEffect, useState } from "react";
import { getProfile } from "../api/api";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then((res) => setProfile(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <ProfileCard profile={profile} />
    </div>
  );
}
