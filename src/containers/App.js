import React, { Component } from 'react';
import ContactList from '../components/ContactList';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
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
        <ContactList users={users} />
      </div>
    );
  }
}
export default App;
