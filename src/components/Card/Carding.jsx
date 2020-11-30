/*
  author : Aziz Amerul Faozi
  desc : this is for card componnent
*/

import React from 'react';
import {
    Button, Card
} from 'react-bootstrap';



/* card function */
const Carding=({longDesc, shortDesc})=>{

    /* this code return carding function */
    return (
	<Card style={{width: '18rem'}}>	  
	  <Card.Body>
	    <Card.Title>shortDesc</Card.Title>
	    <Card.Subtitle>longDesc</Card.Subtitle>
	    <Card.Text>
	      some example 
	    </Card.Text>
	    <Card.Link href="#">Card link</Card.Link>
	  </Card.Body>
	</Card>);

}


export default Carding;
