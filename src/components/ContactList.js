import React from 'react';
import { Container, Table, Button, Row } from 'react-bootstrap';

import Contact from './Contact';
import UpdateContact from './UpdateContact';
import ContactForm from './ContactForm';
import { userApi } from '../helpers/Urls';
import Header from './Header';
class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showUpdateForm: false,
      showAddform: false,
      editContactId: -1,
    };
  }
  componentDidMount() {
    fetch(userApi)
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        this.setState({
          users: users,
        });
      });
  }

  //show/hide add form
  toggleAddForm = (val) => {
    this.setState({
      showAddform: val,
    });
  };
  // show/hide update form
  handleShowUpdateForm = (val, userId) => {
    this.setState({
      showUpdateForm: val,
      editContactId: userId,
    });
  };
  hideUpdateForm = () => {
    this.setState({
      showUpdateForm: false,
    });
  };
  handleformSubmit = (user) => {
    const { users } = this.state;
    // correct the id of user
    let id = users.length;
    user.id = id + 1;
    users.push(user);
    console.log(this.state.users);
    //close the form after clicking add contact button
    this.setState({
      showAddform: false,
    });
    // scroll to the bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto',
    });
  };
  render() {
    const { showUpdateForm, editContactId, users, showAddform } = this.state;
    const { updateContact } = this.props;
    return (
      <>
        <Container>
          <Row>
            {' '}
            <Header />
          </Row>
          <Row className="d-grid gap-2 mb-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => this.toggleAddForm(!showAddform)}
            >
              Show / Hide Contact Form
            </Button>
          </Row>
          <Row className="mb-3">
            {showAddform ? (
              <ContactForm formSubmit={this.handleformSubmit} />
            ) : null}
          </Row>
          <Row>
            {' '}
            {showUpdateForm ? (
              <UpdateContact
                updateContact={updateContact}
                user={users[editContactId - 1]}
                hideForm={this.hideUpdateForm}
              />
            ) : null}
          </Row>
        </Container>
        <Table striped bordered responsive hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <Contact
              user={user}
              key={index}
              toggleForm={this.handleShowUpdateForm}
            />
          ))}
        </Table>
      </>
    );
  }
}
export default ContactList;
