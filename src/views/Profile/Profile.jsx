// import React, { useState, useEffect } from 'react';
// import UserProfile from '../../components/UserProfile/UserProfile';
// import { getMyPosts, getPostById } from '../../services/posts';
import { usePosts } from '../../context/PostsProvider';
import './Profile.css';

export default function Profile({ currentUser }) {
  console.log('currentUser', currentUser);
  const { posts } = usePosts();
  console.log('posts', posts);

  return (
    <>
      <div>
        {posts.user_id === currentUser.id} && (
        {posts.map((post) => (
          <div key={post.id} className="testing">
            {post.post_content}
          </div>
        ))}
        )
      </div>
    </>
  );
}
