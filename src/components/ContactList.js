import React from 'react';
import Contact from './Contact';
import { Container, Table } from 'react-bootstrap';
import UpdateContact from './UpdateContact';
class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      editContactId: -1,
    };
  }
  // show/hide update form
  toggleUpdateForm = (val, userId) => {
    this.setState({
      showUpdateForm: val,
      editContactId: userId,
    });
  };
  render() {
    const { showUpdateForm, editContactId } = this.state;
    const { users, updateContact } = this.props;
    return (
      <>
        <Container>
          {showUpdateForm ? (
            <UpdateContact
              updateContact={updateContact}
              user={users[editContactId - 1]}
            />
          ) : null}
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
              toggleForm={this.toggleUpdateForm}
            />
          ))}
        </Table>
      </>
    );
  }
}
export default ContactList;
