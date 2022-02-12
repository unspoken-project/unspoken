import React, { useEffect, useState } from 'react';
import Preview from '../../components/Preview/Preview';
import './Posts.css';
import { getPosts } from '../../services/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getPosts();
      setPosts(resp);
      setLoading2(false);
    };
    fetchData();
  }, []);

  if (loading2) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <div className="post-list">
        {posts.map((item) => (
          <Preview key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
