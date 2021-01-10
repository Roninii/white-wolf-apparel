import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
