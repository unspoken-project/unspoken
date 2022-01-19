import React from 'react';
import Auth from '../../views/Auth/Auth';
import './Title.css';

export default function Title({ setCurrentUser }) {
  return (
    <div>
      <h1>Unspoken Words</h1>
      <Auth setCurrentUser={setCurrentUser} />
    </div>
  );
}
