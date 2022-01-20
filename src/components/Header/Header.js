import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { uploadAvatar } from '../../services/avatars';
import { logout } from '../../services/users';
import './Header.css';

export default function Header({ currentUser }) {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/create`);
  };

  const handleLogout = async () => {
    await logout();
    history.push('/');
  };

  const uploadFile = (e) => {
    uploadAvatar(currentUser.id, e.target.files[0]);
  };

  return (
    <div>
      <header>
        <div className="user-info">
          <div className="header-links">
            {currentUser && (
              <div>
                <h2>Hello {currentUser.username}</h2>
                <h2>{currentUser.avatar && <img className="avatar" src={currentUser.avatar} />}</h2>
                <input type="file" onChange={uploadFile} className="button" />
              </div>
            )}
          </div>
          {currentUser && (
            <button className="create-button" onClick={handleSubmit}>
              Create Post
            </button>
          )}
          <div>
            {currentUser && (
              <NavLink className="home-link" to="/posts">
                Home
              </NavLink>
            )}

            <NavLink className="login-link" to="/">
              Login/Sign-Up
            </NavLink>

            <button onClick={handleLogout} className="logout-link">
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
