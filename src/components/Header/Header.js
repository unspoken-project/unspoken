import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/create`);
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
              {' '}
              Home{' '}
            </NavLink>
            <NavLink className="login-link" to="/">
              {' '}
              Login/Sign-Up{' '}
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}
