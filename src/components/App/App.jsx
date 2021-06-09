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
          <Redirect exact from='/login' to='/' />
          <ProtectedRoute exact path='/' authRedirect='/main'>
            <Login />
          </ProtectedRoute>{' '}
          {/* This routes a user, after logging, to their home page */}
          <Route exact path='/registration'>
            <Register />
          </Route>{' '}
          {/* Anyone can register if they go to the correct route */}
          <ProtectedRoute exact path='/main'>
            <Main />
          </ProtectedRoute>{' '}
          {/* Only a logged in user can visit a main */}
          <ProtectedRoute exact path='/view'>
            <View />
          </ProtectedRoute>{' '}
          {/* Only a logged in user can view their posts */}
          <ProtectedRoute exact path='/add'>
            <Add />
          </ProtectedRoute>{' '}
          {/* Only a logged in user can make posts */}
          <ProtectedRoute exact path='/profile'>
            <Profile />
          </ProtectedRoute>{' '}
          {/* Only a logged in user can view their profile */}
          <Route exact path='/recovery'>
            <Recovery />
          </Route>{' '}
          {/* Anyone can visit the recover page */}
          <Route exact path='/contact'>
            <ContactUs />
          </Route>{' '}
          {/* Anyone can visit the Contact us page */}
          <Route exact path='/about'>
            <AboutUs />
          </Route>{' '}
          {/* Anyone can visit the About us page */}
          <ProtectedRoute exact path='/admin'>
            <Admin />
          </ProtectedRoute>{' '}
          {/* Only someone with access and logged in can view the admin page, this is a stretch goal */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
