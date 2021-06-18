import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/main';
    loginLinkData.text = 'Home';
  }

  return (
    <div className='nav'>
      <Link to='/main'>
        <h2 className='nav-title'>My Timeline Journal</h2>
      </Link>
      <div>
        <Link className='navLink' to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        <Link className='navLink' to='/about'>
          About
        </Link>
        <Link className='navLink' to='/contact'>
          Contact Us
        </Link>
        {user.id && (
          <>
            <Link className='navLink' to='/profile'>
              Profile
            </Link>
            <LogOutButton className='navLink' to='/' />{' '}
            {/* Redirects a user, on log out, back to the login screen */}
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
