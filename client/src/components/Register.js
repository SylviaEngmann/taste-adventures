import React, { useState }  from 'react';
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
    firstname: '',
    lastname: '',
    email: '',
    password: ''
};

export default function Register(props) {

    const [formData, setFormData] = useState(EmptyFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;

        let newFormData = {...formData};  
        newFormData[name] = value;  
        setFormData(data => newFormData);  
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formData);
        setFormData(EmptyFormData);
      }

    return (
        <div>
        <div className="row">
            <div className="col">
                <div className="formDiv">
                    <form onSubmit={handleSubmit}>
                        <div className="my-1">                      
                                <input 
                                    type="text"
                                    name="firstname"
                                    required
                                    placeholder="First Name"
                                    value={formData.firstname}
                                    onChange={handleChange} 
                                /> 
                        </div>
                        <div className="my-1">                      
                                <input 
                                    type="text"
                                    name="lastname"
                                    required
                                    placeholder="Last Name"
                                    value={formData.lastname}
                                    onChange={handleChange} 
                                /> 
                        </div>
                        <div className="my-1">                      
                                <input 
                                    type="text"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange} 
                                /> 
                        </div>
                        <div className="my-1">
                                <input 
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange} 
                                />
                        </div>
                        <div className="start-div">
                            <button type="submit" className ="generic-button">SIGN UP</button>
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