import React, { useEffect, useState }  from 'react';
import Nav from './Nav';
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
        </div>
    )
}
