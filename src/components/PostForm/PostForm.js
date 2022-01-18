import React from 'react';

export default function PostForm({ handleSubmit, updatePost, post_title, post_content }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="title"
          value={post_title}
          name="title"
          type="text"
          onInput={(e) => updatePost('title', e.target.value)}
        />
        <label>Content</label>
        <input
          placeholder="content"
          value={post_content}
          name="content"
          type="text"
          onInput={(e) => updatePost('content', e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
