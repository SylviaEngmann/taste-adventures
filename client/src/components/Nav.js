import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import  '../App.css';


const styleDiv = {
    position: "absolute",
    right: "20px",
    marginTop: "2rem",
}

function Nav(props) {
    return (
        // <div className="" style={styleDiv}>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/">HOME</Link>
        //             </li>
        //             <li>
        //                 <Link to="/login">LOGIN</Link>
        //             </li>
        //             <li>
        //                 <Link to="/register">REGISTER</Link>
        //             </li>
        //             <li>
        //                 <Link to="/recipe">RECIPES</Link>
        //             </li>
        //             <li>
        //                 <Link to="/profile">PROFILE</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
        <nav className="Navbar navbar navbar-expand-md navbar-light mb-4" style={{ backgroundColor: 'white' }}>
        <span className="navbar-brand font-weight-bold">
            <img src ={'slogan.png'} className="slogan" alt="slogan"></img></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/dashboard" exact>Home</NavLink>
                </li>
            </ul>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/register" exact>Register</NavLink>
                </li>
                </ul>

        {
            props.user
                ?   
                    (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to={`/users/${props.user.id}`}>Profile ({props.user.email})</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* Simulate <NavLink> (it requires 'to' attribute, but we don't have one) */}
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={props.onLogout}>Logout</span>
                            </li> 
                        </ul>
                    )
                :
                    (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    )
                    
        }
    </nav>

);

}

export default Nav;