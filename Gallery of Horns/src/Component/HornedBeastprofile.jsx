import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeastprofile extends React.Component{
  constructor(){
    super();
    this.state = {
      isFavorited: 0,

    };
  }

  handleClick = () => {
    this.setState({ isFavorited: this.state.isFavorited + 1 });
  };

  handleimageClick = () => {
    let named = this.props.title;
    this.props.selectbeast(named);      
  };

  render(){  
    return(

      <Card>
        <Card.Img variant="top" title={this.props.title} src={this.props.image_url} alt={this.props.description} onClick={this.handleimageClick}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button onClick={this.handleClick}>Favorite</Button>
          {` ❤️  ${this.state.isFavorited}`}
        </Card.Body>
      </Card>

    )
  }
}

export default HornedBeastprofile;
