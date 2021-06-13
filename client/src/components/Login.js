import React, { useState }  from 'react';
import Nav from './Nav';
import Background from '../images/undraw_adventure_4hum.svg'

import  '../App.css';

const name = {
    color: "#847b6b",
    fontSize: "45px",
    textAlign: "center",
    marginTop: "2rem"
};

const slogan = {
    color: "#F9A826",
    fontSize: "28px",
    fontFamily: "Parisienne !important",
    textAlign: "center",
    marginTop: "-0.5rem"
  };

const EmptyFormData = {
    email: '',
    password: ''
};

export default function Login(props) {

    const [formData, setFormData] = useState(EmptyFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;

        let newFormData = {...formData};  
        newFormData[name] = value;  
        setFormData(data => newFormData);  
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.submitCb(formData);
        setFormData(EmptyFormData);
      }

    return (
        <div>
            <div className="row">
                <div className="name-div">
                    <h1 style={name}>TASTE ADVENTURE</h1>
                    <p style={slogan}>Foodies around the world</p>
                </div>
                <Nav />
            </div>
        <div className="row">
            <div className="col">
                <div className="formDiv">
                    <form onSubmit={handleSubmit}>
                        <div className="my-1">                      
                                <input 
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange} 
                                /> 
                        </div>
                        <div className="my-1">
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange} 
                                />
                        </div>
                        <div className="start-div">
                            <button type="submit" className ="generic-button">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col">
                <img src={Background} alt="Background" className="backgroundImage"/>
            </div>
        </div>
        </div>

    )
}