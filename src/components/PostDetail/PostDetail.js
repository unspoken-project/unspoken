import React from 'react';
import { Link } from 'react-router-dom';

export default function PostDetail({ post, post_title, post_content, handleDelete }) {
  return (
    <div className="post-details">
      <h1>{post_title}</h1>
      <h3>{post_content}</h3>

      <Link key={post.id} to={`/posts/${post.id}/edit`}>
        Edit
      </Link>

      <button onClick={handleDelete}> Delete Post</button>
    </div>
  );
}
