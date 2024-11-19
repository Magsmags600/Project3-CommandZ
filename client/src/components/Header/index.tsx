// Header/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        <img src="../assets/CareerSparkLogo1.png" alt="Logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">SignUP</Link>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/myresumes" className="nav-link">MyResumes</Link>
      </nav>
    </header>
  );
};

export default Header;
