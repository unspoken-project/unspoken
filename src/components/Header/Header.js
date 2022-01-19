import React from 'react';

export default function Header({ currentUser }) {
  return (
    <div>
      <h3>Hello {currentUser.email}</h3>
    </div>
  );
}
