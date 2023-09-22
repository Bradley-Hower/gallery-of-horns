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

  render(){  
    return(
      // <div class="card" style="width: 18rem;">
      //   <img title={this.props.title} src={this.props.imageUrl} class="card-img-top" alt={this.props.description}/>
      //   <div class="card-body">
      //     <h5 class="card-title">{this.props.title}</h5>
      //     <p class="card-text">{this.props.description}</p>
      //     <a href="#" class="btn btn-primary">Go somewhere</a>
      //   </div>
      // </div>



      <Card>
        <Card.Img variant="top" title={this.props.title} src={this.props.image_url} alt={this.props.description} onClick={this.handleClick} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          {`❤️  ${this.state.isFavorited}`}
        </Card.Body>
      </Card>

    )
  }
}

export default HornedBeastprofile;
