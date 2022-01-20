import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../services/users';
import Avatar from '../Avatar/Avatar';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/create`);
  };

  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
    history.push('/');
  };

  return (
    <header>
      {currentUser && (
        <>
          <div className="user-info">
            <Avatar currentUser={currentUser} />
            <h2>Hello, {currentUser.username}!</h2>
          </div>

          <div>
            <button onClick={handleSubmit} className="header-button">
              Create Post
            </button>
            <button onClick={handleLogout} className="header-button">
              Logout
            </button>

            <NavLink to="/posts" className="header-button">
              Home
            </NavLink>
          </div>
        </>
      )}
    </header>
  );
}
