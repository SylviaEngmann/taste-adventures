import React, { useEffect, useState }  from 'react';
import Nav from './Nav';
import Map from './Map';
import  '../App.css';

const name = {
    color: "#847b6b",
    fontSize: "45px",
    textAlign: "center",
    marginTop: "2rem"
}
const slogan = {
    color: "#F9A826",
    fontSize: "28px",
    fontFamily: "Parisienne !important",
    textAlign: "center",
    marginTop: "-0.5rem"
  };


export default function Dashboard() {
    let [meals, setMeals] = useState([]);
  
  useEffect(() => {
    getMeals();
  }, []);

  async function getMeals() {
    try {
      let response = await fetch(`http://localhost:5000/meals`);
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

    const randomRecipe = () => {
        console.log(meals);
    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1 style={name}>TASTE ADVENTURE</h1>
                    <p style={slogan}>Foodies around the world</p>
                </div>
                <div className="col">
                    <Nav />
                </div> 
            </div>
            <div className="row">
                <div className="col">
                    <button className="generic-button" onClick={randomRecipe}>Get Random Recipe</button>
                </div>
                <div className="col">
                    <Map />
                </div>
            </div>
        </div>
    )
}

