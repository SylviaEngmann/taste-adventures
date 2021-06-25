import React, { useEffect, useState }  from 'react';
import Map from './Map';
import Recipe from './Recipe';
import {Collapse, Button, CardBody, Card, ButtonToggle } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import  '../App.css';
import createHistory from 'history/createBrowserHistory';


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
    // textAlign: "center",
    fontFamily: "Parisienne !important",
    color: "#606060"

};

const page = {
    marginTop: "2rem"
}

const mapPlaces = [
    {
        id: 1,
        country: "Ghana",
        location: [7.9465, 1.0232]
    },
    {
        id: 2,
        country: "Spain",
        location: [40.4637, 3.7492]
    },
    {
        id: 3,
        country: "Poland",
        location: [51.9194, 19.1451]
    },
    {
        id: 4,
        country: "Uganda",
        location: [1.3733, 32.2903]
    },
    {
        id: 5,
        country: "USA",
        location: [37.0902, -95.7129]
    }
  ]


const history = createHistory({forceRefresh:true});


export default function Dashboard() {
    let [randomMeal, setRandomRecipe] = useState({});
    let [countryMeals, setCountryMeals] = useState([]);
    const [countries, setCountries] = useState([]);
    const [modal, setModal] = useState(false);


    useEffect(() => {
        setMapPlaces();
      }, []);
    
      function setMapPlaces(){
        setCountries(mapPlaces);
      }

      const toggle = () => setModal(!modal);

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

    async function getCountryMeals(country_name){
        try {
          let response = await fetch('http://localhost:5000/meals');
          if(response.ok){
            let countryMeals = await response.json();
            setCountryMeals(countryMeals);
            history.push('/recipe');
          } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
          }
        }  catch(err) {
          console.log(`Network error: ${err.message}`);
        }
      }


    return (
        <div>
            <div className="row">
                <div className="col">
                </div> 
            </div>
            <div className="row" style={page}>
                <div className="col" style={randMeal}><center>
                    <h3><b> Option 1: </b><p>Pick a random recipe!</p></h3>
                    <button className="generic-button" onClick={randomRecipe}>Get Random Recipe</button>
                    <button className="lovebutton" onClick={toggle}>Like! ❤️</button>

                    <div className="randomRecipe">                    
                    { randomMeal.strMeal &&
                    
                    
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{randomMeal.strMeal}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Cuisine: {randomMeal.strArea}</CardSubtitle>
                            <CardBody>                           
                                 <img src={randomMeal.strMealThumb} alt=" "  width="50%" height="50%"/>
                            {/* <h5> Ingredients: </h5> */}
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
                    }
                    </div>
                    </center>
                </div> 
                <div className="col" style={randMeal}>
                    <h3><b>Option 2: </b><p>Choose a country from the map</p></h3>
                    <Map 
                    countries={countries}
                    countryMealsCb={(country_name) => getCountryMeals(country_name)}
                    />
                </div>                
            </div>
                
            </div>
    )
}