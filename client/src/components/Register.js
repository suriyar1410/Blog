import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-lg border-0 p-4" style={{ width: "460px" }}>
        <h3 className="text-center mb-4">Create an Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} position-absolute top-50 end-0 translate-middle-y me-3 text-muted`}
              role="button"
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>

        <hr className="my-4" />

        <p className="text-center mb-0 text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-success fw-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
