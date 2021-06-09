import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
