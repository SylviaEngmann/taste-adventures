import React, {useState,useEffect} from 'react';
import { Switch, Route, Router, useHistory } from 'react-router-dom';
import './App.css';

import Local from './helpers/Local';
import Api from './helpers/Api';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Profile from './components/Profile';
import Nav from './components/Nav';
import Map from './components/Map';

import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh:true});   

function Success() {
  alert("Success!");
}

function Problem() {
  alert("Unsuccessful!");
}



function App() {
  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const history = useHistory();
  let [meals, setMeals] = useState([]);
  let [countryMeals, setCountryMeals] = useState([]);


  // ------added by me:
  // create useEffect here (to get changes working for every function)
  useEffect(() => {
    getMeals();
  }, []);

  
  async function register(input) {
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    };

    try {
      let response = await fetch('http://localhost:5000/register', options);
      if (response.ok) {
        let user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        Success();
        history.push('/login');
      } else {
        Problem();
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      Problem();
      console.log(`Network error: ${err.message}`);
    }
  }

  async function doLogin(email, password) {
    let response = await Api.loginUser(email, password);
    if (response.ok) {
        Local.saveUserInfo(response.data.token, response.data.user);
        setUser(response.data.user);
        setLoginErrorMsg('');
        Success();
        history.push('/dashboard');
    } else {
        setLoginErrorMsg('Login failed');
        Problem();
    }
}

function doLogout() {
    Local.removeUserInfo();
    setUser(null);
    history.push('/');
}

  async function getMeals(){
    try {
      let response = await fetch('http://localhost:5000/meals');
      if(response.ok){
        let meals = await response.json();
        setMeals(meals);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    }  catch(err) {
      console.log(`Network error: ${err.message}`);
    }
  }

  async function addLovedMeal(mid) {
  let options = { method: 'POST' };

  try {
    let response = await fetch(`/meals/${mid}`, options);
    if (response.ok) {
      let meals = await response.json();
      setMeals(meals);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(`Network error: ${err.message}`);
  }
}

async function deleteMeal(mid) {
  let options = { method: 'DELETE' };

  try {
    let response = await fetch(`/meals/${mid}`, options);
    if (response.ok) {
      let meals = await response.json();
      setMeals(meals);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(`Network error: ${err.message}`);
  }
}


  return (
    <div className="container-fluid">
      <Nav user={user} onLogout={doLogout} />
      <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            < Home/>
          </Route>

          <AuthenticatedRoute path="/users/:userId" exact>
              <Profile />
          </AuthenticatedRoute>

          <Route path="/login">
            <Login 
              onSubmit={(u, p) => doLogin(u, p)} 
              error={loginErrorMsg} />
          </Route>

          <Route path="/register">
            < Register onSubmit={register}/>
          </Route>

          <Route path="/dashboard">
            {/* < Dashboard meals2={meals}/> */}
          < Dashboard/>

            </Route>
          {/* <Route path="/recipe:country_name" 
          children={< Recipe countryMeals={countryMeals} />} 
            /> */}
            
          <Route path="/recipe">
          {/* new variable which is telling insdie comp recipe, {your hook (meals)}
          storing hook meals inside variable - meals1*/}
            < Recipe 
            meals1={meals}
            //countryMeals={countryMeals}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  </div>
  );
}

export default App;
