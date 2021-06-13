import React, { useState }  from 'react';
import  '../App.css';

const name = {
    color: "#847b6b",
    fontSize: "45px",
    textAlign: "center"
}
const slogan = {
    color: "#F9A826",
    fontSize: "28px",
    fontFamily: "Parisienne !important",
    textAlign: "center",
    marginTop: "-0.5rem"
  };

const description = {
    fontSize: "28px",
    color: "#847b6b",
    marginTop: "60px",
    textAlign: "center"
};

const styleDiv = {
    position: "absolute",
    right: "20px",
    padding: "20px"
}

export default function Slogan() {
    return (
        <div className="sloganPosition">
            <h1 style={name}>TASTE ADVENTURE</h1>
            <p style={slogan}>Foodies around the world</p>
            <p style={description}>Experience different meals
                all over the world, from your home</p>
        </div>
    )
}