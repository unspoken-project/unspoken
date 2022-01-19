import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { uploadAvatar } from '../../services/avatars';
import './Header.css';

export default function Header({ currentUser }) {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/create`);
  };

  const uploadFile = (e) => {
    uploadAvatar(currentUser.id, e.target.files[0]);
  };

  return (
    <div>
      <header>
        <div className="user-info">
          <h2>Hello {currentUser.username}</h2>
          {currentUser.avatar && <img className="avatar" src={currentUser.avatar} />}
          <input type="file" onChange={uploadFile} className="button" />
        </div>
        <div className="header-links">
          {currentUser && (
            <button className="create-button" onClick={handleSubmit}>
              Create Post
            </button>
          )}
          <div>
            {currentUser && (
              <NavLink className="home-link" to="/posts">
                {' '}
                Home{' '}
              </NavLink>
            )}
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
