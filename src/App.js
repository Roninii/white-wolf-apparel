import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import ShopPage from './pages/shop/shoppage';
import Homepage from './pages/homepage/homepage'
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
