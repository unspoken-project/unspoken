import React from 'react';
import { Link } from 'react-router-dom';
import './PostDetail.css';

export default function PostDetail({ post, handleDelete, currentUser }) {
  return (
    <>
      <div className="post">
        <h1>{post.post_title}</h1>
        <span className="post-content">{post.post_content}</span>
        <p>WRITTEN ON {post.date}</p>
      </div>
      {post.user_id === currentUser.id && (
        <div className="post-buttons-container">
          <button className="post-button">
            <Link to={`/posts/${post.id}/edit`} className="button-link">
              Edit
            </Link>
          </button>
          <button onClick={handleDelete} className="post-button">
            Delete Post
          </button>
        </div>
      )}
    </>
  );
}
