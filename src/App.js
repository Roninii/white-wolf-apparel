import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import ShopPage from './pages/shop/shoppage';
import Homepage from './pages/homepage/homepage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
