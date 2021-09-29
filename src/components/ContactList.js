import React from 'react';
import Contact from './Contact';

const ContactList = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <Contact user={user} key={index} />
      ))}
    </>
  );
};
export default ContactList;
