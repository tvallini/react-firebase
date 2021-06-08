import React from 'react';
import Home from './components/Home';
import Counter from './components/Counter';
import List from './components/List';
import Temperature from './components/Temperature';
import Form from './components/Form';
import User from './components/User';
import Users from './components/Users';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/temperature">
          <Temperature />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
