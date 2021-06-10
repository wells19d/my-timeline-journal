import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((store) => store.user);
  return (
    <center>
      <p>Profile Page</p>
      <br />
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>User ID:</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Access:</td>
            <td>{user.access_level}</td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default Profile;
