import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { userApi } from '../helpers/Urls';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
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
  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Contact Manager</h1> <ContactForm />
        <ContactList users={users} />
      </div>
    );
  }
}
export default App;
