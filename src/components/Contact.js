import React from 'react';
import { Button } from 'react-bootstrap';

class Contact extends React.Component {
  // handle contact edit form
  handleContactEdit = (userId) => {
    const { toggleForm } = this.props;
    //show update contact form
    toggleForm(true, userId);
    // move screen to the top
    window.scrollTo(0, 150);
  };
  render() {
    const { user } = this.props;
    const { id, name, email, phone, address } = user;
    return (
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{address.city}</td>
          <td>
            <Button
              variant="success"
              onClick={() => this.handleContactEdit(id)}
            >
              Edit
            </Button>{' '}
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default Contact;
