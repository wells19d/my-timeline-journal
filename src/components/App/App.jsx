import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


import Login from '../1-Login/Login';
import Register from '../2-Registration/Register';
import Main from '../3-Main/Main';
import View from '../4-View/View';
import Add from '../5-Add/Add';
import Profile from '../6-Profile/Profile';
import Recovery from '../7-Recovery/Recovery';
import ContactUs from '../8-ContactUs/ContactUs';
import AboutUs from '../9-AboutUs/AboutUs';
import Admin from '../10-Admin/Admin';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
  <Router>
      <div>
        <Nav />
        <Switch>
        <Redirect exact from="/login" to="/ " />
        <ProtectedRoute exact path="/" authRedirect="/main" > <Login /> </ProtectedRoute>
        <ProtectedRoute exact path="/registration" authRedirect="/" > <Register /> </ProtectedRoute>
        <Route exact path="/main"><Main /></Route>
        <Route exact path="/view"><View /></Route>
        <Route exact path="/add"><Add /></Route>
        <ProtectedRoute exact path="/profile"><Profile /></ProtectedRoute>
        <Route exact path="/recovery"><Recovery /></Route>
        <Route exact path="/contact"><ContactUs /></Route>
        <Route exact path="/about"><AboutUs /></Route>
        <Route exact path="/admin"><Admin /></Route>
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;