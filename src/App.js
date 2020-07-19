import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import ShopPage from './pages/shop/shoppage';
import Homepage from './pages/homepage/homepage'
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
