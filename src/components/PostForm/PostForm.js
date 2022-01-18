import React from 'react';

export default function PostForm({ handleSubmit, updatePost, post }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="title"
          value={post.title}
          name="title"
          type="text"
          onInput={(e) => updatePost('title', e.target.value)}
        />
        <label>Content</label>
        <input
          placeholder="content"
          value={post.content}
          name="content"
          type="text"
          onInput={(e) => updatePost('content', e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
