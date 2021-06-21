import React, { useState }  from 'react';
import {Collapse, Button, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import  '../App.css';


const Recipe = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // { props.meals1 && 
    //     props.meals1.map(m => (
    //         <tr key={m.meal_name}>
    //             <td>
    //                 {m.country_name} {' '}
    //             </td>
    //             <td>
    //                 {m.ingredients} {' '}
    //             </td>
    //             <button className="viewButton" onClick={(e) => props.mealsDetailsCb(m.meal_mid)} type="button">View</button>
    //         </tr>
    //     ))
    // }
    return (

        <div className="recipeTable">
         {   
        props.meals1 && 
        props.meals1.map(m => (
        <Card>
        {/* show the image: */}
        {/* <CardImg src={data.url} alt="Card image cap" height= "600"/> */}
        <CardBody>
        {/* shoow the title: */}
        <CardTitle tag="h5">{m.meal_name} </CardTitle>
        {/* show the additional info: */}
        <CardSubtitle tag="h6" className="mb-2 text-muted">{m.mealtype}, {m.meal_time}</CardSubtitle>
        {/* to get the button working: */}
        <Button className="basicButton"  onClick={toggle} style={{ marginBottom: '1rem' }}>Ingredients & Method</Button>
         {/* to geth the button open and close: */}
        <Collapse isOpen={isOpen}>
        <Card>
            <CardBody>
            <div className = "tags-input">
            <h3>{m.ingredients}</h3>
            <Button className="basicButton" onClick={toggle} style={{ marginBottom: '1rem' }}>Close</Button>
            <Collapse isOpen={isOpen}>
            </Collapse>
            </div>
            </CardBody>
        </Card>
        </Collapse>
        </CardBody>

        </Card>


        ))
    }

        </div>
    )
}


export default Recipe;