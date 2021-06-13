import React, { useState }  from 'react';
import Background from '../images/undraw_adventure_4hum.svg'
import Slogan from './Slogan';
import Nav from './Nav';
import  '../App.css';
import createHistory from 'history/createBrowserHistory';


const history = createHistory({forceRefresh:true});


export default function Home() {
    function dashboard(){
        history.push('/dashboard');
      }

    return (
        <div className="">
            <Nav />
            <div className="row">
                <div className="col">
                    <div className="home-div">
                        <Slogan />
                        <div className="start-div">
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