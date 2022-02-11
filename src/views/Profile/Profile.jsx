import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { getMyPosts } from '../../services/posts';

export default function Profile() {
  const [myPosts, setMyPosts] = useState([]);
  const [loading3, setLoading3] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getMyPosts();
      setMyPosts(resp);
      setLoading3(false);
    };
    fetchData();
  }, []);

  if (loading3) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <UserProfile />
    </>
  );
}
