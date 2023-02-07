import React from "react";
import "./welcome.css";
//
const Welcome = ()=>{
    //function just part of html
    //<html><head><body>.....
    return (
        <div className="welcome">
            <h1>
                SQL Injection Project for CSCI 400
            </h1>
            <p>
                The main goal of our project is to find what is the best practice of SQL injection. 
            </p>
            <ol>
                <li>Base Mode: Simplly connect to DB without any addtional check user input or other defence methods.</li>
                <li>Login: For testing user login.</li>
                <li>Serach: For testing search input.</li>
            </ol>
            <p>
                By Team SQL400
            </p>
        </div>
    );
};
export default Welcome;