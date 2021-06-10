import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div>
      <center>
        <>Profile Page</>
      </center>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Your ID:</td>
            {user.id}
            <td></td>
          </tr>
          <tr>
            <td>Username:</td>
            {user.username}
          </tr>
          <tr>
            <td>Email:</td>
            {user.email}
          </tr>
          <tr>
            <td>Access Level:</td>
            <td>{user.access_level}</td>
          </tr>

          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Profile;
