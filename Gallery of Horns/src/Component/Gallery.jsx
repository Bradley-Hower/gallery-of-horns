import React from "react";
import HornedBeastprofile from "./HornedBeastprofile";
import HornedBeastValues from '../data/data.json';
import FilterForm from './FilterForm';
import BeastDetails from './BeastDetails';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Gallery extends React.Component{
  constructor(){
    super();
    this.state = {
      detailedview: false,
      showForm: false,
      beastslisted: HornedBeastValues,
      beast_title: null,
      beast_image_url: null,
      beast_keyword: null,
      beast_description: null,
      beast_horns: null,
    }
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm});
  }

  toggleDetailedView = () => {
    this.setState({detailedview: !this.state.detailedview})
  }

  selectbeast = (name) => {
  HornedBeastValues.map( (e) => {
    if(e.title === name){
      this.toggleDetailedView();
      this.setState({beast_title: e.title})
      this.setState({beast_image_url: e.image_url})
      this.setState({beast_keyword: e.keyword})
      this.setState({beast_description: e.description})
      this.setState({beast_horns: e.horns})
      return e.title;
    } else {
      return null;
    }
  });
  }
 

  handleFilter = (filterchoice, hornquantity) => {
    if (filterchoice === 'horns'){
      // this null needs to have filter attached
      let filteredchoiceinput = HornedBeastValues.filter(element => element.horns == hornquantity);
      this.setState({ beastslisted : filteredchoiceinput});
    } else {
      this.setState({ beastslisted : HornedBeastValues});
    }
  }

  render(){
    return(
      <div>
        <Button onClick={this.toggleForm}>Filter</Button><br></br><br></br>
        <Row xs={1} md={4} className="g-4">
          {this.state.beastslisted.map((HornedBeast, idx) => (
            <Col key={idx}>
              <section>
                <HornedBeastprofile key={idx} _id={idx} title={HornedBeast.title} image_url={HornedBeast.image_url} keyword={HornedBeast.keyword} description={HornedBeast.description} horns={HornedBeast.horns} selectbeast={this.selectbeast} />
              </section>
            </Col>
          ))}
        </Row>
        
        <FilterForm showForm={this.state.showForm} toggleForm={this.toggleForm} handleFilter={this.handleFilter} />

        <BeastDetails detailedview={this.state.detailedview} toggleDetailedView={this.toggleDetailedView} title={this.state.beast_title} image_url={this.state.beast_image_url} keyword={this.state.beast_keyword} description={this.state.beast_description} horns={this.state.beast_horns} selectbeast={this.selectbeast}/>
      </div>
  ) 
  }
}

export default Gallery;
