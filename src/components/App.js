import React, { Component } from 'react';
import '../App.css';
import HomeComponent from './home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';
import withAuthentication from './withAuthentication';

const App = () =>
  <BrowserRouter>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </BrowserRouter>

export default withAuthentication(App);


// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contacts">Contacts</Link>
//             </li>
//           </ul>
//           <hr />
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/contacts" component={Contacts} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

// const Home = () => (
//   <div>
//     <h2>Hello, World! Home page</h2>
//     <HomeComponent></HomeComponent>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Contacts = () => (
//   <div>
//     <h2>Contacts</h2>
//   </div>
// );

// export default App;
