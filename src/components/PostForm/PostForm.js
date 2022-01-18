import React from 'react';

export default function PostForm({ handleSubmit, updatePost, post }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="title"
          value={post.post_title}
          name="title"
          type="text"
          onInput={(e) => updatePost('title', e.target.value)}
        />
        <label>Content</label>
        <input
          placeholder="content"
          value={post.post_content}
          name="content"
          type="text"
          onInput={(e) => updatePost('content', e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
