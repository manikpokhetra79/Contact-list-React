import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { userApi } from '../helpers/Urls';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
class App extends Component {
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

  //function for handling new user/contact
  handleformSubmit = (user) => {
    const { users } = this.state;
    // correct the id of user
    let id = users.length;
    user.id = id + 1;
    users.push(user);
    console.log(this.state.users);
  };

  //handle user/contact update
  handleUserUpdate = (user) => {
    console.log('Update user here');
    console.log(user);
    // const { users } = this.state;
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
              <Container>
                <h1 className="text-center text-secondary">Contact Manager</h1>
              </Container>
              <ContactForm formSubmit={this.handleformSubmit} />
            </Route>
            <Route path="/contacts">
              <ContactList
                users={users}
                updateContact={() => this.handleUserUpdate}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
