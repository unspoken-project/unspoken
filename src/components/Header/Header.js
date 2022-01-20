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
    <div>
      <header>
        <div className="user-info">
          <div className="header-links">
            {currentUser && (
              <>
                <div className="welcome">
                  <Avatar currentUser={currentUser} />
                  <h2>Hello {currentUser.username}</h2>
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
