import { Link } from 'react-router-dom';
import { type MouseEvent } from 'react';
import Auth from '../../utils/auth';
import './header.css';

const Header = () => {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand logo-placeholder" to="/">
          Logo
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/myresumes">
                MyResumes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            {Auth.loggedIn() ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
