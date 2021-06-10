import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import createHistory from 'history/createBrowserHistory';


const history = createHistory({forceRefresh:true});   

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route path="/">
            < Home/>
          </Route>
          <Route path="/login">
            < Login/>
          </Route>
          <Route path="/register">
            < Register/>
          </Route>
          <Route path="/dashboard">
            < Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
