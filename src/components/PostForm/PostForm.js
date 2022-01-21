import React from 'react';
import './PostForm.css';

export default function PostForm({ handleSubmit, updatePost, post }) {
  return (
    <>
      <form className="post-form">
        <h1>create post</h1>
        <input
          placeholder="post title..."
          value={post.post_title}
          name="title"
          type="text"
          onInput={(e) => updatePost('post_title', e.target.value)}
        />
        <textarea
          placeholder="tell us more... (minimum 6 characters)"
          value={post.post_content}
          name="content"
          type="text"
          onInput={(e) => updatePost('post_content', e.target.value)}
        />
        <button onClick={handleSubmit} className="edit-button">
          Submit
        </button>
      </form>
    </>
  );
}
