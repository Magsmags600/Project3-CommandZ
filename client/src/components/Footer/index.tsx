// Footer/index.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p>&copy; {new Date().getFullYear()} CommandZ</p>
      </div>
      <div className="footer-right">
        <Link to="/legal" className="text-white">
          Legal
        </Link>
        <Link to="/contact" className="text-white">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
