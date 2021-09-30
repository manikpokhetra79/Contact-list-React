import React from 'react';
import { Button, Card, ListGroupItem, ListGroup, Row } from 'react-bootstrap';
import UpdateContact from './UpdateContact';
class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdateForm: false,
    };
  }

  //hide update form
  hideUpdateContactForm = () => {
    this.setState({
      showUpdateForm: false,
    });
  };

  render() {
    const { user, editContact, deleteContact } = this.props;
    const { id, name, email, phone, address } = user;
    const { showUpdateForm } = this.state;
    return (
      <div>
        <Row>
          {' '}
          {showUpdateForm ? (
            <UpdateContact
              editContact={this.editContact}
              user={user}
              hideForm={this.hideUpdateContactForm}
            />
          ) : null}
        </Row>
        <Card style={{ width: '18rem' }} border="primary">
          <Card.Body>
            <Card.Title>Contact Card</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Id :{id}</ListGroupItem>
            <ListGroupItem>Name: {name}</ListGroupItem>
            <ListGroupItem>Email :{email}</ListGroupItem>
            <ListGroupItem>Phone:{phone}</ListGroupItem>
            <ListGroupItem>Address :{address.city}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button
              variant="success"
              className="mx-3"
              onClick={this.handleContactEdit}
            >
              Edit
            </Button>{' '}
            <Button variant="danger" onClick={() => deleteContact(user)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Contact;
