import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

function ContactUs() {
  return (
    <center>
      <br />
      <br />
      <Grid container spacing={3} className="rightTable">
        <Grid item xs={12} />
        <Grid item xs={12} className="contact">
          This is a feature coming soon, for now please <br /><br />
          <a href="mailto:wells19d@gmail.com?subject=MTJ Assistance">
            Send an Email
          </a>
          !
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <br />
    </center>
  );
}

export default ContactUs;
