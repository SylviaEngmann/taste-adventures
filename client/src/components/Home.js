import React, { useState }  from 'react';
import Background from '../images/undraw_adventure_4hum.svg'
import Slogan from './Slogan';
import  '../App.css';
import createHistory from 'history/createBrowserHistory';


const history = createHistory({forceRefresh:true});

const description = {
    fontSize: "28px",
    color: "#847b6b",
    marginTop: "100px",
    textAlign: "center"
};


export default function Home() {
    function dashboard(){
        history.push('/dashboard');
      }

    return (
        <div className="">
            <div className="row">
                <div className="col">
                    <div className="home-div">
                        <div className="start-div">
                        <p style={description}>Experience different meals
                all over the world, from your home.</p>
                            <button className="generic-button" onClick={dashboard}>GET STARTED</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={Background} alt="Background" className="backgroundImage"/>
                </div>
            </div>
        </div>
    )
}