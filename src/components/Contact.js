import React from 'react';

const Contact = ({ user }) => {
  return (
    <div className="">
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
export default Contact;
