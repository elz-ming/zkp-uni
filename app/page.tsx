"use client"; // Required for event handling

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }
    // Navigate to the corresponding dashboard
    switch (selectedRole) {
      case "student":
        router.push("/student");
        break;
      case "university":
        router.push("/university");
        break;
      case "employer":
        router.push("/employer");
        break;
      default:
        alert("Invalid role");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <select
        onChange={(e) => setSelectedRole(e.target.value)}
        defaultValue=""
        className="dropdown"
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="university">University Professor</option>
        <option value="employer">Employer</option>
      </select>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}
