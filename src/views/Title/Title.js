import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../views/Auth/Auth';
import './Title.css';

export default function Title({ setCurrentUser }) {
  return (
    <div className="title-container">
      <img src="https://ipvfiyhmiwmzfnzlbhov.supabase.in/storage/v1/object/public/unspoken/unspoken_stories_header.png" />
      <p>
        Write your stories, memories or unspoken words while listening to lofi beats. Sometimes all
        you need is to write it out.
      </p>
      <Auth setCurrentUser={setCurrentUser} />
      <footer>
        <Link to="/about" className="about-btn">
          About Us
        </Link>
      </footer>
    </div>
  );
}
