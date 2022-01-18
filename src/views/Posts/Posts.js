import React, { useEffect, useState } from 'react';
import Preview from '../../components/Preview/Preview';
import { getPosts } from '../../services/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getPosts();
      setPosts(resp);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {posts.map((item) => (
        <Preview key={item.id} {...item} />
      ))}
    </div>
  );
}
