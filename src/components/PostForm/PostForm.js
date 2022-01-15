import React from 'react';

export default function PostForm({ title, setTitle, content, setContent }) {
  return (
    <div>
      <form>
        <label>Title</label>
        <input
          placeholder="title"
          value={title}
          name="title"
          type="text"
          onInput={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <input
          placeholder="content"
          value={content}
          name="content"
          type="text"
          onInput={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
}
