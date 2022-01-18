import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../services/posts';
import PostForm from '../../components/PostForm/PostForm';

export default function Edit() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostById(params.id);
      setPost(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id, loading]);

  if (loading) {
    return <h3> Loading</h3>;
  }

  const updatePost = (key, value) => {
    post[key] = value;
    setPost({ ...post });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editPost(post);
      alert('Success');
    } catch {
      alert('Error');
    }
  };

  return (
    <div>
      <PostForm post={{ ...post }} handleSubmit={handleSubmit} updatePost={updatePost} />
    </div>
  );
}
