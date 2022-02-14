import { useState, useEffect, useContext, createContext } from 'react';
import { getPosts } from '../services/posts';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
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

  return <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>;
};

const usePosts = () => {
  const context = useContext(PostsContext);

  if (context === undefined) {
    throw new Error('usePosts must be defined within a PostsContext Provider');
  }
  return context;
};

export { PostsProvider, usePosts };
