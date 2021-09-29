import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { userApi } from '../helpers/Urls';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
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
  handleformSubmit = (user) => {
    const { users } = this.state;
    // correct the id of user
    let id = users.length;
    user.id = id + 1;
    users.push(user);
    console.log(this.state.users);
  };
  render() {
    const { users } = this.state;
    return (
      <Router>
        <div>
          {' '}
          <Header />
          <Switch>
            <Route exact path="/">
              <h1>Hi, this is a contact manager app</h1>
            </Route>
            <Route path="/contacts">
              <ContactList users={users} />
            </Route>
            <Route path="/add-contacts">
              <Container className="text-info">
                <h1>Contact Manager</h1>
              </Container>
              <ContactForm formSubmit={this.handleformSubmit} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
