import React, { Component } from 'react';
import './App.css';
import HomeComponent from './home';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <div>
    <h2>Hello, World! Home page</h2>
    <HomeComponent></HomeComponent>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contacts = () => (
  <div>
    <h2>Contacts</h2>
  </div>
);

export default App;
