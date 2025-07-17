import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic example — in real app, you'd check login from backend
    if (role === "artisan") {
      navigate("/artisan-dashboard");
    } else if (role === "client") {
      navigate("/client-dashboard");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div className="form-page">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="artisan">Artisan</option>
          <option value="client">Client</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
