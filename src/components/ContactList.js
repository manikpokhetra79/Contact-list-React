import React from 'react';
import Contact from './Contact';
import { Table } from 'react-bootstrap';
const ContactList = ({ users }) => {
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <Contact user={user} key={index} />
        ))}
      </Table>
    </>
  );
};
export default ContactList;
