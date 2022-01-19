import React from 'react';
import './Preview.css';

export default function Preview({ post_title, post_content, id }) {
  return (
    <div className="preview-card-container">
      <div key={id} className="preview-card">
        <div className="title">{post_title}</div>
        <div className="content">{post_content}</div>
      </div>
    </div>
  );
}
