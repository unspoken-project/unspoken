import React from 'react';
import { uploadAvatar } from '../../services/avatars';

export default function Avatar({ currentUser }) {
  const uploadFile = (e) => {
    uploadAvatar(currentUser.id, e.target.files[0]);
  };
  return (
    <div>
      <h2>{currentUser.avatar && <img className="avatar" src={currentUser.avatar} />}</h2>
      <input type="file" onChange={uploadFile} className="button" />
    </div>
  );
}
