import React from 'react';
import { uploadAvatar } from '../../services/avatars';
import { getUser } from '../../services/users';
import './Avatar.css';

export default function Avatar({ currentUser, setCurrentUser }) {
  const uploadFile = async (e) => {
    await uploadAvatar(currentUser.id, e.target.files[0]);
    const user = await getUser();
    setCurrentUser(user);
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
