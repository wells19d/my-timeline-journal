import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

function Profile() {
  const user = useSelector((store) => store.user);
  return (
    <center>
      <br />
      <br />
      <Grid container spacing={3} className="rightTable">
        <Grid item xs={12} className="contact">Profile Page</Grid>
        <Grid item xs={6} className="profileLeft">User ID:<br />Username:<br />Email:</Grid>
        <Grid item xs={6} className="profileRight">{user.id}<br />{user.username}<br />{user.email}</Grid>
        <Grid item xs={12} className="contact" />
      </Grid>
      <br />
    </center>
  );
}

export default Profile;
