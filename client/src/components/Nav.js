import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import  '../App.css';

const styleDiv = {
    position: "absolute",
    right: "20px",
    marginTop: "2rem",
}

export default function Nav() {
    return (
        <div className="" style={styleDiv}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/register">REGISTER</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}