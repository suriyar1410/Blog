import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import api from "../Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.name);
      alert("Login successful!");
      navigate("/AddPost");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg border-0 p-4" style={{ width: "420px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label fw-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`bi ${
                showPassword ? "bi-eye" : "bi-eye-slash"
              } position-absolute top-50 end-0 translate-middle-y me-3 text-muted`}
              role="button"
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label small" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <hr className="my-4" />

        <p className="text-center mb-0 text-muted">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary fw-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
