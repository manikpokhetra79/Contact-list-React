import React from 'react';
import { Container, Button, Row, CardGroup } from 'react-bootstrap';

import Contact from './Contact';
import ContactForm from './ContactForm';
import { userApi } from '../helpers/Urls';
import Header from './Header';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAddform: false,
      lastId: 10,
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

  // handle adding new contact
  handleformSubmit = (user) => {
    const { users } = this.state;
    // correct the id of user

    user.id = this.state.lastId + 1;
    users.push(user);
    console.log(this.state.users);
    //close the form after clicking add contact button
    this.setState({
      showAddform: false,
      lastId: user.id,
    });
    // scroll to the bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto',
    });
  };

  //handle update contact
  handleUpdateContact = (user, userId) => {
    let index = userId - 1;
    //update id of user for displaying correct records
    user.id = userId;
    const { users } = this.state;
    users[index] = user;
    //update users array
    this.setState({
      users,
    });
  };
  // handle delete contact
  handleDeleteContact = (user) => {
    const { users } = this.state;
    const filteredItems = users.filter((item) => item !== user);
    //update users array
    this.setState({
      users: filteredItems,
    });
  };
  render() {
    const { users, showAddform } = this.state;
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

          <Row xs={1} md={3} className="g-3">
            {users.map((user, index) => (
              <CardGroup>
                <Contact
                  user={user}
                  key={index}
                  deleteContact={this.handleDeleteContact}
                  editContact={this.handleUpdateContact}
                />
              </CardGroup>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default ContactList;
