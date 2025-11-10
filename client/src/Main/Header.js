import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
 <nav className="navbar navbar-expand-lg custom-navbar bg-dark text-light">
        <div className="container">
          <h3 className="navbar-brand fw-bold text-light">InfoFlare</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-light">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header