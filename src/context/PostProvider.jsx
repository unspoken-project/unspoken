import { useState, useEffect, useContext, createContext, useParams } from 'react';
import { getPostById } from '../services/posts';

const PostContext = createContext();

const PostProvider = ({ children }) => {
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
  }, [params.id]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return <PostContext.Provider value={{ post, setPost }}>{children}</PostContext.Provider>;
};

const usePost = () => {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw new Error('usePost must be defined within a PostContext Provider');
  }
  return context;
};

export { PostProvider, usePost };
