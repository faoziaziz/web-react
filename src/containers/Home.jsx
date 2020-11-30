/*
  author : Aziz Amerul Faozi
  desc : this used for home page 
*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./About.css"
import Header from '../components/Header/Headers';
import { Button, Card , Container, Row, Col} from 'react-bootstrap';
import Carding from '../components/Card/Carding';



/* home function */
const Home=()=> {

    /* variable declaration */
    const [persons, setPersons]=useState([]);
    const [portofolios, setPortofolios]=useState([]);

    /* for use effect function */
    useEffect(()=> {
	axios.get(`https://server.faozi.tech:4561/portofolio/`)
	    .then(res => {
		setPortofolios(res.data);
		
	    })
    }, []);

    /* return function */
    return (
	<div className="About">
	  <Header />
	  <div>
	    <div className="lander">
	      <h1>Hanisa</h1>


	      <p>Hasil anak Indonesia.</p>

	      <hr />
	      

	      <Container>
		<Row>
		  {
		      portofolios.map(portofolio =><Col>
				      <Carding longDesc={portofolio.longDesc}
						   shortDesc={portofolio.shortDesc}
						   /></Col>)
		  }
	</Row>
	    </Container>
	    <hr />
	    </div>
	    </div>
	    </div>
    );
    
}


export default Home;
