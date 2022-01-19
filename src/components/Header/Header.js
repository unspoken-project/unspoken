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
    <div className="header-links">
      <span>
        <NavLink to="/posts">Home </NavLink>
      </span>
      <button className="create-button" onClick={handleSubmit}>
        Create Post
      </button>
    </div>
  );
}
