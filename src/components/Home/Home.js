import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';
import './Home.css';


function Home(props){

    return (
        <div className = "home">
            <h1>Greating, Beavers!</h1>
            <h1>Welcome to OSU Dinning Halls Review!</h1>
            <div className = "instr"> 
                <h2>User Instructions:</h2>
                <h2 className = "instr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>

                <h2>About the project:</h2>
                <h2 className = "instr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
            </div>

            <div className = "dinLinks">
                <ul>
                    <li>
                        <NavLink to = "/dininghalls/1">Arnold Dining Center</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/dininghalls/2">International Living-Learning Center</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Home;