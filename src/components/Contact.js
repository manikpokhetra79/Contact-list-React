import React from 'react';
import { Button } from 'react-bootstrap';
class Contact extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.address.city}</td>
          <td>
            <Button variant="success">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default Contact;
