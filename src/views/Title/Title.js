import React from 'react';
import Auth from '../../views/Auth/Auth';

export default function Title({ user, setCurrentUser }) {
  return (
    <div>
      <h1>Title page</h1>
      <Auth />
    </div>
  );
}
