import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';
import './Home.css';


function Home(props){

    return (
        <div className = "home">
            <h1>Greating, Beavers!</h1>
            <h1>Welcome to OSU Dining Halls Review!</h1>
            <div className = "instr"> 
                <h2>User Instructions:</h2>
                <h2 className = "instr_text">To review dinning halls, please click the links at the bottom. In the dining halls' page, you can leave your comments and rating. You must enter both of them to post a comment. The rating range is between 1 to 5.</h2>

                <h2>About the project:</h2>
                <h2 className = "instr_text">This project aims to provide a platform for the OSU students and staff to review all kinds of thing on campus. At current stage, it only has the functionality to review two of the on campus dining halls/stores. Note that this map is still not functional yet, and this project is still in development.</h2>
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