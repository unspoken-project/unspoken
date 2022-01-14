import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
