import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../services/users';
import './Header.css';

export default function Header() {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/create`);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    history.push(`/`);
  };

  return (
    <div>
      <header>
        <button className="create-button" onClick={handleSubmit}>
          Create Post
        </button>
        <div className="header-links">
          <div>
            <NavLink className="home-link" to="/posts">
              Home
            </NavLink>

            <NavLink className="login-link" to="/">
              Login/Sign-Up
            </NavLink>

            <NavLink onClick={handleLogout} className="logout-link" to="/">
              Logout
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}
