import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from './services/users';
import ProtectedRoute from './utils/utils';
import Posts from './views/Posts/Posts';
import Edit from './views/Edit/Edit';
import Create from './views/Create/Create';
import Post from './views/Post/Post';
import Header from './components/Header/Header';
import AudioPlayer from './components/Audio/AudioPlayer';
import Title from './views/Title/Title';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            {currentUser && <Posts setCurrentUser={setCurrentUser} />}
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
        </Switch>
      </BrowserRouter>
      <AudioPlayer />
    </>
  );
}

export default App;
