import React, { useState } from 'react';
import {Collapse, Button, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import  '../App.css';
import './Recipe.css'

const Recipe = (props) => {

   
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="recipeTable">

         {   
        props.meals1 && 
        props.meals1.map(m => (
        <Card>
        {/* show the image: */}
        <CardImg src={"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"} 
        alt=" "/>
        <CardBody>
        {/* shoow the title: */}
        <CardTitle tag="h5">{m.meal_name} </CardTitle>
        {/* show the additional info: */}
        <CardSubtitle tag="h6" className="mb-2 text-muted">{m.mealtype}, {m.meal_time}</CardSubtitle>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#" component={m.ingredients} >Ingredients </BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#" component={m.ingredients} >Preparation </BreadcrumbItem>
            </Breadcrumb> 

        </CardBody>

        </Card>


        ))
    }

        </div>
    )
}


export default Recipe;



{/* <Breadcrumb tag="nav" listTag="div">

<BreadcrumbItem key={m.ingredients} 
tag="a" href="#" 

>Ingredients  
<Link to={m.ingredients} >

</Link>
</BreadcrumbItem> 

<BreadcrumbItem tag="a" href="#">Preparation
</BreadcrumbItem>
{/* <h3>{m.preparation}</h3> */}

// </Breadcrumb> */}