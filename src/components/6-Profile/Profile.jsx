import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

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
        </tbody>
      </table>
    </center>
  );
}

export default Profile;
