import React, { useEffect, useState } from 'react';
import Preview from '../../components/Preview/Preview';
import { getPosts } from '../../services/posts';
import './Posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [page, setPage] = useState(1);

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

  const handleNextPage = () => {
    setPage((prevState) => ++prevState);
    setLoading2(true);
  };

  const handlePrevPage = () => {
    setPage((prevState) => --prevState);
    setLoading2(true);
  };

  return (
    <>
      <div className="post-list">
        {posts.map((item) => (
          <Preview key={item.id} {...item} />
        ))}
      </div>
      <div className="page-nav">
        <div className="page-number">Page: {page}</div>
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </>
  );
}
