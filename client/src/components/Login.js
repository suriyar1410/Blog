import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label fw-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
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
            <Link to="/forgot-password" className="small text-primary">
              Forgot password?
            </Link>
          </div>

          <Link to='/' type="submit" className="btn btn-primary w-100">
            Login
          </Link>
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
