import React, { StrictMode } from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Login from './components/auth/Login'
import Signup from './components/auth/Register'

import SubNavbar from './components/admin/SubNavbar'
import Profile from './components/admin/account/Profile'

//redux 
import {Provider } from 'react-redux'
import store from './store'
import PrivateRoute  from './components/common/PrivateRoute'

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authAction';
import { clearCurrentProfile } from './actions/profileAction';

import TodoBox from './components/todos/TodoBox'

// Check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}

function App() {
  return (
    <Provider store={store} >
        <div className="App">
          <StrictMode>
            <Router>
              <Navbar />
              <PrivateRoute exact path='/landing' component={TodoBox} />
              <PrivateRoute exact path="/profiles" component={SubNavbar} />
              <PrivateRoute  path="/profile" component={Profile} />

              <Route exact path='/' component={Login} />
              <Route exact path='/register' component={Signup} />          
              <Footer />
            </Router>
          </StrictMode>
        </div>
    </Provider>
  );
}

export default App;
