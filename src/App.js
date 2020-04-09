import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';


const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  
  constructor() {
    super();

    this.state= {
      currentUser: null // add this for authentication purposes.
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { // method in auth library that executes when auth changes.
      this.setState({currentUser: user}); // keeps user signed in until they sign out.
    });
  }

  componentWillUnmount() { // on unmounting, we close the subscription.
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = null 

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path= '/shop' component = {ShopPage} />
          <Route path= '/signin' component = {SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;