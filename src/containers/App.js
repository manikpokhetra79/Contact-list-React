import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { userApi } from '../helpers/Urls';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
      <Router>
        {' '}
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/" className="text-light text-decoration-none">
                  Contact Manager
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link
                      to="/contacts"
                      className="text-light text-decoration-none"
                    >
                      Contact List
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to="/add-contacts"
                      className="text-light text-decoration-none"
                    >
                      New Contact
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <h1>Hi, this is a contact manager app</h1>
            </Route>
            <Route path="/contacts">
              <ContactList users={users} />
            </Route>
            <Route path="/add-contacts">
              <h1>Contact Manager</h1>
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
