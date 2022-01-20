import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../services/posts';
import PostForm from '../../components/PostForm/PostForm';
import { useHistory } from 'react-router-dom';

export default function Edit() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [message, setMessage] = useState('');
  const history = useHistory();

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
      history.push(`/posts/${params.id}`);
    } catch {
      setMessage('Error');
    }
  };

  return (
    <div>
      <PostForm
        post={{ ...post }}
        handleSubmit={handleSubmit}
        updatePost={updatePost}
        message={message}
      />
      )
    </div>
  );
}
