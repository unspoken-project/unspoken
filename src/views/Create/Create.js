import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PostForm from '../../components/PostForm/PostForm';
import { createPost } from '../../services/posts';

export default function Create() {
  const [post, setPost] = useState({});
  const history = useHistory();

  const updatePost = (key, value) => {
    post[key] = value;
    setPost({ ...post });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(post);
      history.push(`/posts`);
    } catch {
      alert('error creating');
    }
  };
  return (
    <div>
      <PostForm handleSubmit={handleSubmit} updatePost={updatePost} post={{ ...post }} />
    </div>
  );
}
