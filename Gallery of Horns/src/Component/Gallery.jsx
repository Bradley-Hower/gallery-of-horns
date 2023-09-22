import React from "react";
import HornedBeastprofile from "./HornedBeastprofile";
// import hornedLizard from '../assets/HornedLizard.jpeg'
// import hornedOwl from '../assets/HornedOwl.jpg' 
import HornedBeastValues from '../data/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component{
  render(){
    return(

      <Container fluid>
        <Row>
          <Col>
            <section>
              {HornedBeastValues.map((HornedBeast, idx) => <HornedBeastprofile key={idx} _id={idx} title={HornedBeast.title} image_url={HornedBeast.image_url} keyword={HornedBeast.keyword} description={HornedBeast.description} horns={HornedBeast.horns}/>)}
            </section>
          </Col>
        </Row>
      </Container>
          
  ) 
  }
}

export default Gallery;
