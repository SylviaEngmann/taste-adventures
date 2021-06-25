import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { Button, CardBody, Card } from 'reactstrap';
import {CardImg,  CardTitle, CardSubtitle} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Local from '../helpers/Local';
import Api from '../helpers/Api';
import  '../App.css';


  const pic ={
    height: "auto",
    width: "150px"
}



  function Profile(props) {
    const [meals, setLovedMeal] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    let userID = Local.getUserId();


    useEffect(() => {
        async function fetchMemberMsg() {
            // Get "Members Only" message for authenticated users
            let response = await Api.getContent('/lovedmeals/' +userID);
            console.log(response);
            if (response.ok) {
                setLovedMeal(response.data);
                setErrorMsg('');
            } else {
                setLovedMeal('');
                setErrorMsg(response.error);
            }
        }
        fetchMemberMsg();
    }, []);

    if (errorMsg) {
        return <h2 style={{ color: 'red' }}>{errorMsg}</h2>
    }

    if (!meals) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="MembersOnlyView">
                      {meals &&
                    meals.map(m => (


                        <Card>
                        {/* show the image: */}
                        <CardImg src={m.url} 
                        style={pic}
                        />
                        <CardBody>
                        {/* shoow the title: */}
                        <CardTitle tag="h5"  >{m.meal_name} </CardTitle>
                        {/* show the additional info: */}
                        <CardSubtitle tag="h6" className="mb-2 text-muted"  >{m.mealtype}, {m.meal_time}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"  >Ingredients: <br></br>
                        {m.ingredient1}<br></br>
                        {m.ingredient3}<br></br>
                        {m.ingredient4}<br></br>
                        {m.ingredient5}<br></br>
                        {m.ingredient6}<br></br>
                        {m.ingredient7}<br></br>
                        {m.ingredient8}<br></br>
                        {m.ingredient9}<br></br>
                        {m.ingredient10}<br></br>
                        {m.ingredient11}<br></br>
                        {m.ingredient12}<br></br>
                        </CardSubtitle>
                        {/* <tr key={m.meal_name}>
                            <td>
                                {m.country_name} {' '}
                            </td>
                            <td>
                                {m.ingredients} {' '}
                            </td>
                            <td>
                                <img src = {m.url}></img>{' '}
                            </td>
                        </tr>
                    )) */}
                {/* } */}
        {/* </div> */}
        </CardBody>
        </Card>
        ))
    }
    </div>
    )
}


  export default Profile;