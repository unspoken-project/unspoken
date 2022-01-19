import React from 'react';
import './PostForm.css';

export default function PostForm({ handleSubmit, updatePost, post }) {
  return (
    <div className="post-form">
      <form className="post-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="title"
          value={post.post_title}
          name="title"
          type="text"
          onInput={(e) => updatePost('post_title', e.target.value)}
        />
        <label>Tell Us More...</label>
        <textarea
          placeholder="content (minimum 6 characters)"
          value={post.post_content}
          name="content"
          type="text"
          onInput={(e) => updatePost('post_content', e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
