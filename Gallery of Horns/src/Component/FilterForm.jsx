import React from 'react';
import { ModalFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class FilterForm extends React.Component {
  constructor(){
    super();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let filterchoice = event.target.type.value;
    let filterquantity = event.target.quantity.value;
    this.props.handleFilter(filterchoice, filterquantity);
  }
  render() {
    return(
      <>
      <Modal show={this.props.showForm} onHide={this.props.toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.handleSubmit}>
        <Modal.Body>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Feature</Form.Label>
              <Form.Select id="type">
                <option value="horns">Horns</option>
              </Form.Select>
            </Form.Group>
            <Form.Label htmlFor="disabledSelect">Horn Number</Form.Label>
            <input type="number" id="quantity"/>
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Submit</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
    );
  }

}

export default FilterForm;