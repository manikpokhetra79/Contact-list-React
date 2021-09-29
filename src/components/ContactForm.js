import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
class ContactForm extends Component {
  render() {
    return (
      <Container>
        {' '}
        <Form>
          {/* email username  phone */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Full Name" />
            </Form.Group>
          </Row>
          {/* email username  phone */}
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStreet">
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
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridPhonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="email" placeholder="Enter Phone Number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control type="email" placeholder="Enter Website" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="email" placeholder="Enter Company Name" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Add Contact
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
