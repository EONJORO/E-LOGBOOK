
import React, { useState } from "react";
import "../styles/custom.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ minWidth: 350, borderRadius: 8 }}>
        <h2 className="text-maroon mb-3 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="academic">Academic Supervisor</option>
              <option value="industry">Industry Supervisor</option>
              <option value="admin">Super Admin</option>
            </select>
          </div>
          <button type="submit" className="btn bg-maroon w-100 text-white">Login</button>
        </form>
        <div className="text-center mt-3">
          <span className="small">Don't have an account? <a href="/register" className="text-maroon">Register</a></span>
        </div>
      </div>
    </div>
  );
};

export default Login;