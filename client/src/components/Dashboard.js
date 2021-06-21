import React, { useEffect, useState }  from 'react';
import Nav from './Nav';
import Map from './Map';
import Recipe from './Recipe';
import {Collapse, Button, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
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

const h5 ={
    color: "#E0FFFF",
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
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{randomMeal.strMeal}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Cuisine: {randomMeal.strArea}</CardSubtitle>
                            <CardBody>
                            <img src={randomMeal.strMealThumb} alt=" "  width="100%" height="100%"/>
                            <h5> Ingredients: </h5>
                            <h6>{randomMeal.strMeasure1} {randomMeal.strIngredient1}</h6>
                            <h6>{randomMeal.strMeasure2} {randomMeal.strIngredient2}</h6>
                            <h6>{randomMeal.strMeasure3} {randomMeal.strIngredient3}</h6>
                            <h6>{randomMeal.strMeasure4} {randomMeal.strIngredient4}</h6>
                            <h6>{randomMeal.strMeasure5} {randomMeal.strIngredient5}</h6>
                            <h6>{randomMeal.strMeasure6} {randomMeal.strIngredient6}</h6>
                            <h6>{randomMeal.strMeasure7} {randomMeal.strIngredient7}</h6>
                            <h6>{randomMeal.strMeasure8} {randomMeal.strIngredient8}</h6>
                            <h6>{randomMeal.strMeasure9} {randomMeal.strIngredient9}</h6>
                            <h6>{randomMeal.strMeasure10} {randomMeal.strIngredient10}</h6>
                            <h6>{randomMeal.strMeasure11} {randomMeal.strIngredient11}</h6>
                            <h6>{randomMeal.strMeasure12} {randomMeal.strIngredient12}</h6>
                            <h6>{randomMeal.strMeasure13} {randomMeal.strIngredient13}</h6>
                            <h6>{randomMeal.strMeasure14} {randomMeal.strIngredient14}</h6>
                            <h6>{randomMeal.strMeasure15} {randomMeal.strIngredient15}</h6>
                            <h6>{randomMeal.strMeasure16} {randomMeal.strIngredient16}</h6>
                            <h6>{randomMeal.strMeasure17} {randomMeal.strIngredient17}</h6>
                            <h6>{randomMeal.strMeasure18} {randomMeal.strIngredient18}</h6>
                            <h6>{randomMeal.strMeasure19} {randomMeal.strIngredient19}</h6>
                            <h6>{randomMeal.strMeasure20} {randomMeal.strIngredient20}</h6>
                            <h6>{randomMeal.strMeasure21} {randomMeal.strIngredient21}</h6>
                            <h5>Instructions:</h5> 
                            <h6>{randomMeal.strInstructions}</h6>
                            </CardBody>
                        </CardBody>
                    </Card>
                    </div> 
                </div> 
                <div className="col">
                    <h3>Choose a country from the map</h3>
                    <Map />
                    <Recipe />
                </div>                
            </div>
                
            </div>
    )
}