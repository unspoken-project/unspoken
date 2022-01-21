import React from 'react';
import { deletePost, getPostById } from '../../services/posts';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PostDetail from '../../components/PostDetail/PostDetail';

export default function Post({ currentUser }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostById(params.id);
      setPost(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await deletePost(post.id);
    history.push(`/posts`);
  };

  return (
    <div>
      <PostDetail post={post} handleDelete={handleDelete} currentUser={currentUser} />
    </div>
  );
}
