import React, {useState,useEffect} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Recipe from './components/Recipe';
import './App.css';
import createHistory from 'history/createBrowserHistory';


const history = createHistory({forceRefresh:true});   

function App() {

  let [meals, setMeals] = useState([]);

  // ------added by me:
  // create useEffect here (to get changes working for every function)
  useEffect(() => {
    getMeals();
  }, []);

  async function login(input) {
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    };

    try {
      let response = await fetch('http://localhost:5000/login', options);
      if (response.ok) {
        let user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/dashboard');
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

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
        history.push('/dashboard');
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
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
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            < Home/>
          </Route>
          <Route path="/login">
            < Login submitCb={login}/>
          </Route>
          <Route path="/register">
            < Register submitCb={register}/>
          </Route>
          <Route path="/dashboard">
            {/* < Dashboard meals2={meals}/> */}
            < Dashboard/>
          </Route>
          <Route path="/recipe">
          {/* new variable which is telling insdie comp recipe, {your hook (meals)}
          storing hook meals inside variable - meals1*/}
            < Recipe meals1={meals} />
          </Route>
          {
                    meals.map(m => (
                        <tr key={m.meal_name}>
                            <td>
                                {m.country_name} {' '}
                            </td>
                            <td>
                                {m.ingredients} {' '}
                            </td>
                            <button className="viewButton" onClick={(e) => getMeals(m.meal_mid)} type="button">View</button>
                        </tr>
                    ))
                }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
