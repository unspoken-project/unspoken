import React from 'react';
import { Link } from 'react-router-dom';
import './Preview.css';

export default function Preview({ post_title, post_content, id }) {
  return (
    <div className="preview-card-container">
      <div key={id} className="preview-card">
        <Link className="title-link" to={`/posts/${id}`}>
          <div className="title">{post_title}</div>
        </Link>
        <div className="content">
          {post_content}
          <p>
            <Link to={`/posts/${id}`}>read more..</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
