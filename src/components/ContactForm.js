import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
class ContactForm extends Component {
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
        ...this.state.address,
        [field]: value,
      },
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = this.state;
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
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
        this.props.formSubmit(user);
      });
  };
  render() {
    return (
      <Container>
        {' '}
        <Form>
          {/* email username  phone */}
          <Row className="mb-3">
            {' '}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => this.handleInputChange('name', e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  this.handleInputChange('email', e.target.value)
                }
              />
            </Form.Group>
            {/* 
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group> */}
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridPhonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  this.handleInputChange('phone', e.target.value)
                }
              />
            </Form.Group>
            {/* <Form.Group as={Col} controlId="formGridWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control type="email" placeholder="Enter Website" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="email" placeholder="Enter Company Name" />
            </Form.Group> */}
          </Row>

          {/* email username  phone */}
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                onChange={(e) =>
                  this.handleAddressInputChange('city', e.target.value)
                }
              />
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridStreet">
              <Form.Label>Street</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSuite">
              <Form.Label>Suite</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZipCode">
              <Form.Label>ZipCode</Form.Label>
              <Form.Control />
            </Form.Group> */}
          </Row>

          <Button variant="primary" type="submit" onClick={this.onFormSubmit}>
            Add Contact
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
