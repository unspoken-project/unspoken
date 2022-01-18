import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../services/posts';
import PostForm from '../../components/PostForm/PostForm';

export default function Edit() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getPostById(params.id);
      setTitle(resp.post_title);
      setContent(resp.post_content);
      setPost(resp);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

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
      <PostForm
        post={{ ...post }}
        handleSubmit={handleSubmit}
        updatePost={updatePost}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />
    </div>
  );
}
