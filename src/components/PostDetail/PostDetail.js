import React from 'react';
import { Link } from 'react-router-dom';
import './PostDetail.css';

export default function PostDetail({ post, handleDelete }) {
  return (
    <>
      <div className="post-details">
        <h1>{post.post_title}</h1>
        <p>{post.post_content}</p>
      </div>
      <div className="post-buttons">
        <button>
          <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        </button>

        <button onClick={handleDelete}> Delete Post</button>
      </div>
    </>
  );
}
