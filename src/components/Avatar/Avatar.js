import React from 'react';
import { uploadAvatar } from '../../services/avatars';
import './Avatar.css';

export default function Avatar({ currentUser }) {
  const uploadFile = (e) => {
    uploadAvatar(currentUser.id, e.target.files[0]);
  };
  return (
    <>
      <h2>{currentUser.avatar && <img className="avatar" src={currentUser.avatar} />}</h2>
      <h2>
        {!currentUser.avatar && <input type="file" onChange={uploadFile} className="file-button" />}
      </h2>
    </>
  );
}
