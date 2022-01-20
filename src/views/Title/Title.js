import React from 'react';
import Header from '../../components/Header/Header';
import Auth from '../../views/Auth/Auth';
import './Title.css';

export default function Title({ setCurrentUser }) {
  return (
    <div className="title-container">
      <img src="https://ipvfiyhmiwmzfnzlbhov.supabase.in/storage/v1/object/public/unspoken/unspoken_stories_header.png" />
      <Auth setCurrentUser={setCurrentUser} />
    </div>
  );
}
