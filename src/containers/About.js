/*
  author : Aziz Amerul Faozi
  desc : This code must be coded.
*/

import React from "react";
import "./About.css";
// or less ideally
import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Headers';


/* this code must be about Pages */
export default function About() {
    return (
            <div className="About">

	    <Header />
            <div className="lander">
            <h1>About</h1>
	    
            <p>A simple note taking app</p>
            <hr />
	    
            <Button href="#">Link</Button>
	    <Button type="submit">Button</Button>
            <Button as="input" type="button" value="Input" />

	    <Button as="input" type="submit" value="Submit" />
	    <Button as="input" type="reset" value="Reset" />
            
            </div>
            </div>
    );
}
