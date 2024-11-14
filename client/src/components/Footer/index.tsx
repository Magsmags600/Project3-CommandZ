import { useLocation, useNavigate, Link } from 'react-router-dom';
import './footer.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="footer-bar bg-dark text-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div>
          {location.pathname !== '/' && (
            <button className="btn btn-secondary" onClick={handleGoBack}>
              &larr; Go Back
            </button>
          )}
        </div>
        <p className="mb-0 text-center">&copy; {new Date().getFullYear()} - Tech Friends</p>
        <div className="footer-links">
          <Link to="/legal" className="text-light mx-2">
            Legal
          </Link>
          <Link to="/contact" className="text-light mx-2">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
