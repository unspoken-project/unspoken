import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from './services/users';
import ProtectedRoute from './utils/utils';
import Posts from './views/Posts/Posts';
import Edit from './views/Edit/Edit';
import Create from './views/Create/Create';
import Post from './views/Post/Post';
import AudioPlayer from './components/Audio/AudioPlayer';
import Title from './views/Title/Title';
import About from './views/About/About';
import Header from './components/Header/Header';
import Profile from './views/Profile/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            {currentUser && <Posts setCurrentUser={setCurrentUser} currentUser={currentUser} />}
            {!currentUser && <Title setCurrentUser={setCurrentUser} />}
          </Route>
          <ProtectedRoute currentUser={currentUser} exact path="/posts">
            <Posts currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </ProtectedRoute>
          <ProtectedRoute currentUser={currentUser} exact path="/posts/:id/edit">
            <Edit currentUser={currentUser} />
          </ProtectedRoute>
          <ProtectedRoute currentUser={currentUser} exact path="/create">
            <Create currentUser={currentUser} />
          </ProtectedRoute>
          <ProtectedRoute currentUser={currentUser} exact path="/posts/:id">
            <Post currentUser={currentUser} />
          </ProtectedRoute>
          <ProtectedRoute currentUser={currentUser} exact path="/profile">
            <Profile currentUser={currentUser} />
          </ProtectedRoute>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
      <AudioPlayer />
    </>
  );
}

export default App;
