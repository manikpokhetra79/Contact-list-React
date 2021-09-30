import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
class UpdateContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      address: {
        city: '',
      },
    };
  }
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleAddressInputChange = (field, value) => {
    // handle all address fields
    this.setState({
      address: {
        ...this.state.address, //spread previous value
        [field]: value, //update new value of field
      },
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = this.state;

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        // call update contact function
        this.props.UpdateContact(user);
      });
  };
  render() {
    console.log(this.state);
    const { email, name, phone, address } = this.props.user;
    console.log(this.props);
    return (
      <Container className="m-3">
        <h2 className="text-center text-success">Update contact Details</h2>{' '}
        <Form className="border border-secondary p-4 border-5 rounded">
          {/* email username  phone */}
          <Button
            variant="danger"
            className="my-3"
            onClick={this.props.hideForm}
          >
            Close Form
          </Button>
          <Row className="mb-3">
            {' '}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={name}
                onChange={(e) => this.handleInputChange('name', e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={email}
                onChange={(e) =>
                  this.handleInputChange('email', e.target.value)
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridPhonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder={phone}
                onChange={(e) =>
                  this.handleInputChange('phone', e.target.value)
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder={address.city}
                onChange={(e) =>
                  this.handleAddressInputChange('city', e.target.value)
                }
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={this.onFormSubmit}>
            UpdateContact
          </Button>
        </Form>
      </Container>
    );
  }
}

export default UpdateContact;
