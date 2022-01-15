import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';
import ProtectedRoute from './utils/utils';
import Posts from './views/Posts/Posts';
import Title from './views/Title/Title';
import Edit from './views/Edit/Edit';
import Create from './views/Create/Create';
import Post from './views/Post/Post';
import Header from './components/Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Title setCurrentUser={setCurrentUser} />
        </Route>
        <ProtectedRoute currentUser={currentUser} exact path="/posts">
          <Posts currentUser={currentUser} />
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
  );
}

export default App;
