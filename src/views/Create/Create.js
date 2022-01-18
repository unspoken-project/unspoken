import React, { useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';

export default function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <PostForm title={title} setTitle={setTitle} content={content} setContent={setContent} />
    </div>
  );
}
