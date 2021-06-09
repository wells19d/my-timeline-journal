import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <center>
      <>This should be the User Profile Page.</>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default Profile;
