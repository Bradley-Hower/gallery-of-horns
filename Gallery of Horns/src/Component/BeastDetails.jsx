import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class BeastDetails extends React.Component {
  render() {
    return (
      <Modal show={this.props.detailedview} onHide={this.props.toggleDetailedView}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.image_url} /><br></br><br></br>{this.props.description}<br></br>Horns: {this.props.horns}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.toggleDetailedView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BeastDetails;
