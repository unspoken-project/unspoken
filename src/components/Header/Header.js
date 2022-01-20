import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { uploadAvatar } from '../../services/avatars';
import { logout } from '../../services/users';
import Avatar from '../Avatar/Avatar';
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

  return (
    <div>
      <header>
        <div className="user-info">
          <div className="header-links">
            {currentUser && (
              <>
                <div>
                  <h2>Hello {currentUser.username}</h2>
                  <Avatar currentUser={currentUser} />
                </div>

                <div className="links">
                  <button className="create-btn" onClick={handleSubmit}>
                    Create Post
                  </button>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>

                  <NavLink className="home-link" to="/posts">
                    Home
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
