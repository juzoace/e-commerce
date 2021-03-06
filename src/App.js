import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={SignInAndSignUpPage} />
      </Switch>
 
    </div>
  )
  
}

export default App;