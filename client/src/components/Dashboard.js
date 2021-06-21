import React, { useEffect, useState }  from 'react';
import Nav from './Nav';
import Map from './Map';
import Recipe from './Recipe';
import {CardImg, CardText, CardTitle, Card} from 'reactstrap';
import  '../App.css';

const name = {
    color: "#847b6b",
    fontSize: "25px",
    textAlign: "center",
    marginTop: "2rem"
}
const slogan = {
    color: "#F9A826",
    fontSize: "15px",
    fontFamily: "Parisienne !important",
    textAlign: "center",
    marginTop: "-0.5rem"
  };

const mealImg = {
    width: "400px",
    height: "250px"
};

const randMeal = {
    textAlign: "center"
};

const page = {
    marginTop: "2rem"
}


export default function Dashboard() {
    let [randomMeal, setRandomRecipe] = useState({});

    async function randomRecipe () {

        try {
            let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            if (response.ok) {
            let randomMeal = await response.json();
            setRandomRecipe(randomMeal.meals[0]);
            console.log(randomMeal);
            } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
            }
        } catch (err) {
            console.log(`Network error: ${err.message}`);
        }
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
            <div className="row" style={page}>
                <div className="col" style={randMeal}>
                    <button className="generic-button" onClick={randomRecipe}>Get Random Recipe</button>
                    <div className="randomRecipe">
                        
                                <img src={randomMeal.strMealThumb} alt=" " style={mealImg}/>
                                <h4>{randomMeal.strMeal}</h4>    
                    </div> 
                </div> 
                <div className="col">
                    <h3>Choose a country from the map</h3>
                    <Map />
                </div>                
            </div>
                
            </div>
    )
}

