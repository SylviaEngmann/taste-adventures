import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import Api from '../helpers/Api';
import Nav from './Nav';
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



  function Profile (props) {
    const [user, setUser] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    let { userId } = useParams();

    useEffect(() => {
        async function fetchProfile() {
            let response = await Api.getUser(userId);
            if (response.ok) {
                setUser(response.data);
                setErrorMsg('');
            } else {
                setUser(null);
                setErrorMsg(response.error);
            }
        }
        fetchProfile();
    }, [userId]);

    if (errorMsg) {
        return <h2 style={{ color: 'red' }}>{errorMsg}</h2>
    }

    if (!user) {
        return <h2>Loading...</h2>;
    }

    
  //   async function getLovedMeals () {

  //     try {
  //         let response = await fetch(`http://localhost:5000/getlovedmeals/${id}`);
  //         if (response.ok) {
  //         let lovedMeal = await response.json();
  //         setLovedMeal(lovedMeal);
  //         console.log(lovedMeal);
  //         } else {
  //         console.log(`Server error: ${response.status} ${response.statusText}`);
  //         }
  //     } catch (err) {
  //         console.log(`Network error: ${err.message}`);
  //     }
  // }

    return (
        <div className="Profile">
            <h1>Profile View</h1>
            Hello {user.firstname}!<br />
            <p></p>
            <div>
            Here is your list of saved recipes!
            </div>
        </div>
    );
}


  export default Profile;