// Header/index.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Auth from "../../utils/auth";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        <img src="../assets/CareerSparkLogo1.png" alt="Logo" />
      </Link>
      <nav className="nav-links">
        {Auth.loggedIn() ? (
          <>
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/resumes" className="nav-link">
              MyResumes
            </Link>
            <Link to="/" className="nav-link" onClick={Auth.logout}>
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              SignUp
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
