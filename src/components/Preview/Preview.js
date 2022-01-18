import React from 'react';

export default function Preview({ post_title, post_content, id }) {
  return (
    <div className="preview-card">
      <div key={id}>
        <p>Title: {post_title}</p>
        <p>Content: {post_content}</p>
      </div>
    </div>
  );
}
